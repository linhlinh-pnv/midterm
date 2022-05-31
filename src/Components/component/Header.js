import React, { Component } from 'react'
import header from '../asset/header.css';
//import SearchBar from './search';

 class Header  extends Component {
  render() {
    return (
      <div>
           <header>
                 <ul className="nav_link">
                   <img src='https://vov.vn/themes/custom/vovvn/logo.svg' width={100}></img>
                   <li><a href=''>Home</a></li>
                   <li>Buy</li>
                   <li>Contact</li>
                   <li>Getting</li>
                   <li>Back</li>
                   <input type="text" placeholder="Search.." ></input>
                   {/* <li>
                   <SearchBar></SearchBar>
                   </li> */}
                 </ul>
                 {/* <div>
                   <SearchBar></SearchBar>
                 </div> */}
               </header>
      </div>
    )
  }
}
export default Header;