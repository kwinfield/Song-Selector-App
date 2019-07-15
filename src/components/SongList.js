import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import { Spring } from 'react-spring/renderprops';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song) }
                        >
                            Select
                        </button>
                    </div>
                    <div className="content"><p><b>{song.rank} </b>{song.title}</p></div>
                </div>
            );
        });
    }

    render(){
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div className="ui divided list">{this.renderList()}</div>
                    </div>
                )}
            </Spring>
        )
    };
};

const mapStateToProps = state => {
    return { songs: state.songs };
};

export default connect(
    mapStateToProps, 
    { selectSong }
    )(SongList); 