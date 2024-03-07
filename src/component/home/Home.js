import Hero from "../hero/Hero";
import Grid from "../grid/Grid";

const Home = ({ movies }) => {
  return (
    <>
      <Hero movies={movies} />
      <Grid getMovieData={movies} />
    </>
  );
};

export default Home;