import MovieList from "./components/movie/MovieList";
import Navbar from "./components/navbar/Navbar";
import { MoviesProvider } from "./contexts/MoviesContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
