import React from 'react';

const Publicidad = () => {

    const containerStyle = {
        width: '1900px', 
        height: '60px', 
        position: 'absolute',
        top: '-5px',
        right: '0',
    };

    const rowStyle = {
        backgroundColor: 'black',
        color: 'white', 
        padding: '20px',
        width: '100%',
        right:'14px',
        zIndex: '10',
      
    };

    const textContainerStyle = {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%'
    };

    const pStyle = {
        color: 'white', 
        margin: 5,
        paddingRight: '10px'
    };

    const separatedTextStyle = {
        color: 'white',
        margin: 5,
        flexGrow: 1,
        textAlign: 'right',
        paddingRight: '10px'
    };

    return (
        <div className="container-fluid">
            <div className="row" style={containerStyle}>
                <div className="col position-relative text-center" style={rowStyle}>
                    <div style={textContainerStyle}>
                        <p style={pStyle}>Indumentaria Acosta</p>
                        <div style={separatedTextStyle}>12 cuotas sin interés</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publicidad;
