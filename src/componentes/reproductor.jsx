import React, { useState, useEffect, useRef } from 'react';
import { musica } from './listaReproduccion';
import ListaReproduccion from './listaReproduccion';

const ReproductorMusica = () => {
    const [cancionIndex, setCancionIndex] = useState(0);
    const [reproduciendo, setReproduciendo] = useState(false);

    const audioRef = useRef(null);

    const cancionActual = musica[cancionIndex];

    useEffect(() => {

        audioRef.current.src = cancionActual.url;

        if (reproduciendo) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [cancionActual, reproduciendo]);

    const toggleReproduccion = () => {
        setReproduciendo(!reproduciendo);
    };

    const reproducirSiguiente = () => {
        setCancionIndex((prevIndex) => (prevIndex + 1) % musica.length);
        setReproduciendo(true);
    };

    const reproducirAnterior = () => {
        console.log("Cambiando canción a la anterior");
        setCancionIndex((prevIndex) => (prevIndex - 1 + musica.length) % musica.length);
        setReproduciendo(false);
    };
    
    const handleCancionClick = (id) => {
        const clickedCancionIndex = musica.findIndex((cancion) => cancion.id === id);
        setCancionIndex(clickedCancionIndex);
        setReproduciendo(true);
      };
    

    return (
        <>
            <div className="contenido">
                <div className='musica' >
                    <audio ref={audioRef} />

                    <div className="container2">
                        <div className="nombre">
                            <p>{cancionActual.nombre}</p>
                        </div>
                        <div className="lista">
                            <ListaReproduccion onCancionClick={handleCancionClick}/>
                        </div>
                    </div>
                </div>

                <div className="informacion">
                    <img src={cancionActual.img} />
                </div>

            </div>

    

            <div className="controles">


            <button className="atras" onClick={reproducirAnterior}>
                    <i className="bi bi-skip-backward-fill"></i>
                </button>

                <button className="pausar" onClick={toggleReproduccion}>
                    <i className="bi bi-pause-circle"></i>
                </button>


                <button className="adelantar" onClick={reproducirSiguiente}>
                    <i className="bi bi-skip-forward-fill"></i>
                </button>

                
            </div>

        </>

    );
};

export default ReproductorMusica;


