import { expect } from "chai";
import teamsControllerSingleton from "../src/components/teamsComponent/teamsComponent";
import { DbConnection } from "../src/components/DbConnection";
import { Result } from "express-validator";
var assert    = require("chai").assert;
describe("DbConnection", function () {
 it("make query", async function () {
    const dbConnection = DbConnection.getInstance();
    let result:any;
    let expected: String = "ECONNREFUSED";
    await dbConnection
      .makeQuery("insert into participanteequipo (IDParticipante,IDEquipo) values (2,185),(3,185),(5,185)")
      .then((results) => {
        result = results;
      })
      .catch((error) => {
        result = error;
      });
      
    expect(expected).equal(result.code);
  });
  it("db conection must be singleton", async function () {
    const dbConnection = DbConnection.getInstance();
    const dbConnection2 = DbConnection.getInstance();
    assert.equal( dbConnection, dbConnection2 );
  });
});

