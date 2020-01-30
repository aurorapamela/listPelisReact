import React from "react";
import "./App.css";
import Movie from "./Movie";
import axios from "axios";

// API: https://api.ada.com.ar/movies

// Se tiene que ver asíí: https://ggqgy.csb.app/

// 5. en el JSX, agregar el .map() sobre las peliculas
//que guardamos en el estado y mostrarlas con el
//componente Movie

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get("https://api.ada.com.ar/movies").then(res => {
      const movies = res.data.movies;
      this.setState({
        movies: movies
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Peliculas</h1>
        <div id="movies">
          {this.state.movies.map(p => (
            <Movie data={p} key={p.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
