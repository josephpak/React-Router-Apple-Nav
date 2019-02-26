import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import navdata from '../nav-data';

const TopNav = props => {
    return (
      <NavLink to={props.tab.path}>{props.tab.content}</NavLink>  
    );
}

export default TopNav;