import React from 'react'
import './sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ShortsIcon from './shorts.svg'

const Sidenav = () => {
  return (
    <div className='drawer'>
        <div className='home'>
            <a href='#'><HomeIcon /><p>Home</p></a>
        </div>
        <div className='shorts'>
            <a href='#'><img src={ShortsIcon} /><p>Shorts</p></a>
        </div>
        <div className='subscription'>
            <a href='#'><SubscriptionsIcon />Subscription</a>
        </div>
        <div className='library'>
            <a href='#'><VideoLibraryIcon />Library</a>
        </div>
    </div>
  )
}

export default Sidenav