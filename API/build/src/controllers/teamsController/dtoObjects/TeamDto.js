"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamDto {
    constructor(idTeam, name, liderId, Participants) {
        this.idTeam = idTeam;
        this.name = name;
        this.liderId = liderId;
        //this is an array of ParticipantAvatarDto
        this.Participants = Participants;
    }
}
exports.default = TeamDto;
//# sourceMappingURL=TeamDto.js.map