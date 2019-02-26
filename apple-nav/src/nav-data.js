import React from 'react';
import apple from './components/apple.png';
import search from './components/search.png';
import shop from './components/shop.png';

const navData = [
    {
        path: '/',
        content: <img className="apple-logo" src={apple}/>
    },
    {
        path: '/mac',
        content: <p>Mac</p>
    },
    {
        path: '/ipad',
        content: <p>iPad</p>
    },
    {
        path: '/iphone',
        content: <p>iPhone</p>
    },
    {
        path: '/watch',
        content: <p>Watch</p>
    },
    {
        path: '/tv',
        content: <p>TV</p>
    },
    {
        path: '/Music',
        content: <p>Music</p>
    },
    {
        path: '/Support',
        content: <p>Support</p>
    },
    {
        path: '/search',
        content: <img className="search-logo" src={search}/>
    },
    {
        type: "string",
        path: '/Music',
        content: <img className="shop-logo" src={shop}/>
    }
]

export default navData;