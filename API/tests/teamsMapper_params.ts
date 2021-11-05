export const  duplicatedTeams = [
    {
      array: [
        { name: "Isaac", id: 1 },
        { name: "Isaac", id: 1 },
      ],
      params: ["name", "id"],
      expected: [{ name: "Isaac", id: 1 }],
    },
    {
      array: [
        { nombre: "Isaac", identificacion: 1 },
        { nombre: "Isaac", identificacion: 1 },
        { nombre: "Isaac", identificacion: 1 },
      ],
      params: ["nombre", "identificacion"],
      expected: [{ nombre: "Isaac", identificacion: 1 }],
    },
    {
      array: [
        { name: "Isaac", id: 1 },
        { name: "sebastian", id: 2 },
      ],
      params: ["name", "id"],
      expected: [
        { name: "Isaac", id: 1 },
        { name: "sebastian", id: 2 },
      ],
    },
    {
      array: [
        { name: "Nicolas", id: 1 },
        { name: "sebastian", id: 2 },
        { name: "Nicolas", id: 1 },
      ],
      params: ["name", "id"],
      expected: [
        { name: "Nicolas", id: 1 },
        { name: "sebastian", id: 2 },
      ],
    },
    {
      array: [
        { id: 2, name: "Isaac", color: "#ffffffff" },
        { id: 3, name: "Isaac", color: "#ffffffff" },
        { id: 4, name: "Isaac", color: "#ffffffff" },
        { id: 123, name: "Isaac", color: "#fffff" },
        { id: 2, name: "Isaac", color: "#ffffffff" },
        { id: 3, name: "Isaac", color: "#ffffffff" },
        { id: 4, name: "Isaac", color: "#ffffffff" },
        { id: 123, name: "Isaac", color: "#fffff" },
        { id: 2, name: "Isaac", color: "#ffffffff" },
        { id: 3, name: "Isaac", color: "#ffffffff" },
        { id: 4, name: "Isaac", color: "#ffffffff" },
        { id: 123, name: "Isaac", color: "#fffff" },
      ],
      params: ["name", "id"],
      expected: [
        { id: 2, name: "Isaac", color: "#ffffffff" },
        { id: 3, name: "Isaac", color: "#ffffffff" },
        { id: 4, name: "Isaac", color: "#ffffffff" },
        { id: 123, name: "Isaac", color: "#fffff" },
      ],
    },
  ];






  export const teamDetailsVo = [
    [
      {
        'equipoId': 245,
        'Tag': 'const',
        'IDProyecto': "",
        'pryectoNombre': "",
        'Descripcion': "",
        IDParticipante: '2',
        Correo: 'ihy@gmail.com',
        participanteNombre: 'Isaac',
        Color: 'red'
      }
    ]
  ]
  export const teamDetailsDto = {
    "idTeam": 245,
    "name": "const",
    "Participants": [
        {
            "id": "2",
            "name": "Isaac",
            "color": "red"
        }
    ],
    "proyects": []
}