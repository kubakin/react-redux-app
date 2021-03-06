import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props)=>{
        // const RestoService = useContext(RestoServiceContext);
        return (
            <RestoServiceContext.Consumer>
                {
                (RestoService)=> {
                    return ( 
                        <Wrapped {...props} RestoService={RestoService}>
                        </Wrapped>
                    )
                }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;