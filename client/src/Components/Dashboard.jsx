import Display from './Display'
import Navbar from './Navbar'
import Player from './Player'
import { Routes, Route } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-screen w- bg-white flex flex-col'>
      <Navbar />
      
      <div className='flex flex-col h-full overflow-hidden'>
        <div className='flex items-center gap-2 mt-8'>
          <p className='bg-blue-950 text-white px-4 py-1 rounded-2xl cursor-pointer'>All</p>
          <p className='bg-white text-blue-950 px-4 py-1 cursor-pointer'>Music</p>
          <p className='bg-white text-blue-950 px-4 py-1 cursor-pointer'>Podcasts</p>
        </div>
        
        <div className='mt-4 mb-[80px] overflow-y-auto scrollbar-hidden'>
          <Display />
        </div>
      </div>

      <Player className="fixed bottom-0 left-0 w-full z-10" />
    </div>
  )
}

export default Dashboard
