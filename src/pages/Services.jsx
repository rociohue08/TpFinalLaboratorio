// se usa Axios para hacer una solicitud GET a la API y obtener los servicios que cree en la base de datos

import React, { useEffect, useState } from 'react'; 
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import axios from 'axios';
import FormularioMensaje from '../Components/FormularioMensaje';

export default function BasicDemo() {
    const [servicios, setServicios] = useState([]); // Para almacenar los servicios desde la API

    // Función para obtener los servicios desde la API
    useEffect(() => {
        axios.get('http://localhost:3000/api/servicios')
            .then(response => {
                setServicios(response.data); // Almacenar los servicios en el estado
            })
            .catch(error => {
                console.error("Hubo un error al obtener los servicios", error);
            });
    }, []); // El array vacío asegura que solo se ejecute una vez cuando se monta el componente

    return (
        <div className="card">
            <h1 style={{textAlign:'center'}}>SERVICIOS QUE OFRECEMOS</h1>
            {servicios.length > 0 ? (
                servicios.map((servicio, index) => (
                    <Card key={index} title={servicio.nombre} style={{color:'#9e2997'}}>
                        <p className="m-0" style={{color:'black', fontSize:'17px'}}>{servicio.descripcion}</p>
                        {/* Mostrar imagen solo si existe */}
                        {servicio.imagen && (
                            <div className="card flex justify-content-center">
                                <Image src={servicio.imagen} alt={servicio.nombre} width="250" />
                            </div>
                        )}
                        <p className="m-0" style={{color:'black',fontWeight:'bold', fontFamily:'monospace',fontSize:'18px'}}> Precio: ${servicio.precio}</p>

                        <Button label="Quiero reservar un turno💛" style={{marginTop:'5px'}} severity="help" rounded />
                    </Card>
                ))
            ) : (
                <p>Cargando servicios...</p> // Mensaje mientras los servicios se cargan
            )}
            
            <div style={{ marginTop: '20px' }}>
                <FormularioMensaje /> {/* llamo al form */}
            </div>
        </div>
    );
};