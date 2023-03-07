import React from 'react'; 

const Film = ({title, children}) => {
    return ( 
        <>
        <p>{title}</p>
        <p>{children}</p>
        </>
    );
}; 

export default Film; 