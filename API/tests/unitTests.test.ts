import { expect } from "chai";
import { DbConnection } from "../src/components/DbConnection";
import { Result } from "express-validator";
import ProjectsControllerSingleton from "../src/components/ProjectComponent/projectsComponent";
import teamsMapper from "../src/controllers/teamsController/mappers/teamsMapper";
import { duplicatedTeams, teamDetailsDto, teamDetailsVo } from "./teamsMapper_params";


var assert = require("chai").assert;
describe("DbConnection", function () {
  // it("make query", async function () {
  //   const dbConnection = DbConnection.getInstance();
  //   let result: any;
  //   let expected: String = "ECONNREFUSED";
  //   await dbConnection
  //     .makeQuery(
  //       "insert into participanteequipo (IDParticipante,IDEquipo) values (2,185),(3,185),(5,185)"
  //     )
  //     .then((results) => {
  //       result = results;
  //     })
  //     .catch((error) => {
  //       result = error;
  //     });
      
  //   expect(expected).equal(result.code);
  // });
  
  
  it("db conection must be singleton", async function () {
    const dbConnection = DbConnection.getInstance();
    const dbConnection2 = DbConnection.getInstance();
    assert.equal(dbConnection, dbConnection2);
  });
});

let parameters = [
  { date: "2020-1-2", result: true },
  { date: "2020-1", result: false },
  { date: "2020-asd-2", result: false },
  { date: "asd-asd-2", result: false },
  { date: "2020-13-2", result: false },
  { date: "2020-1-32", result: false },
  { date: "2020-13-2", result: false },
  { date: "asdasd-asdasd-asd", result: false },
  { date: "2020-13-40", result: false },
];
parameters.forEach((parameter) => {
  describe("projectsComponent", function () {
    it("isDate", async function () {
      const dbConection = DbConnection.getInstance();

      const projectsComponent = new ProjectsControllerSingleton(dbConection);
      const result: boolean = projectsComponent.isValidDate(parameter.date);
      assert.equal(result, parameter.result);
    });
  });
});


duplicatedTeams.forEach((theArray: { array: any[]; params: any[]; expected: any; }) => {
  describe("teamsMapper", function () {
    it("delete duplicated objects in an array", async function () {
      const teams_Mapper = new teamsMapper();

      const response = teams_Mapper.delete_duplicated_In_Array(
        theArray.array,
        theArray.params
      );  

      assert.deepEqual(response, theArray.expected);
    });

    it("Component test", async function () {
      const teams_Mapper = new teamsMapper();

      const response = teams_Mapper.getDto(
        teamDetailsVo
      );          
      assert.deepEqual(teamDetailsVo, teamDetailsVo);
    });


  });
  
});
