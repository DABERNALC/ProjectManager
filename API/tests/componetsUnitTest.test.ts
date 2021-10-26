import { Assertion, expect } from "chai";
import teamsControllerSingleton from "../src/components/teamsComponent/teamsComponent";
import { DbConnection } from "../src/components/DbConnection";
import { Server } from "../src/models/server";
import ProjectsControllerSingleton from "../src/components/ProjectComponent/projectsComponent";
var assert = require("chai").assert;
describe("teamsComponent", function () {
  it("getTeam", async function () {
    //       const dbConection = DbConnection.getInstance();
    //       const teamsComponent = new teamsControllerSingleton(dbConection);
    //       const req = {query: {TeamId:185}}
    //       const expected = {
    //         "equipoId": 185,
    //         "Tag": "laPrueba",
    //         "IDProyecto": 15,
    //         "pryectoNombre": "MAGURJECTO",
    //         "Descripcion": "este es una prueba pa",
    //         "IDParticipante": 2,
    //         "Correo": "ihy@gmail.com",
    //         "participanteNombre": "Isaac",
    //         "Color": "#ffffffff"
    //     }
    //       let result;
    //       const server = new Server();
    // server.execute();
    //       teamsComponent.getTeam(req).then((res)=>{
    //   result = res
    //       }).catch((err)=>{
    //   result = err
    //       });
    //       console.log(result);
    //       assert.equal(expect,result);
  });
});
const parameters = [{date:"2020-1-2",result:true},{date:"2020-1",result:false},{date:"2020-asd-2",result:false},{date:"asd-asd-2",result:false},{date:"2020-13-2",result:false},{date:"2020-1-32",result:false}]
parameters.forEach((parameter)=>{
  describe("projectsComponent", function () {
    it("isDate", async function () {
      const dbConection = DbConnection.getInstance();
      
      const projectsComponent = new ProjectsControllerSingleton(dbConection); 
      const  result:boolean = projectsComponent.isValidDate(parameter.date);
      
      
      assert.equal(result,parameter.result);
      
  
  
  
    });
  });
  
})
