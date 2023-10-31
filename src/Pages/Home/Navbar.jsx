

// import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'

function Navbar () {

  const [navActive,setNavActive]=useState(false)

  const toggleNav=()=>{
    setNavActive(!navActive)
  }
  const closeMenu=()=>{
    setNavActive(false)
  }
  useEffect(()=>{
    const handleResize=()=>{
        if(window.innerWidth<=500){
            closeMenu
        }
    }
    window.addEventListener("resize",handleResize);

    return ()=>{
        window.removeEventListener("resize",handleResize)
    }
  },[]);

  useEffect(()=>{
    if(window.innerWidth<=1200){
        closeMenu
    }
  },[]);

}

export default Navbar
