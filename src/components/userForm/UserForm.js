import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {userValidator} from "../../validator/user.validator";
import {userService} from "../../services/user.service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const submit = async (user) => {
        const {data} = await userService.create(user)
        setUsers(users =>[...users,data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type={"text"} placeholder={'surname'} {...register('surname')}/>
            {errors.surname && <span>{errors.surname.message}</span>}
            <input type={"text"} placeholder={'age'} {...register('age')}/>
            {errors.age && <span>{errors.age.message}</span>}
            <button disabled={!isValid}>SAVE</button>
        </form>
    );
};

export {UserForm};