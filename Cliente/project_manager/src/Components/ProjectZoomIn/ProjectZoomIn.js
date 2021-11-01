import React, { useEffect, useState } from "react";
import ProjectZoomInStyle from "./ProjectZoomInStyle.module.css";
import GenericButton2 from "../GenericButton2/GenericButton2";
import { BsFolder } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import Spinner from "../Spinner/Spinner";
import * as actionCreators from "../../Store/Actions/ProjectDetails";
import { connect } from 'react-redux';
export const ProjectZoomIn = (props) => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    props.getTeamRequest({projectId:props.projectId});
  }, [])
  return (
    <div
      className={ProjectZoomInStyle.Back}
      onClick={() => {
        props.setshowDetails();
      }}
    >
      {
        <div
          className={ProjectZoomInStyle.container}
          onClick={(e) => e.stopPropagation()}
        >
          {!props.loading ? (
            <>
              <div className={ProjectZoomInStyle.containerBlue}>
                <BsFolder className={ProjectZoomInStyle.icons} />
                <h2>Proyecto</h2>
              </div>
              <div className={ProjectZoomInStyle.textContainer}>
                <h3>Nombre</h3>
                <p>{props.name}</p>
                <h3>Descripcion</h3>
                <p>{props.description}</p>
              </div>

              <div className={ProjectZoomInStyle.containerBlue}>
                <h2>Cliente</h2>
                <p>{props.customer}</p>
              </div>
              <div className={ProjectZoomInStyle.textContainer}>
                <h3>Nombre</h3>
                <p>{props.name}</p>
              </div>

              <div className={ProjectZoomInStyle.containerBlue}>
                <BsFillPeopleFill className={ProjectZoomInStyle.icons} />
                <h2>Equipo</h2>
              </div>
              <div className={ProjectZoomInStyle.textContainer}>
                <h3>Nombre</h3>
                <p>{props.NombreEquipo}</p>
              </div>

              <div className={ProjectZoomInStyle.buttonContainer}>
                <GenericButton2 text="Editar"></GenericButton2>
                <GenericButton2 text="Aceptar"></GenericButton2>
              </div>
            </>
          ) : (
           <div className={ProjectZoomInStyle.spinner}> <Spinner  /></div> 
          )}
        </div>
      }
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
      loading: state.ProjectDetail.loading,
     
      name: state.ProjectDetail.name, 
      description: state.ProjectDetail.description, 
      customer: state.ProjectDetail.customer, 
      teamId: state.ProjectDetail.teamId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamRequest: (payload) => dispatch(actionCreators.getTeamRequest(payload)),
    
  };
};
export default  connect(mapStateToProps,mapDispatchToProps)(ProjectZoomIn) ;

