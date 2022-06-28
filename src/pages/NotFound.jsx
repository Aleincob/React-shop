import React from 'react';
import '../styles/notFound.scss';

const NotFound = () => {
    return (
        <div className='main-div'>
            <h1 className='h1'>ERROR 404</h1>
            <h2 className='h2'>Página no encontrada</h2>
            <figure className='figure'>
                <img className='img' src="https://i.pinimg.com/564x/58/2f/bd/582fbdd0f97132e593c8477ac4d7198c.jpg" alt="Gatito pensado" />
            </figure>
            <p className='p'>No te preocupes, siempre puedes volver a <a href='http://localhost:8080'>Casa</a></p>
        </div>
    );
}

export default NotFound;