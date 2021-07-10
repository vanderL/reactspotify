import React from 'react';

import { Container, Search, User} from './styles';

const Header = () => {
    return (
        <Container>
            <Search>
                <input type="text" placeholder="Search" />
            </Search>

            <User>
                <img src="https://avatars.githubusercontent.com/u/12676148?v=4" alt="Avatar" />
                Vander Lima
            </User>
        </Container>
    )
}

export default Header;