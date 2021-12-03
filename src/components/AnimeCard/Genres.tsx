import { Chip, Box, alpha } from '@mui/material';

type Props = {
  genres: string[];
};

const GenreGroup = ({ genres }: Props) => {
  return (
    <Box
      overflow="auto"
      sx={{
        display: 'flex',
        padding: 1,
        backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.2),
        overflowY: 'hidden',
        '&::-webkit-scrollbar': {
          display: 'none',
          scrollBehavior: 'smooth',
        },
      }}
    >
      {genres.map((genre) => (
        <Chip
          color="primary"
          size="small"
          key={genre}
          label={genre}
          sx={{ m: 0.5 }}
        />
      ))}
    </Box>
  );
};

export default GenreGroup;
