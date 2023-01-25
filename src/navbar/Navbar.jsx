import React, { useState,useRef } from 'react';
import './navbar.css';

import { BsSearch,BsFillXCircleFill} from "react-icons/bs";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from 'react';
import { mode } from '../App';

import logoTitle from './title.png';
import SearchC from '../searchComponent/searchC'

export function Navbar({ setState }) {
  const [first, setFirst] = useState("show")
  const state = useContext(mode);
  
  const closeRef = useRef(null)
  const show = (e) => {
    setState();
  };
  const mobileSearch = (e) => {
    first == "hidden"? setFirst("show") : setFirst("hidden")
  };
  return (
    <header className='navcont'>

      <nav className="navbar" >
        <a className={`nombre ${first}`} rel='noreferrer' href="/" >
          <img src={logoTitle} alt="logo de la pagina" />
        </a>
        <div className='search-cont'>
          {state ? <BsFillSunFill onClick={show} className={`icon ${first}`} size={"2rem"} /> : null}
          {state ? null : <BsFillMoonStarsFill onClick={show} className={`icon ${first}`} size={"2rem"} />}
           <BsSearch  className={first=="hidden"? `icon mobile-search` :`icon searchIcon`}  size={"2rem"}  onClick={mobileSearch}/>
           <SearchC focus={first} setFirst={setFirst} classP={first=="hidden"? `searchActive search` : `search`}/>
           <BsFillXCircleFill   className={first=="hidden"? `icon close` :`icon mobile-search`}  size={"2rem"}  onClick={mobileSearch}/>
        </div>
      </nav>
    </header>
  );
}
