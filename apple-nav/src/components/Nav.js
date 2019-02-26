import React from 'react';
import styled from 'styled-components';

import TopNav from './TopNav';

const NavWrapper = styled.div`
    height: 48px;
    background-color: rgba(45,45,45,0.98);
    display: flex;
    z-index: 9999;
    position: absolute;
    width: 100%;
`

const NavContent = styled.div`
    margin: 0 auto;
    max-width: 980px;
    padding: 0 22px;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .apple-logo {
        width: 18px;
        height: 22px;
    }

    .search-logo {
        margin-top: 5px;
    }


    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-size: 14px;

        &:hover {
            opacity: .65;
        }
    }
`

const Nav = props => {
    return (
        <NavWrapper>
            <NavContent>
                {props.navdata.map(tab => (
                    <TopNav 
                    tab={tab}
                    />
                ))}
            </NavContent>
        </NavWrapper>
    )
}

export default Nav;