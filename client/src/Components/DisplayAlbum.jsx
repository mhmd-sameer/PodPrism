import { albumsData, assets, songsData } from '../assets/frontend-assets/assets'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../assets/Podprism.jpg';
import Player from './Player';


const DisplayAlbum = () => {
  const {id}=useParams()
  const albumData = albumsData[id]
  console.log(albumData)
  return (
    <>
    <Navbar />
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items:end'>
      <img className="w-48 rounded" src={albumData.image} alt="/" />
      <div className='flex-col'>
        <p>Playlist</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <p className='mt-1'>
          <img className='inline-block w-5' src={logo} alt="/"/>
          <b> PodPrism </b>
          1,23,343 likes
          <b> 50 songs,</b>
          about 2 hrs 30 min
        </p>
      </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#000000]'>
      <p><b className='mr-4'>#</b>Title</p>
      <p>Album</p>
      <p className='hidden sm:block'>Date Added</p>
      <img className='m-auto w-4' src={assets.clock_icon} alt="/" />
    </div>
    <hr />
    {
      songsData.map((item,index) =>(
        <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#000000] hover:bg-[#a7a7a7] cursor-pointer'>
            <p className='text-black'>
              <b className='mr-4 text-[#000000]'>{index+1}</b>
              <img className='inline w-10 mr-5' src={item.image} alt='/' />
              {item.name}
            </p>
            <p className='text-[15px]'>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago </p>
            <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))
    }
    <Player />
    </>
  )
}

export default DisplayAlbum