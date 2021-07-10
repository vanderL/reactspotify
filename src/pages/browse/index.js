import React from 'react';

import { Container, Title, List, Playlist } from './styles'

const Browse = () => {
    return (
        <Container>
            <Title> Navegar </Title>

            <List>
                <Playlist to="/playlist/1">
                    <img 
                        src="https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" 
                        alt="Album cover" 
                    />
                    <strong> TrapStar</strong>
                    <p>Novo album do Melhor rapper de todos os tempo.</p>
                </Playlist>
                <Playlist to="/playlist/1">
                    <img 
                        src="https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" 
                        alt="Album cover" 
                    />
                    <strong> TrapStar</strong>
                    <p>Novo album do Melhor rapper de todos os tempo.</p>
                </Playlist>
                <Playlist to="/playlist/1">
                    <img 
                        src="https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" 
                        alt="Album cover" 
                    />
                    <strong> TrapStar</strong>
                    <p>Novo album do Melhor rapper de todos os tempo.</p>
                </Playlist>
                <Playlist to="/playlist/1">
                    <img 
                        src="https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" 
                        alt="Album cover" 
                    />
                    <strong> TrapStar</strong>
                    <p>Novo album do Melhor rapper de todos os tempo.</p>
                </Playlist>
            </List>
        </Container>
    )
}

export default Browse;