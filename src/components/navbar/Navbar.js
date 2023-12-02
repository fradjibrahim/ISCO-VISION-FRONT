import * as React from "react";
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import { blue } from 'material-ui-colors';
function Navbar() {
    const pages = [{name: 'Soccer', path: 'soccer'}, {name: 'Basketball', path: '#news'}, , {name: 'Basketball', path: '#news'}, {name: 'Basketball', path: '#news'}, {name: 'Basketball', path: '#news'}, {name: 'Basketball', path: '#news'},{name: 'Courses', path: '#news'}];

    return (
        <div class="topnav">
            <div class="logo">
                <a class="active" href="#home">Logo</a>
            </div>
            <div class="category">
                {pages.map((item, index) => (
                    <a key={index} href={item.path}>{item.name}</a>
                ))}
            </div>
            
            <div class="icon">
                <SearchIcon color="action" sx={{ fontSize: 40 }}/>
                <ShoppingCartIcon color="action" sx={{ fontSize: 40 }} />
                <Person2Icon sx={{ fontSize: 40, color: blue[50] }} />
            </div>
            
        </div>
    );
}

export default Navbar;
