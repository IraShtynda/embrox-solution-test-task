import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Container, InputAdornment, AppBar } from '@mui/material';
import { Colors } from '../styles/theme';

type Props = {
  query: string,
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Search: React.FC<Props> = ({ query, onQueryChange }) => {
  return (<AppBar sx={{ background: Colors.dark, padding: '20px'}}>
    <Container maxWidth='md'>
      <TextField
        placeholder="Type the show's name"
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={onQueryChange}
        sx={{ width: '100%', background: Colors.light, borderRadius: '5px' }}
        type='search'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      >
      </TextField>
    </Container>
  </AppBar>
  );
};