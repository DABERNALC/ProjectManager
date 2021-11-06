import React, { useEffect, useState } from "react";
import AddTaskStyle from "./AddTaskStyle.module.css";
import { GiCancel } from "react-icons/gi";
import { connect } from "react-redux";
import { useParams } from "react-router";
import axiosApi from "../../Axios/api";
import swal from "sweetalert";


const AddTask = (props) => {
  const { projectId } = useParams();
  const [theTeam, settheTeam] = useState({});

  const [description, setdescription] = useState("");
  const [descriptionError, setdescriptionError] = useState(false);
  const [date, setdate] = useState("");
  const [dateError, setdateError] = useState(false);
  const [participantId, setparticipantId] = useState("-1");
  const [participantError, setparticipantError] = useState(false);
  const [relevance, setrelevance] = useState(true);
  const [priority, setpriority] = useState(0);
  const [validateError, setvalidateError] = useState("");
  const [isError, setisError] = useState(true);
  useEffect(() => {
    props.teams.forEach((team) => {
      if (team.idTeam == props.teamId) {
        settheTeam(team);
        console.log(team);
      }
    });
    setpriority(props.priority);
    setdescription(props.description);
    if(props.description != "") 
      setdate(props.date.split("T")[0]);
  }, []);

  const createTask = () => {
    validate();
    const params = new URLSearchParams();
    params.append("date", date);
    params.append("participantId", participantId);
    params.append("Description", description);
    params.append("proyectId", projectId);
    params.append("relevance", relevance);
    params.append("priority", priority);

    if (participantId == "-1" || date == "" || description == "") {
    } else
      axiosApi
        .post("/projects/addTask", params)
        .then((response) => {
          props.refresh();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  const updateTask = () =>
  {
    validate();
    const params = new URLSearchParams();
    params.append("date", date);
    params.append("taskId", props.id);
    params.append("Description", description);
    params.append("proyectId", projectId);
    params.append("relevance", relevance);
    params.append("priority", priority);
    if ( date == "" || description == "") {
    } else
      axiosApi
        .post("/projects/updateTask", params)
        .then((response) => {
          props.refresh();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  
  const validate = () => {
    console.log(date);

    if (description == "") {
      setdescriptionError(true);
      setvalidateError(
        validateError + " la tarea debe tener una descripción, "
      );
    } else setdescriptionError(false);

    if (date == "") {
      setdateError(true);
      setvalidateError(
        validateError + " debes elegir una fecha despues de la actual, "
      );
    } else setdateError(false);
    if (participantId == "-1") {
      setparticipantError(true);
      setvalidateError(
        validateError + " debes seleccionar un responsable de esta tarea "
      );
    } else setparticipantError(false);
  };
  const getCurrentDate = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    var date = year + "-" + month + "-" + day;

    return date;
  };
  return (
    <div className={AddTaskStyle.container}>
      <p>Descripción</p>
      <form>
        <textarea
          className={`${AddTaskStyle.descInput}   ${
            descriptionError ? AddTaskStyle.notValid : null
          }`}
          value={description}
          onChange={(e) => {
            setdescriptionError(false);
            setdescription(e.target.value);
          }}
        ></textarea>
        <div className={AddTaskStyle.selectDiv}>
          {props.description == "" ? (
            <select
              className={participantError ? AddTaskStyle.notValid : null}
              value={participantId}
              onChange={(e) => {
                setparticipantError(false);
                setparticipantId(e.target.value);
              }}
            >
              <option hidden selected value="-1">
                Responsable
              </option>
              {theTeam.Participants != undefined
                ? theTeam.Participants.map((participant) => (
                    <option value={participant.IDParticipante}>
                      {participant.Nombre}
                    </option>
                  ))
                : undefined}
            </select>
          ) : null}

          <select
            value={priority}
            onChange={(e) => {
              setpriority(e.target.value);
            }}
          >
            <option value="0"> Baja</option>
            <option value="1"> Media</option>
            <option value="2"> Alta</option>
          </select>
        </div>
        <div className={AddTaskStyle.dateAndCheck}>
          <input
            type="date"
            min={getCurrentDate()}
            className={`${AddTaskStyle.calendarStyle} ${
              dateError ? AddTaskStyle.notValid : null
            }`}
            value={date}
            onChange={(e) => {
              setdateError(false);
              setdate(e.target.value);
            }}
          />
          <div className={`${AddTaskStyle.checkwithtext} `}>
            <input
              type="checkbox"
              className={`${AddTaskStyle.checkStyle} `}
              checked={relevance}
              onChange={(e) => {
                setrelevance(!relevance);
              }}
            />
            <p className={AddTaskStyle.clientText}>Relevante para cliente</p>
          </div>
        </div>
        <div className={AddTaskStyle.buttonCancel}>
          {props.description == "" ? (
            <button
              className={` ${AddTaskStyle.buttonStyle} `}
              onClick={(e) => {
                e.preventDefault();
                createTask();
              }}
            >
              Aceptar
            </button>
          ) : (
            <button
              className={` ${AddTaskStyle.buttonStyle} `}
              onClick={(e) => {
                e.preventDefault();
                updateTask();
              }}
            >
              modificar
            </button>
          )}

          <GiCancel
            onClick={() => props.setAddTask(false)}
            className={AddTaskStyle.icon}
          ></GiCancel>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    teams: state.UserInfo.teams,
  };
};
export default connect(mapStateToProps)(AddTask);
