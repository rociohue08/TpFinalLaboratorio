import React from 'react'; 
import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div 
            style={{ 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '10px', 
                background: '#9c93e5',
                padding: '20px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
            }}
        >
            <h3 style={{color:'black'}}>Servicios más pedidos</h3>
            <i className="pi pi-sparkles" style={{fontSize: '1rem', marginBottom:'10px' }}></i>
            <Button label="Dermaplaning" severity="info" rounded />
            <Button label="Semipermanente" severity="help" rounded />
            <Button label="Lifting de pestañas" severity="danger" rounded />
        </div>
    );
} 
