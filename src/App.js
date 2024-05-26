import './style.css';
import { Container, MovieList, Movie } from './style';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(response => response.json())
      .then(data => setMovies(data.products));
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };

  return (
    <Container>
      <nav className="navbar">
        <div className="navbar">front-challenge-spacex</div>
      </nav>

      <div className="container-main">
        <div className="launches">
          <h1 className="title">Personagens</h1>
          <MovieList>
            {movies.slice(0, visibleCount).map(movie => (
              <Movie key={movie.id} onClick={() => handleMovieClick(movie)}>
                <div className="launch-entry">
                  <li>
                    <span>{movie.title}</span>
                    <p>:{movie.brand} 💲{movie.price} ❤️{movie.rating}</p>
                  </li>
                </div>
              </Movie>
            ))}
          </MovieList>
          {visibleCount < movies.length && (
            <button className="floating-button" onClick={handleLoadMore} id='load-more'>+</button>
          )}
        </div>
        {selectedMovie && (
          <div className="mission-details">
            <img src={selectedMovie.thumbnail} alt='foto-detalhes' className='img' />
            <div className="mission-name">
              <p id='mission-name-p'>{selectedMovie.title}</p>
              <p id='mission-resumo-p'>{selectedMovie.description}</p>
              <a href="https://shopping.livelo.com.br/collectionsPLP/smartphones?msclkid=2870a98cc2c9165db781cfde18008c0d&utm_source=bing&utm_medium=cpc&utm_campaign=PMAX-BING_mktp_gshop_aon_PCRM3586_MktpCasa_20231318_liv&utm_term=shopping.livelo.com.br&utm_content=aon_PCRM3586_MktpAONTodosProdutos_20231201_li" target="_blank" rel="noopener noreferrer" className="button">Abrir</a>
            </div>
          </div>
        )}
      </div>
      
    </Container>
  );
}

export default App;
