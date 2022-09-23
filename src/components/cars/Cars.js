import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([])
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            {cars.map(car => (<Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>))}
        </div>
    );
};

export {Cars};