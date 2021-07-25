import React, {Fragment} from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Container, Current, Volume, Progress, Controls, ProgressSlider, Time } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import SuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => {
    return (
        <Container>
            {!!player.currentSong && (
                <Sound 
                    url={player.currentSong.file}
                    playStatus={player.status}
                />
            )}

            <Current>
                {!!player.currentSong && (
                    <Fragment>
                        <img
                            src={player.currentSong.thumbnail} 
                            alt={player.currentSong.title} />
                    
                        <div>
                            <span>{player.currentSong.title}</span>
                            <small>{player.currentSong.author}</small>
                        </div>
                    </Fragment>    
                )}
            </Current>

            <Progress>
                <Controls>
                    <button>
                        <img src={SuffleIcon} alt="Shuffle" />
                    </button>
                    <button>
                        <img src={BackwardIcon} alt="" />
                    </button>
                    <button>
                        <img src={PlayIcon} alt="" />
                    </button>
                    <button>
                        <img src={PauseIcon} alt="" />
                    </button>
                    <button>
                        <img src={ForwardIcon} alt="" />
                    </button>
                    <button>
                        <img src={RepeatIcon} alt="" />
                    </button>
                </Controls>
                <Time>
                    <span>1:39</span>
                    <ProgressSlider>
                        <Slider 
                           railStyle={{background:' #404040', borderRadius: 10}}
                           trackStyle={{background: '#1ed760' }}
                           handleStyle={{ border: 0}} 
                        />
                    </ProgressSlider>
                    <span>3:22</span>
                </Time>
            </Progress>

            <Volume>
                <img src={VolumeIcon} alt="Volume" />
                <Slider 
                    railStyle={{background:' #404040', borderRadius: 10}}
                    trackStyle={{background: '#fff' }}
                    handleStyle={{ display: 'none'}}
                    //value={50}
                />
            </Volume>
        </Container>
    )
}

Player.propTypes = {
    player: PropTypes.shape({
        currentSong: PropTypes.shape({
            thumbnail: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            file: PropTypes.string,
        }),
        status: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = state => ({
    player: state.player,
})

export default connect(mapStateToProps)(Player);