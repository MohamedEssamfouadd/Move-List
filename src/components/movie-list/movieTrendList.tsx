import { Grid, Paper, Box } from "@mui/material";
import MovieTrendCard from "../movie-card/movieTrend";
import { MovieDataType } from "../../assets/data";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  return (
    <Box sx={{display: "flex", gap: 2,flexWrap:{xs:"nowrap",lg:"wrap"}, overflowX:{xs:"scroll", lg:"hidden"}
    
    }} >
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
