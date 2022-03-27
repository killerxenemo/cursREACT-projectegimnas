import React, { useState, useEffect } from 'react';
import left from './left.png';
import right from './right.png';
import {Stack } from 'react-bootstrap';

const Semana=(props)=>{
    const today=new Date();
    let lunes=new Date();
    let viernes=new Date();
    lunes.setDate(today.getDate()-today.getDay()+1)
    viernes.setDate(lunes.getDate()+4)
    var date = lunes.getFullYear()+'-'+(lunes.getMonth()+1)+'-'+lunes.getDate();
    const [data, setData] = useState([lunes.toLocaleDateString('es-ES'),viernes.toLocaleDateString('es-ES'),lunes]);
    
    return (
        <>
        <Stack direction="horizontal" gap={3}>
         <a onClick={()=> {
               let temp=new Date(data[2].getTime()-7*24*3600000);let temp2=new Date(data[2].getTime()-3*24*3600000);
                setData([temp.toLocaleDateString('es-ES'),temp2.toLocaleDateString('es-ES'),temp]);
                props.canvi(temp)}}>
               <img src={left}></img></a> 
               <h5>
               {data[0]} a {data[1]}  
                </h5>             
                <a onClick={()=> {
               let temp=new Date(data[2].getTime()+7*24*3600000);let temp2=new Date(data[2].getTime()+11*24*3600000);
                setData([temp.toLocaleDateString('es-ES'),temp2.toLocaleDateString('es-ES'),temp]);
                props.canvi(temp)}}>
               <img src={right}></img></a>                           
        </Stack>
        </>
    )
}
export default Semana;