export default class ParticipanteDto {
    map: any;
    constructor()
    {
        this.map = {
            "idFirebase": "participantData.idIFirebase",
            "name": "participantData.name",
            "title": "Envelope.Request.Item.ShortTitle",
            "description": "Envelope.Request.Item.ShortDescription",
            "length": "Envelope.Request.Item.Dimensions.Length",
            "width": "Envelope.Request.Item.Dimensions.Width",
            "height": "Envelope.Request.Item.Dimensions.Height",
            "inventory.onHandQty": "Envelope.Request.Item.Inventory"
        };
    }
}

