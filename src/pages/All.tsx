import {
  Alert,
  Box,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import AnimeCard from '../components/AnimeCard/AnimeCard';
import { useMediaQuery } from '../generated/graphql';

const All = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, loading, error } = useMediaQuery({
    variables: { page, perPage },
  });

  if (loading) {
    return (
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Something went wrong</Alert>;
  }

  let shows;

  if (data?.Page?.media) {
    shows = data.Page.media.map((media) => {
      return (
        <Grid
          key={media?.id}
          item
          xs={12}
          md={6}
          xl={4}
          sx={{ height: '20rem' }}
        >
          <AnimeCard
            image={media?.coverImage?.large}
            id={media?.id}
            year={media?.seasonYear}
            title={media?.title?.english || media?.title?.romaji}
            description={media?.description}
            genres={media?.genres ? media.genres : null}
          />
        </Grid>
      );
    });
  }
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {shows}
      </Grid>

      <Typography sx={{ mt: 2 }} variant="body1">{`Showing ${
        page * perPage - perPage + 1
      }-${page * perPage} out of ${data?.Page?.pageInfo?.total}`}</Typography>
      <Box sx={{ my: 2 }}>
        <Pagination
          count={getPageCount(data?.Page?.pageInfo?.total || 0, perPage)}
          page={page}
          size="large"
          variant="outlined"
          color="primary"
          onChange={(e, newPage) => {
            setPage(newPage);
          }}
        />
      </Box>
    </Container>
  );
};

const getPageCount = (totalRecords: number, recordsPerPage: number) => {
  return Math.ceil(totalRecords / recordsPerPage);
};

export default All;
