import React, {useEffect, useState} from 'react';
import {getAllFlights} from "../services/flights.service";
import {Flight} from "./Flight";

const Flights = () => {

    let [flights,setFlights]=useState([])

    useEffect(()=>{
        getAllFlights().then(flightsArray => {
            setFlights(flightsArray.filter(flight=>flight.launch_year!=='2020'))})
    },[])

    return (
        <div>
            {flights.map((flight,index)=>(<Flight key={index} flight={flight}/>))}
        </div>
    );
};

export {Flights} ;