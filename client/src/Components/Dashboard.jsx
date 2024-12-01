import Display from './Display'
import Navbar from './Navbar'
import Player from './Player'
import {PlayerContext} from '../Context/PlayerContext'
import { useContext } from 'react'

const Dashboard = () => {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-white flex flex-col'>
      <Navbar />
      
      <div className='flex flex-col h-full overflow-hidden'>
        <div className='flex items-center gap-2 mt-8'>
          <p className='bg-blue-950 text-white px-4 py-1 rounded-2xl cursor-pointer'>All</p>
          <p className='bg-white text-blue-950 px-4 py-1 cursor-pointer'>Music</p>
          <p className='bg-white text-blue-950 px-4 py-1 cursor-pointer'>Podcasts</p>
        </div>
        
        <div className='mt-4 mb-[0px] overflow-y-auto scrollbar-hidden'>
          <Display />
        </div>

      </div>

      <Player className="fixed bottom-0 left-0 w-full z-10" />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default Dashboard
