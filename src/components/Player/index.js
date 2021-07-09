import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume, Progress, Controls, ProgressSlider, Time } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import SuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => {
    return (
        <Container>
            <Current>
                <img src="https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" alt="Album cover" />
            
                <div>
                    <span>RUNNING OUT OF TIME</span>
                    <small>Tyler, The Creator</small>
                </div>
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

export default Player;