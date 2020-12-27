import React, { useContext } from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props)=>{
        const RestoService = useContext(RestoServiceContext);
        return (
            <Wrapped {...props} RestoService={RestoService}>

            </Wrapped>
        )
    }
};

export default WithRestoService;