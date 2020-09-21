  
import React from 'react';

const Home = () => {
    return(
        <h1>You chose HOME</h1>
    );
}

const Navigation = props => {
    return(
        <div>
            <h1>Inside Navigation</h1>
           
               {props.children}
        </div>
    );
}

const Project = () => {
    return(
        <h1>You chose PROJECTS</h1>
    );
}

const Service = () => {
    return(
        <h1>You chose SERVICES</h1>
    );
}


export default Service;
