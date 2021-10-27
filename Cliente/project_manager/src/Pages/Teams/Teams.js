import NoTeams from "../../Components/NoTeams/NoTeams";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import Team from "../../Components/Team/Team"
import TeamsStyle from "./TeamsStyle.module.css"
function Teams() {

  const Teams = [
      {
          "idTeam": 185,
          "name": "laPrueba",
          "Participants": [
              {
                  "IDParticipante": 2,
                  "IDEquipo": 185,
                  "ID": 2,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "purple"
              },
              {
                  "IDParticipante": 3,
                  "IDEquipo": 185,
                  "ID": 3,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "red"
              },
              {
                  "IDParticipante": 4,
                  "IDEquipo": 185,
                  "ID": 4,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "blue"
              },
              {
                  "IDParticipante": 123,
                  "IDEquipo": 185,
                  "ID": 123,
                  "Correo": "ihy704@hotmail.com",
                  "Nombre": "Isaac",
                  "Color": "green"
              }
          ]
      },
      {
          "idTeam": 195,
          "name": "maguriPa",
          "Participants": [
              {
                  "IDParticipante": 2,
                  "IDEquipo": 195,
                  "ID": 2,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "orange"
              },
              {
                  "IDParticipante": 3,
                  "IDEquipo": 195,
                  "ID": 3,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "blue"
              },
              {
                  "IDParticipante": 4,
                  "IDEquipo": 195,
                  "ID": 4,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "grey"
              },
              {
                  "IDParticipante": 123,
                  "IDEquipo": 195,
                  "ID": 123,
                  "Correo": "ihy704@hotmail.com",
                  "Nombre": "Isaac",
                  "Color": "#fffff"
              }
          ]
      },{
        "idTeam": 195,
        "name": "maguriPa",
        "Participants": [
            {
                "IDParticipante": 2,
                "IDEquipo": 195,
                "ID": 2,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "orange"
            },
            {
                "IDParticipante": 3,
                "IDEquipo": 195,
                "ID": 3,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "blue"
            },
            {
                "IDParticipante": 4,
                "IDEquipo": 195,
                "ID": 4,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "grey"
            },
            {
                "IDParticipante": 123,
                "IDEquipo": 195,
                "ID": 123,
                "Correo": "ihy704@hotmail.com",
                "Nombre": "Isaac",
                "Color": "#fffff"
            }
        ]
    },{
        "idTeam": 195,
        "name": "maguriPa",
        "Participants": [
            {
                "IDParticipante": 2,
                "IDEquipo": 195,
                "ID": 2,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "orange"
            },
            {
                "IDParticipante": 3,
                "IDEquipo": 195,
                "ID": 3,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "blue"
            },
            {
                "IDParticipante": 4,
                "IDEquipo": 195,
                "ID": 4,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "grey"
            },
            {
                "IDParticipante": 123,
                "IDEquipo": 195,
                "ID": 123,
                "Correo": "ihy704@hotmail.com",
                "Nombre": "Isaac",
                "Color": "#fffff"
            }
        ]
    },{
        "idTeam": 195,
        "name": "maguriPa",
        "Participants": [
            {
                "IDParticipante": 2,
                "IDEquipo": 195,
                "ID": 2,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "orange"
            },
            {
                "IDParticipante": 3,
                "IDEquipo": 195,
                "ID": 3,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "blue"
            },
            {
                "IDParticipante": 4,
                "IDEquipo": 195,
                "ID": 4,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "grey"
            },
            {
                "IDParticipante": 123,
                "IDEquipo": 195,
                "ID": 123,
                "Correo": "ihy704@hotmail.com",
                "Nombre": "Isaac",
                "Color": "#fffff"
            }
        ]
    },{
        "idTeam": 195,
        "name": "maguriPa",
        "Participants": [
            {
                "IDParticipante": 2,
                "IDEquipo": 195,
                "ID": 2,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "orange"
            },
            {
                "IDParticipante": 3,
                "IDEquipo": 195,
                "ID": 3,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "blue"
            },
            {
                "IDParticipante": 4,
                "IDEquipo": 195,
                "ID": 4,
                "Correo": "ihy@gmail.com",
                "Nombre": "Isaac",
                "Color": "grey"
            },
            {
                "IDParticipante": 123,
                "IDEquipo": 195,
                "ID": 123,
                "Correo": "ihy704@hotmail.com",
                "Nombre": "Isaac",
                "Color": "#fffff"
            }
        ]
    }
  ];

  return (
    <div>
        <h2>Mis Proyectos</h2>
        <GenericButton2 text="Agregar Proyecto"/>
        <div className= {TeamsStyle.teamsContainer}>
        { 
            Teams.length>0?
                Teams.map(  theTeam => (<Team name={theTeam.name} TeamMembers={theTeam.Participants}/>))
            :
                <NoTeams/>
        }
        </div>
        
    </div>
  );
}

export default Teams;