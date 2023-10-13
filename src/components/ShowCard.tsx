import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Colors } from '../styles/theme';
import defaultImages from '../assets/images/no-img.png';

type Props = {
  image: string,
  name: string,
  rating: number
}

export const ShowCard: React.FC<Props> = ({ image, name, rating }) => {
  return (
    <Card sx={{
      ':hover': {
        boxShadow: 10,
      },
    }}>
      <CardMedia
        sx={{ aspectRatio: 1}}
        image={image ? image : defaultImages}
        title={name}
      />

      <CardContent>
        <Typography
          variant='h2'
          sx={{ height: '32px', display: 'flex', alignItems: 'center' }}>
          {name}
        </Typography>

        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
          <StarIcon sx={{ color: Colors.yellow, marginRight: '5px' }} />
          <Typography >
            {rating}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};