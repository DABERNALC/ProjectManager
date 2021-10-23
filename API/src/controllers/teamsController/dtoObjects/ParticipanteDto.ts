export default class ParticipanteDto {
    map: any;
    id: String;
    name: String;
    color: String;
    constructor(id:String,name:String,color:String)
    {
        this.id = id
        this.name = name
        this.color = color
    }
}

