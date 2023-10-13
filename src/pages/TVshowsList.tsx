import React, { useState, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { getShows } from '../api/shows';
import { ShowWithScore } from '../types/Show';
import { Typography, Grid, Container, CircularProgress } from '@mui/material';
import { ShowCard } from '../components/ShowCard';
import { Search } from '../components/Search';

const delay = 1000;

export const TVshowsList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') || '';

  const [shows, setShows] = useState<ShowWithScore[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(queryParams);
  const [appliedQuery, setAppliedQuery] = useState(queryParams);

  const applyQuery = useCallback(
    debounce(setAppliedQuery, delay),
    [delay],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);

    const params = new URLSearchParams(searchParams);
    if (event.target.value === '') {
      params.delete('query');
    } else {
      params.set('query', event.target.value);
    }
    setSearchParams(params);
  };

  useEffect(() => {
    if (appliedQuery.length < 2) {
      setShows([]);
      return;
    }

    setLoading(true);

    getShows(appliedQuery)
      .then((response) => setShows(response.data))
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [appliedQuery]);

  return (<>
    <Search query={query} onQueryChange={handleQueryChange} />

    <Container
      maxWidth='md'
      sx={{ padding: '50px', position: 'relative', top: '96px' }}
    >
      {loading && <CircularProgress color='primary' />}

      {error && <Typography>Something went wrong</Typography>}

      {shows.length === 0 && appliedQuery.length >= 2 && !loading && (
        <Typography>
          Sorry, nothing found with this search
        </Typography>
      )}

      {!loading && !error && (<Grid container spacing={2}>
        {shows.map(({ show }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
            <Link to={`/show/${show.id}`} style={{ textDecoration: 'none' }}>
              <ShowCard
                image={show.image?.medium}
                name={show.name}
                rating={show.rating.average}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      )}
    </Container>
  </>
  );
};
