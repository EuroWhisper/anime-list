import LinesEllipsis from 'react-lines-ellipsis';
import S from 'string';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import GenreGroup from './Genres';

type Props = {
  id?: number;
  title?: string | null;
  description?: string | null;
  year?: number | null;
  image?: string | null;
  genres?: (string | null | undefined)[] | null;
};

const AnimeCard = ({ id, title, description, year, image, genres }: Props) => {
  const strippedString = S(description || '')
    .escapeHTML()
    .decodeHTMLEntities().s;
  return (
    <Card
      variant="outlined"
      key={id}
      sx={{ display: 'flex', padding: 0, height: '100%' }}
    >
      <CardMedia
        component="img"
        alt="cover art"
        src={image || ''}
        sx={{
          objectFit: 'cover',
          width: { xs: '10rem', md: '12rem' },
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex={1}
        overflow="hidden"
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">({year})</Typography>
          {description && (
            <Typography sx={{ mt: 2 }} component="p" variant="caption">
              <LinesEllipsis maxLine={3} text={strippedString} trimRight />
            </Typography>
          )}
        </Box>
        {genres && <GenreGroup genres={genres as string[]} />}
      </Box>
    </Card>
  );
};

export default AnimeCard;
