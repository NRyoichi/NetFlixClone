const API_KEY = "32015645b4b9ec7318ee586033346b24";

export const requests = {
  feachTrending: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `/discover/movie?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
