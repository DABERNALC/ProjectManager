import NoProjects from "../../Components/NoProjects/NoProjects";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import SubTaskStyle from "../SubTasks/SubTasksStyle.module.css";
import SubTaskColumn from "../../Components/SubTaskColumn/SubTaskColumn";
import Inconvenient from "../../Components/Inconvenient/Inconvenient";
import { useEffect, useState } from "react";
import axiosApi from "../../Axios/api";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";


function SubTasks(props) {
    let{taskId,projectId} = useParams();
  useEffect(() => {
        getData()
  }, []);
  const [doingSubtasks, setdoingSubtasks] = useState([])
  const [doneSubtasks, setdoneSubtasks] = useState([])
  let history = useHistory();
  function handleChange(value) {
      
    history.push(`/app/projects/${projectId}/${value}`);
  }
  const changedbData=(id)=>
  {
    const params = new URLSearchParams();
    params.append("subTaskId", id);
    axiosApi
    .post("/projects/checkSubtask", params)
    .then((response) => {
    //   alert("checkeada")
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const checkSubtask = (id)=>
  {
    const found = doingSubtasks.find(element => element.id ==id);
    const newDoing = doingSubtasks.filter(task=> task.id != id);
    setdoingSubtasks(newDoing)
    doneSubtasks.push(found);
    changedbData(id);
  }
  const uncheckSubtask = (id)=>
  {
    const found = doneSubtasks.find(element => element.id ==id);
    const newDone = doneSubtasks.filter(task=> task.id != id);
    setdoneSubtasks(newDone)
    doingSubtasks.push(found);
    changedbData(id)
  }
  const [data, setdata] = useState({});
  const getData = () => {
    axiosApi
      .get("/projects/getSubtasks?projectId=35")
      .then((response) => {
        setdata(response.data.data);
        setdoingSubtasks(response.data.data.doingSubtasks)
        setdoneSubtasks(response.data.data.doneSubtasks)
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Asistente Virtual</h1>
      <h2>Maguri UwU</h2>
      <select value={taskId} onChange={event => handleChange(event.target.value)}>
        {data.tasks != undefined
          ? data.tasks.map((theTask) => (
              theTask.IDParticipante == props.currentUser ?
              <option value={theTask.idTask}>{theTask.description}</option>:null
            ))
          : null}
      </select>
      <div className={SubTaskStyle.columns}>
        <SubTaskColumn title="Por hacer" subtasks={doingSubtasks} checkSubtask={(id)=>checkSubtask(id)}/>
        <SubTaskColumn title="Hecho" subtasks={doneSubtasks} checkSubtask={(id)=>uncheckSubtask(id)}/>
        <Inconvenient />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        currentUser: state.UserInfo.id
    };
  };
export default connect(mapStateToProps) (SubTasks);
