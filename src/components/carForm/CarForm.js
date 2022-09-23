import React, {useEffect} from 'react'
import {joiResolver} from '@hookform/resolvers/joi'
import {useForm} from "react-hook-form"

import css from './carForm.module.css'
import {carService} from "../../services/car.service";
import {CarValidator} from "../../validator/car.validator";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
                setValue('model', carForUpdate.model, {shouldValidate: true})
                setValue('price', carForUpdate.price, {shouldValidate: true})
                setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const submit = async (car) => {
        if(carForUpdate){
            const {data} = await carService.updateById(carForUpdate.id,car)
            setCars(cars=>{
                const findCar=cars.find(value=>value.id===carForUpdate.id)
                Object.assign(findCar,data)
                setCarForUpdate(null)
                return [...cars]
                }
            )
        }else {
            const {data} = await carService.create(car)
            setCars(cars => [...cars, data])
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css.Form}>

            <div><label>Model: <input type="text" {...register('model', {required: true})}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}

            <div><label>Price: <input type="text" {...register('price', {required: true, valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}

            <div><label>Year: <input type="text" {...register('year', {required: true, valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{carForUpdate?'UPDATE':'SAVE'}</button>
        </form>
    )
}

export {CarForm};