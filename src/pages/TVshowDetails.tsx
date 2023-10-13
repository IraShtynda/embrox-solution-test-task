import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getShow } from '../api/shows';
import { Show } from '../types/Show';
import { Typography, Grid, Container, Button, CircularProgress, Box, Rating } from '@mui/material';
import { ShowInfo } from '../components/ShowInfo';
import defaultImages from '../assets/images/no-img.png';

export const TVshowDetails: React.FC = () => {
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { showId } = useParams();

  useEffect(() => {
    setLoading(true);

    getShow(showId)
      .then((response) => setShow(response.data))
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [showId]);

  return (
    <Container maxWidth="md" sx={{ padding: '80px' }}>
      {loading && <CircularProgress color="primary" />}

      {error && <Typography>Something went wrong</Typography>}

      {!loading && !error && <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={show?.image?.original ? show?.image?.original : defaultImages}
            alt={show?.name}
            sx={{
              width: '100%',
              transition: 'transform 0.3s',
              ':hover': {
                transform: 'scale(1.1)',
              }
            }} />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h1">{show?.name}</Typography>
          <ShowInfo
            genres={show?.genres}
            status={show?.status}
            schedule={show?.schedule}
          />

          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px', gap: '5px' }}
          >
            <Rating
              name="read-only"
              value={show?.rating.average}
              precision={0.1}
              max={10}
              readOnly
            />
            <Typography>
              {show?.rating.average ? show?.rating.average : '(waiting for more votes)'}
            </Typography>
          </Box>

          {show?.url && (<Link to={`${show?.url}`}>
            <Button variant="contained" sx={{ marginBlock: '20px', paddingInline: '40px' }}>
              Link to show
            </Button>
          </Link>
          )}
        </Grid>

        <Grid item xs={12} md={12}>
          {show?.summary ? (
            <Typography dangerouslySetInnerHTML={{ __html: show?.summary }} />
          ) : (
            <Typography>
              {`We don't have a summary for ${show?.name} yet.`}
            </Typography>
          )}
        </Grid>
      </Grid>}
    </Container>
  );
};