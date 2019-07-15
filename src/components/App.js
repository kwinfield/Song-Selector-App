import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import Menu from './Menu';



const App = () => {
    return (
        <div className="container">
            <Menu />
            <div className="row container mt-5">
                <div className="col-lg-8 p-3 cover">
                    <SongDetail />
                </div>
                <div className="col-lg-4 border p-5 list">
                    <h3 className="text-center pb-3 text-uppercase">Select a Song</h3>
                    <SongList />
                </div>
            </div>
        </div>
    );
};

export default App;