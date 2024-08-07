import React from 'react';

const Banner = () => {
    let imagen5 = "remerasok.jpg";
    let imagen6 = "imagen2mejorada4.png"; 

    let imagenStyle = {
        position: 'absolute',
        top: '30%',
        width: 'auto',
        height: 'auto',
        left: '24%',  
    };

    let imagenStyle2 = {
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        top: '30%',    
        left: '54%',  
    };

    let titleStyle = {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div className='container mt-2'>
                <div className='row'>
                    <div className='col d-flex justify-content-end'>
                        <p><img src={"/images/" + imagen5} style={imagenStyle} alt="Remera" /></p>
                    </div>
                    <div className='col d-flex justify-content-end'>
                        <p><img src={"/images/" + imagen6} style={imagenStyle2} alt="Remera2" /></p>
                    </div>
                
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
