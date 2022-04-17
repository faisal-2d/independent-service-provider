import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState('');

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h3 className='text-center text-primary'>Our Services {services.length}</h3>
        </div>
    );
};

export default Services;