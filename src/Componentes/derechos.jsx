import React from 'react';

const Derechos = () => {
    const rowStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        width: '100%',
        margin: '0'
    };

    const containerStyle = {
        width: '1900px',
        position: 'absolute',
        left: '10px',
        marginTop: '380px' 
    };

    const textContainerStyle = {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'flex-start' 
    };

    const pStyle1 = {
        margin: 0,
        paddingRight: '10px' 
    };

    const pStyle2 = {
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.7)', 
        margin: 0
    };

    return (
        <div style={containerStyle}>
            <br /><br /><br />
            <div style={rowStyle}>
                <div style={textContainerStyle}>
                    <p style={pStyle1}>Argentina</p>
                    <p style={pStyle2}>2024 Acosta S.R.L todos los derechos reservados</p>
                </div>
            </div>
        </div>
    );
}

export default Derechos;
