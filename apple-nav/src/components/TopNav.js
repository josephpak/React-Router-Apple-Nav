import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import apple from './apple.png';
import search from './search.png';
import shop from './shop.png';

const TopNavWrapper = styled.div`
    height: 48px;
    background-color: rgba(45,45,45,0.98);
    display: flex;
    z-index: 9999;
    position: absolute;
    width: 100%;
`

const TopNavContent = styled.div`
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


    .nav-link {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-size: 14px;

        &:hover {
            opacity: .65;
        }
    }
`

const TopNav = () => {
    return (
        <TopNavWrapper>
            <TopNavContent>
                <NavLink className="nav-link" to="/"><img className="apple-logo" src={apple}/></NavLink>
                <NavLink className="nav-link" to="/mac">Mac</NavLink>
                <NavLink className="nav-link" to="/ipad">iPad</NavLink>
                <NavLink className="nav-link" to="/iphone">iPhone</NavLink>
                <NavLink className="nav-link" to="/watch">Watch</NavLink>
                <NavLink className="nav-link" to="/tv">TV</NavLink>
                <NavLink className="nav-link" to="/music">Music</NavLink>
                <NavLink className="nav-link" to="/support">Support</NavLink>
                <NavLink className="nav-link" to="/"><img className="search-logo" src={search}/></NavLink>
                <NavLink className="nav-link" to="/"><img className="shop-logo" src={shop}/></NavLink>
            </TopNavContent>
        </TopNavWrapper>
    )
}

export default TopNav;