import './header.css'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className='main'>
        <div className='header'>
          <div className='left'>
             <div className='menu'><a href='#'><MenuIcon /></a></div>
             <div className='logo'><a href='#'><img src={Logo} /></a></div>
          </div>
          <div className='blank'></div>
          <div className='search-bar'>
            <input type='search' placeholder='Search' />
             <button className='search-icon'><SearchIcon /></button>
             <button className='mic'><MicIcon /></button>
          </div>
           <div className='blank'></div>
           <div className='nav'>
             <div className='video-icon'><a href='#'><VideoCallIcon /></a></div>
             <div className='bell'><a href='#'><NotificationsNoneIcon /></a></div>
             <div className='avatar'><a href='#'><Avatar /></a></div>
           </div>
          
        </div>
    </div>
  )
}

export default Header