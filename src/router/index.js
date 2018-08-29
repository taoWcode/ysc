import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';


const routeOne = [
    {
        bExact:true,
        hash:'/',
        key:'Index'
    }
];

export default routeOne.map( (val) => {
    
    return (
        <Route 
            exact = {val.bExact ? true:false}
            path = {val.hash}
            key  = {val.key}
            component = {
                Loadable({
                    loader:() => import('./one.js').then((e) => {
                        console.log('神马')
                        return e.default[val.key]
                    }),
                    loading(){
                        return (<div className = 'm-load-component'>Loadding...</div>)
                    }
                })
                
             }
        />

    )

} );