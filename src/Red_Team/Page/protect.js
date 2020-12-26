import React from 'react';
import {Route} from 'react-router-dom';

export const Protect = ({component: Component, ...rest}) =>{
    return (
        <Route {...rest}
         render= { props => {
            return <Component {...props} />;

        }}
        />
    )
}