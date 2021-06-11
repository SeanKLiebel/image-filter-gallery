import React, {useState, useEffect} from 'react';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import './App.css';

//const options = {
     //settings: {
     //overlayColor: 'green'
  // },
  // buttons: {
  //   backgroundColor: 'blue',
   //  iconColor: '#fff'
  // }
//}


function App() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
  }, [tag])

  return (
    <div className="App" handleSetTag={setTag}>
      <div className="tags">
      <TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false}/>
      <TagButton name="new" handleSetTag={setTag} tagActive={tag === 'new' ? true : false}/>
      <TagButton name="free" handleSetTag={setTag} tagActive={tag === 'free' ? true : false}/>
      <TagButton name="pro" handleSetTag={setTag} tagActive={tag === 'pro' ? true : false}/>
      </div>
      <SRLWrapper>
      <div className="container">
        {filteredImages.map(image => 
         <div key={image.id} className="image-card">
           <a href={`/images/${image.imageName}`}>
           <img className="image"src={`/images/${image.imageName}`} alt=""/>
           </a>
        </div>
        )}
        </div>
      </SRLWrapper>
     
    </div>
  );
}

const TagButton = ( {name, handleSetTag, tagActive }) => {
  return (
  <button className={`tag ${ tagActive ? 'active': null}`} onClick={() => handleSetTag(name)}>
    {name.toUpperCase()}{' '}
  </button>
  )
}

export default App;
