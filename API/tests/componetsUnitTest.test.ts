import { Assertion, expect } from "chai";
import teamsControllerSingleton from "../src/components/teamsComponent/TeamsComponent";
import { DbConnection } from "../src/components/DbConnection";
import { Server } from "../src/models/server";
import ProjectsControllerSingleton from "../src/components/ProjectComponent/projectsComponent";
import teamsMapper from "../src/controllers/teamsController/mappers/teamsMapper";
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
describe("teamsMapper", function () {
  it("mapping a full db response", async function () {
    const dbResponse = [
      [
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 15,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 2,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 15,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 3,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 15,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 4,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 15,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 123,
          Correo: 'ihy704@hotmail.com',
          participanteNombre: 'Isaac',
          Color: '#fffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 25,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 2,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 25,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 3,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 25,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 4,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 25,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 123,
          Correo: 'ihy704@hotmail.com',
          participanteNombre: 'Isaac',
          Color: '#fffff'
        },
         {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 35,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 2,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
        {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 35,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 3,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
        {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 35,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 4,
          Correo: 'ihy@gmail.com',
          participanteNombre: 'Isaac',
          Color: '#ffffffff'
        },
        {
          equipoId: 185,
          Tag: 'laPrueba',
          IDProyecto: 35,
          pryectoNombre: 'MAGURJECTO',
          Descripcion: 'este es una prueba pa',
          IDParticipante: 123,
          Correo: 'ihy704@hotmail.com',
          participanteNombre: 'Isaac',
          Color: '#fffff'
        }
      ],
      {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        serverStatus: 34,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
      }
    ];
    const expectedResonse = {
      "idTeam": 185,
      "name": "laPrueba",
      "Participants": [
          {
              "id": 2,
              "name": "Isaac",
              "color": "#ffffffff"
          },
          {
              "id": 3,
              "name": "Isaac",
              "color": "#ffffffff"
          },
          {
              "id": 4,
              "name": "Isaac",
              "color": "#ffffffff"
          },
          {
              "id": 123,
              "name": "Isaac",
              "color": "#fffff"
          }
      ],
      "proyects": [
          {
              "id": 15,
              "name": "MAGURJECTO"
          },
          {
              "id": 25,
              "name": "MAGURJECTO"
          },
          {
              "id": 35,
              "name": "MAGURJECTO"
          }
      ]
  };
    const teams_Mapper = new teamsMapper();
    let response = teams_Mapper.getDto(dbResponse);
    assert.deepEqual(expectedResonse,response);
  });
});