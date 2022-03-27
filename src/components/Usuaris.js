import React, { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';

const Usuaris=(props)=>{
    const [data, setData] = useState([]);
    const [usuario,setUsuario]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('http://192.168.193.133:5211/gimnas/usuari');
            //const currentData = await response.json();
            const usuarios = await response.json();
            console.log(usuarios[0]);
            setData(usuarios);
            setUsuario(usuarios[0])
        }
        fetchData();
    },[])
    return (

        <Stack  direction="horizontal" gap={2}>
            <h5>Usuari </h5>
            <select onChange={e=> {
                const newid=e.target.value-1;
                setUsuario(data[newid]);
                props.canvi(data[newid].username)}}>
            {data.map(d=> {
                return (
                        <option value={d.id}>
                            {d.username}
                        </option>
                )
            })}
            </select>
        </Stack>
    )
}
export default Usuaris;