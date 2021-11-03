import NoProjects from "../../Components/NoProjects/NoProjects";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import SubTaskStyle from "../SubTasks/SubTasksStyle.module.css";
import SubTaskColumn from "../../Components/SubTaskColumn/SubTaskColumn";
import Inconvenient from "../../Components/Inconvenient/Inconvenient";
import { useEffect, useState } from "react";
import axiosApi from "../../Axios/api";

function SubTasks() {
    useEffect(() => {
        getData()
    }, [])
    const [data, setdata] = useState({})
    const getData = ()=>{
        
        axiosApi
            .get("/projects/getSubtasks?projectId=35")
            .then((response) => {
            setdata(response.data.data)
            console.log(response.data.data);
            })
            .catch((error) => {
            console.log(error);
            });
    }
    return (

        <div>
            <h1>Asistente Virtual</h1>
            <h2>Maguri UwU</h2>
            <select>{
                data.tasks != undefined ?
                data.tasks.map((theTask)=>(
                    <option value={theTask.idTask}>{theTask.description}</option>
                )):
                null
                }</select>
            <div className={SubTaskStyle.columns}>
            <SubTaskColumn title="Por hacer" subtasks={data.doingSubtasks}/>
            <SubTaskColumn  title="Hecho" subtasks={data.doneSubtasks}/>
            <Inconvenient/>
            </div>
            
        </div>
    );
}

export default SubTasks;