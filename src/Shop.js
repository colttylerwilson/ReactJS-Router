//OUtputing fornite 
//State holds the info from API
//Effect runs the fetch call

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop() {
    //To 
    //The empty brackets means it only runs when component mounts
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    //Adding async because it's coming from database?
    const fetchItems = async () => {
        //fetch is a function call from where? react? dunno?
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
        setItems(items.items);
    }



    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => (
                <h1 key={item.itemid}><Link to={`shop/${item.itemid}`}>{item.name}</Link></h1>
            ))}
        </div>
    );
}

export default Shop;
