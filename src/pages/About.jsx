import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

export default function GalleryDemo() {
    const [images, setImages] = useState([]);
    
    // Definición de las imágenes
    const imageList = [
        {
            itemImageSrc: './src/assets/images/MASAJISTA.jpg',
            thumbnailImageSrc: './src/assets/images/MASAJISTA.jpg',
            alt: 'Imagen 1'
        },
        {
            itemImageSrc: './src/assets/images/LASHISTA.jpg',
            thumbnailImageSrc: './src/assets/images/LASHISTA.jpg',
            alt: 'Imagen 1'
        },
        {
            itemImageSrc: './src/assets/images/COSMETOLOGA.jpg',
            thumbnailImageSrc: './src/assets/images/COSMETOLOGA.jpg',
            alt: 'Imagen 2'
        },
        {
            itemImageSrc: './src/assets/images/MAQUILLADORA.jpg',
            thumbnailImageSrc: './src/assets/images/MAQUILLADORA.jpg',
            alt: 'Imagen 3'
        },
        {
            itemImageSrc: './src/assets/images/MANICURISTA.jpg',
            thumbnailImageSrc: './src/assets/images/MANICURISTA.jpg',
            alt: 'Imagen 1'
        }
    ];

    useEffect(() => {
        setImages(imageList); // Carga las imágenes en el estado
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '80px', height: 'auto' }} />;
    };

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>EQUIPO DE DERMACARE</h1> 
        

            <Galleria 
                value={images} 
                numVisible={5} 
                style={{ maxWidth: '640px' }} 
                item={itemTemplate} 
                thumbnail={thumbnailTemplate}
                showThumbnails={true}
                showIndicators={true}
            />
        </div>
    );
}
