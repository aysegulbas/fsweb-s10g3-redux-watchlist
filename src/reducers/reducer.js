import {
  BASA_DON,
  LISTEDEN_CIKAR,
  LISTEYE_EKLE,
  ONCEKI_FILM,
  SONRAKI_FILM,
} from "../action";
import { movies } from "../movies";

const initialState = {
  movies: movies,
  sira: 0,
  favMovies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SONRAKI_FILM:
      return { ...state, sira: state.sira + 1 };
    case ONCEKI_FILM:
      return { ...state, sira: state.sira - 1 };
    case LISTEYE_EKLE:
      return {
        ...state,
        favMovies: [...state.favMovies, state.movies[state.sira]],
        movies: state.movies.filter(
          (movie) => movie.id !== state.movies[state.sira].id
        ),
      };
    case LISTEDEN_CIKAR:
      return {
        ...state,
        movies: [...state.movies, state.favMovies[state.sira]],
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== state.favMovies[state.sira].id
        ),
      };
    case BASA_DON:
      return {
        ...state,
        sira: 0,
      };
    default:
      return state;
  }
}
