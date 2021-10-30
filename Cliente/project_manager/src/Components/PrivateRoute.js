import React from 'react'
import { connect } from 'react-redux';
import {Route,Redirect} from "react-router-dom"


function PrivateRoute({render: Component,currentUser,...rest}) {
    
    return (
        <Route {...rest} render={
            props =>{
                console.log("private route",currentUser);
                return(currentUser != "" ? <Component {...props}/>: <Redirect to="/"/>) 
            }
        }
        >
        </Route>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        currentUser: state.UserInfo.id
    };
  };
export default connect(mapStateToProps)(PrivateRoute) ;