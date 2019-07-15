import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { rank: '#1', title: 'Thriller', artist: 'Michael Jackson', released: '1982', cover: 'https://billboard.blogs.com/.a/6a00d8341c784753ef011570b9e419970c-800wi'},
        { rank: '#2', title: 'Like A Prayer', artist: 'Madonna', released: '1984', cover: 'https://www.billboard.com/files/styles/review_main_image/public/madonna-like-a-prayer-album-billboard-650.jpg'},
        { rank: '#3', title: 'When Doves Cry', artist: 'Prince', released: '1984', cover: 'https://www.billboard.com/files/styles/review_main_image/public/prince-purple-rain-album-cover-billboard-650-full.jpg'},
        { rank: '#4', title: 'I Wanna Dance With Somebody', artist: 'Whitney Houston', released: '1987', cover: 'http://assets-cf.gbeye.com/thumbnails/full_size_205299_1501510720.jpg'},
        { rank: '#5', title: 'Baby One More Time', artist: 'Britney Spears', released: '1998', cover: 'https://images-na.ssl-images-amazon.com/images/I/51xgNoXsBNL.jpg'},
        { rank: '#6', title: 'It’s Gonna Be Me', artist: 'NSync', released: '2000', cover: 'https://m.media-amazon.com/images/M/MV5BNDRhYzIzMWMtZjFlYy00ODhiLThmMWMtMzNkZWUzZDU1YTNmXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg'},
        { rank: '#7', title: 'Everybody (Backstreet’s Back)', artist: 'The Backstreet Boys', released: '1997', cover: 'https://img.discogs.com/G08IjBExw0ZYVkiXPq6tdS1TRiw=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1405940-1415360178-5637.jpeg.jpg'},
        { rank: '#8', title: 'Rolling in the Deep', artist: 'Adele', released: '2011', cover: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/12/2.Adele-21021012.jpg'},
        { rank: '#9', title: 'Don’t Stop Believing', artist: 'Journey', released: '1981', cover: 'https://images-na.ssl-images-amazon.com/images/I/51b901biaQL.jpg'},
        { rank: '#10', title: 'Billie Jean', artist: 'Michael Jackson', released: '1982', cover: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/BillieJeanSingleMichaelJacksonPress050312.jpg'}, 
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});