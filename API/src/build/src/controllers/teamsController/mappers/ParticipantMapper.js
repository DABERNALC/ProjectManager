"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectMapper = require('object-mapper');
const ParticipanteDto = require('../DtoObjects/ParticipanteDto');
class ParticipantMapper {
    constructor() {
        this.objectMapper = objectMapper;
    }
    getDto(participantVo) {
        const participantDto = new ParticipanteDto();
        const map = participantDto.map;
        var result = this.objectMapper(participantVo, map);
        return result;
    }
}
exports.default = ParticipantMapper;
//# sourceMappingURL=ParticipantMapper.js.map