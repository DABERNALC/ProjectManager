import React from 'react'
import { connect } from 'react-redux';
import {Route,Redirect} from "react-router-dom"


function PrivateRoute({render: Component,currentUser,...rest}) {
    
    return (
        <Route {...rest} render={
            props =>{
                return(currentUser !== "" ? <Component {...props}/>: <Redirect to="/"/>) 
            }
        }
        >
        </Route>
    )
}

export default (PrivateRoute) ;