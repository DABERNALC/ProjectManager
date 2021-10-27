import NoTeams from "../../Components/NoTeams/NoTeams";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import Team from "../../Components/Team/Team"
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
                  "Color": "#ffffffff"
              },
              {
                  "IDParticipante": 3,
                  "IDEquipo": 185,
                  "ID": 3,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "#ffffffff"
              },
              {
                  "IDParticipante": 4,
                  "IDEquipo": 185,
                  "ID": 4,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "#ffffffff"
              },
              {
                  "IDParticipante": 123,
                  "IDEquipo": 185,
                  "ID": 123,
                  "Correo": "ihy704@hotmail.com",
                  "Nombre": "Isaac",
                  "Color": "#fffff"
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
                  "Color": "#ffffffff"
              },
              {
                  "IDParticipante": 3,
                  "IDEquipo": 195,
                  "ID": 3,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "#ffffffff"
              },
              {
                  "IDParticipante": 4,
                  "IDEquipo": 195,
                  "ID": 4,
                  "Correo": "ihy@gmail.com",
                  "Nombre": "Isaac",
                  "Color": "#ffffffff"
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
        {
        <Team name={Teams[0].name} TeamMembers={Teams[0].Participants}></Team>
        /*true?
          Teams.map(Team => (<Team name={Team.name} TeamMembers={Team.Participants}></Team>))
        :
          <NoTeams></NoTeams>*/
        }
    </div>
  );
}

export default Teams;