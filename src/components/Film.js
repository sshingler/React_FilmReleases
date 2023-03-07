import React from 'react'; 

const Film = ({name, children}) => {
    return ( 
        <>
       <p><a href={children} target="_blank">{name}</a></p>
        </>
    );
}; 

export default Film; 