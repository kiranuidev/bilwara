import React, {
    Component
} from 'react';
import MovieDetails from './moviedetails';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{
                "id": 1,
                "name": "Bahu bali 2",
                "year": 2017,
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg",
                "production_house": "ABC Movies",
                "rating": 5,
                "type": "epic",
                "language": "Telugu",
                "date": "2017-09-30T18:30:00.000Z"
            }, {
                "id": 2,
                "name": "Captain Marvel",
                "year": 2019,
                "image_url": "https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg",
                "production_house": "Australia X",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 3,
                "name": "Wonder Woman",
                "year": 2018,
                "image_url": "https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/wonder_woman_whv_keyart.jpg",
                "production_house": "DC",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 4,
                "name": "Iron Man3",
                "year": 2017,
                "image_url": "https://media.comicbook.com/wp-content/uploads/2013/03/iron-man-soundtrack.jpg",
                "production_house": "Marvel",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 5,
                "name": "Captain America",
                "year": 2015,
                "image_url": "https://is4-ssl.mzstatic.com/image/thumb/Video128/v4/b9/b8/f1/b9b8f1f7-6363-96cf-54c8-38281c6496f0/contsched.oihqldfq.lsr/268x0w.jpg",
                "production_house": "Marvel",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 6,
                "name": "Hulk",
                "year": 2017,
                "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Hulk_movie.jpg/220px-Hulk_movie.jpg",
                "production_house": "Marvel",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 7,
                "name": "Batman",
                "year": 2015,
                "image_url": "https://i.pinimg.com/originals/37/ec/34/37ec346f9cd8b1097f2cd821e208e72e.jpg",
                "production_house": "DC",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 8,
                "name": "Antman",
                "year": 2016,
                "image_url": "https://www.joblo.com/assets/images/oldsite/posters/images/full/ant-man-international-2.jpg",
                "production_house": "Marvel",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }, {
                "id": 9,
                "name": "Jumanji",
                "year": 2018,
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/A1hFzTczzJL._SY679_.jpg",
                "production_house": "Disney",
                "rating": 4,
                "type": "fiction",
                "language": "English",
                "date": "2019-01-31T18:30:00.000Z"
            }]

        }
    }
    componentWillUnmount(){
        console.log('I am movies List Unmoiunted');
    }
    render() {
        let listOfMoviesDisplayed='';
            if(this.props.search==''){
                listOfMoviesDisplayed = this.state.movies.map((movie,index)=>{
                    return <MovieDetails key={index} details = {movie}/>
                })
            }
            else{
                let filterMovies = this.state.movies.filter((movie,index)=>{
                    return movie.name.includes(this.props.search)
                });
                listOfMoviesDisplayed = filterMovies.map((movie,index)=>{
                    return <MovieDetails key={index} details = {movie}/>
                })
            }
        
        return (
            <div>
                {listOfMoviesDisplayed}
            </div>
        )
    }
}

export default MovieList