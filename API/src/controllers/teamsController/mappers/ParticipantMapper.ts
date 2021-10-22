var objectMapper = require('object-mapper');
const ParticipanteDto = require('../DtoObjects/ParticipanteDto');
export default class ParticipantMapper {
    objectMapper: any;
    constructor()
    {
        this.objectMapper = objectMapper;
    }
    getDto(participantVo: any)
    {
        const participantDto =new  ParticipanteDto();
        const map = participantDto.map;
        var result = this.objectMapper(participantVo, map);
        return result;
    }
}

