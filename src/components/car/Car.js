import React from 'react';

import css from './car.module.css'
import {carService} from "../../services/car.service";

const Car = ({car, setCars, setCarForUpdate}) => {
    const {id, model, price, year} = car

    const deleteCar = async () => {
        await carService.deleteById(id)
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id)
            cars.splice(index, 1)
            return [...cars]
        })
    }

    return (
        <div className={css.car}>

            <div className={css.models}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>

            <div className={css.tools}>
                <button onClick={() => setCarForUpdate(car)}>UPDATE</button>
                <button onClick={() => deleteCar()}>DELETE</button>
            </div>

        </div>
    );
};

export {Car};