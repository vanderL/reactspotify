import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => {
    return (
        <Container>
            <Header>
                <img 
                    src="https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" 
                    alt="Album cover" 
                />  
                <div>
                    <span>PLAYLIST</span>
                    <h1>Tyler, the create - New album</h1>
                    <p>7 músicas</p>

                    <button>PLAY</button>
                </div>
            </Header>

            <SongList cellPadding={0} cellSpacing={0}>
                <thead>
                    <th />
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Albúm</th>
                    <th>
                        <img 
                            src={ClockIcon} 
                            alt="Duração"
                        />
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src={PlusIcon} 
                                alt="Adicionar"
                            />
                        </td>
                        <td>RUNNING OUT OF TIME</td>
                        <td>Tyler</td>
                        <td>Igor</td>
                        <td>2:57</td>
                    </tr>
                </tbody>
            </SongList>
        </Container>
    )
}

export default Playlist;