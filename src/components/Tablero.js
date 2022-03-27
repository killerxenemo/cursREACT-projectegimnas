import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Tablero=(props)=>{
    const [data, setData] = useState([]);
    const [titulos, setTitulos] = useState([]);    
    useEffect(()=>{
        const fetchData = async () => {
            const url='http://192.168.193.133:5211/gimnas/reserves/setmana/'+props.semana;
            console.log(url);
            const response = await fetch(url);
            const tablero = await response.json();
            //const today=new Date(2022,0,31,1,0,0);
            const today=new Date(props.semana);
            console.log(tablero);
            let x=new Array(6);
            let dias=new Array(5);
            let titbase=['horas','Dilluns ','Dimarts ','Dimecres ','Dijous ','Divendres '];
            const horas=['15','16','17','18','19','20']
            for (let i = 0; i < x.length; i++) {
                x[i] = [horas[i]+":00"," "," "," "," "," "];
            }
            for (let j = 0; j < dias.length; j++) {          
                let dia=new Date(today.getTime()+j*24*3600000);
                dias[j]=dia.toISOString().substring(0,10);
                titbase[j+1]=titbase[j+1]+dias[j];
              }            
            for (let i=0;i<tablero.length;i++){
                console.log(tablero[i].data);
                const indexdia = dias.findIndex(object => {
                    return object === tablero[i].data;
                  });
                  const indexhora = horas.findIndex(object => {
                    return object === tablero[i].hora;
                  });  
                  if (tablero[i].username==props.name){
                    x[indexhora][indexdia+1]="RESERVADA";
                  }
                  else{
                    x[indexhora][indexdia+1]="NO DISPONIBLE";
                  }      
            }
            setData(x);
            setTitulos(titbase);
        }
        fetchData();
    },[props])
    return (
        <div className="grid grid-cols-3 gap-4 m-3">
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Table stripped bordered hover responsive="md">
                <thead><tr>
                  {titulos.map(function(x) {
                    return <th>{x}</th>
                  })
             }
    </tr></thead>
    <tbody>
        {data.map(function(x) {
                return <tr>{x.map(function(val) { return <td>{val}</td> })}</tr>
             })
        }
    </tbody>
                </Table></div>
        </div>
    )
}
export default Tablero;