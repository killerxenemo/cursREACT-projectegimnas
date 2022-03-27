import React, { useState, useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';


const Formulari=(props)=>{
    const [dias, setDias] = useState([]);

    useEffect(()=>{
        const today=new Date(props.semana);   
        let diasSemana=new Array(5);    
        for (let j = 0; j < diasSemana.length; j++) {          
            let dia=new Date(today.getTime()+j*24*3600000);
            diasSemana[j]=dia.toISOString().substring(0,10);
            }        
            setDias(diasSemana);    
            console.log(diasSemana);
    },[props])

    return (

        <Form>
        <h3>Nova Reserva {props.usuari}</h3>
        <Form.Group className="mb-3" controlId="formBasicDia">
          <Form.Label>Dia</Form.Label>
          <Form.Select>
          {dias.map(function(x) {
                    return <option> {x} </option>
                  })
             }

          </Form.Select>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicHora">
          <Form.Label>Hora</Form.Label>
          <Form.Select>
              <option> 15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}
export default Formulari;