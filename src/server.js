import { Server, Model } from "miragejs"

new Server({
  models: {
    movie: Model,
  },

  routes() {
    this.timing = 1000;
    this.urlPrefix = 'https://api.ada.com.ar';

    this.get("/movies")

    this.passthrough(request => {
      return request.url.indexOf('https://api.ada.com.ar') < 0;
    });
  },

  seeds(server) {
    server.create("movie", { title: "Batman Begins", image: 'https://www.diariodevenusville.com/sites/default/files/images/BATMAN_BEGINS_0.jpg', description: `After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.`, imdb: 'https://www.imdb.com/title/tt0372784/' })
    server.create("movie", { title: "The Dark Knight", image: 'https://i.pinimg.com/originals/02/f8/dc/02f8dc09755c134ef1b55dd5be941b5e.jpg', description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`, imdb: 'https://www.imdb.com/title/tt0468569/' })
    server.create("movie", { title: "The Dark Knight Rises", image: 'https://thegonzeaux.files.wordpress.com/2012/07/the-dark-knight-rises-teaser.jpg?w=300&h=203', description: `Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane. `, imdb: 'https://www.imdb.com/title/tt1345836/' })
  }
})