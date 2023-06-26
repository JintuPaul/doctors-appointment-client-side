import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PrimaryDetails = () => {
    const {primary} = useLoaderData()
    const {name} = primary
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default PrimaryDetails;