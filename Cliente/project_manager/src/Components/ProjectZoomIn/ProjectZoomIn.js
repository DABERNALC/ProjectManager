import React, { useEffect, useState } from "react";
import ProjectZoomInStyle from "./ProjectZoomInStyle.module.css";
import GenericButton2 from "../GenericButton2/GenericButton2";
import { BsFolder } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import Spinner from "../Spinner/Spinner";
import * as actionCreators from "../../Store/Actions/ProjectDetails";
import { connect } from "react-redux";
import axiosApi from "../../Axios/api";
import swal from "sweetalert";
import * as userActionCreators from "../../Store/Actions/UserInfo";

export const ProjectZoomIn = (props) => {
  const [loading, setloading] = useState(false);
  const [update, setupdate] = useState(false);

  const [name, setname] = useState("");
  const [nameError, setnameError] = useState(false);
  const [description, setdescription] = useState("");
  const [descriptionError, setdescriptionError] = useState(false);
  const [customerName, setcustomerName] = useState("");
  const [customerNameError, setcustomerNameError] = useState(false);
  useEffect(() => {
    props.getTeamRequest({ projectId: props.projectId });
  }, []);
  useEffect(() => {
    setname(props.name);
    setdescription(props.description);
    setcustomerName(props.customer);
  }, [props.loading]);
  const updateProject = () => {
    if (!checkParameters()) {
      const params = new URLSearchParams();
      params.append("Description", description);
      params.append("Name", name);
      params.append("CustomerName", customerName);

      params.append("projectId", props.projectId);
      axiosApi
        .post("/projects/updateProject", params)
        .then((response) => {
          props.setshowDetails();
          props.refreshUserData({ participantId: props.liderId });
          swal(
            "projecto modificado correctamente",
            "todos los datos han sido guardados",
            "success"
          );
        })
        .catch((error) => {
          console.log(error);
          console.log(error);
          swal({
            icon: "error",
            title: "Error modigicando el projecto",
            text: "no hemos podido modificar el projecto, intenta mas tarde...",
          });
        });
    }
  };
  const checkParameters = () => {
    let error = false;
    if (name.length == 0 && name.length < 30) {
      error = true;
      setnameError(true);
    }
    if (description.length == 0 && description.length < 50) {
      error = true;
      setdescriptionError(true);
    }
    if (customerName.length == 0 && customerName.length < 30) {
      error = true;
      setcustomerNameError(true);
    }
    return error;
  };
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
                {update ? (
                  <>
                    {nameError ? (
                      <p style={{ color: "red" }}>
                        debes ingresar un nombre y que sea menor a 30 caracters
                      </p>
                    ) : null}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setnameError(false);
                        setname(e.target.value);
                      }}
                    />
                  </>
                ) : (
                  <p>{props.name}</p>
                )}
                <h3>Descripcion</h3>
                {update ? (
                  <>
                    {descriptionError ? (
                      <p style={{ color: "red" }}>
                        debes ingresar una descripcion y que sea menor a 50
                        caracters
                      </p>
                    ) : null}
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => {
                        setdescriptionError(false);
                        setdescription(e.target.value);
                      }}
                    />
                  </>
                ) : (
                  <p>{props.description}</p>
                )}
              </div>

              <div className={ProjectZoomInStyle.containerBlue}>
                <h2>Cliente</h2>
              </div>
              <div className={ProjectZoomInStyle.textContainer}>
                <h3>Nombre</h3>
                {update ? (
                  <>
                    {customerNameError ? (
                      <p style={{ color: "red" }}>
                        debes ingresar un nombre de cliente y que sea menor a 30
                        caracters
                      </p>
                    ) : null}

                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setcustomerNameError(false);
                        setcustomerName(e.target.value);
                      }}
                    />
                  </>
                ) : (
                  <p>{props.customer}</p>
                )}
              </div>

              <div className={ProjectZoomInStyle.containerBlue}>
                <BsFillPeopleFill className={ProjectZoomInStyle.icons} />
                <h2>Equipo</h2>
              </div>
              <div className={ProjectZoomInStyle.textContainer}>
                <h3>Nombre</h3>
                <p>{props.TeamName}</p>
              </div>

              <div className={ProjectZoomInStyle.buttonContainer}>
                {update ? (
                  <div onClick={() => updateProject()}>
                    <GenericButton2 text="guardar"></GenericButton2>
                  </div>
                ) : (
                  <div onClick={() => setupdate(true)}>
                    <GenericButton2 text="Editar"></GenericButton2>
                  </div>
                )}

                <GenericButton2 text="Aceptar"></GenericButton2>
              </div>
            </>
          ) : (
            <div className={ProjectZoomInStyle.spinner}>
              {" "}
              <Spinner />
            </div>
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
    teamId: state.ProjectDetail.teamId,
    liderId: state.UserInfo.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamRequest: (payload) =>
      dispatch(actionCreators.getTeamRequest(payload)),
    refreshUserData: (payload) =>
      dispatch(userActionCreators.refreshUserData(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectZoomIn);
