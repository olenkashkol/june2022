import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {allService} from "../../services/all.service";

const AlbumsPageDetails = () => {
    const {state} = useLocation()
    const {id} = useParams()

    const [album, setAlbum] = useState({})

    useEffect(() => {
        if (!state) {
            allService.getAlbumById(id).then(({data}) => setAlbum(data))
        } else {
            setAlbum(state)
        }
        }, [id,state])

        return (
            <div>
                {album && <div>{JSON.stringify(album)}</div>}
            </div>
        );
    };

    export {AlbumsPageDetails};