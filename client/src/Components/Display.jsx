import { albumsData } from '../assets/frontend-assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/frontend-assets/assets'
import SongItems from './SongItems'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className='mb-3'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto '> 
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image }/>))}
        </div>
        <h1 className='my-5 font-bold text-2xl'>Todays biggest hits</h1>
        <div className='flex overflow-auto '> 
            {songsData.map((item,index)=> (<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)) }
        </div>
    </div>
    
  )
}

export default Display
