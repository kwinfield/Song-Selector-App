import React from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops';

const coverStyle = {
    width: '80%'
};

const SongDetail = ({ song }) => {
    if (!song) {
        return <div className="text-center"><img src="http://monster10.com/images/Articles/The-10-Best-Songs-Of-All-Time.jpg" /></div>
    }
    return (
        <Spring
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{ duration: 700 }}
            >
                {props => (
                     <div style={props}>
                        <div className="text-center align-self-center">
                            <img src={song.cover} style={ coverStyle} />
                            <h1>
                                {song.rank} {song.title}
                            </h1>
                            <h3>
                                {song.artist}
                            </h3>
                        </div>
                    </div>
                 )}
        </Spring>
       
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);