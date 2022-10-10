import React, {useEffect, useState} from 'react';

import {allService} from "../../services/all.service";
import {Album} from "./Album";

const Albums = () => {
    const [albums,setAlbums] = useState([]);
    useEffect(()=>{
        allService.getAlbumsAll().then(({data})=>setAlbums(data))
    },[])
    return (
        <div>
            {albums.map(album=>(<Album key={album.id} album={album} />))}
        </div>
    );
};

export {Albums};