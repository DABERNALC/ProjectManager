"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teams {
    constructor() {
        this.teams = [];
    }
    addTeam(liderId, teamName) {
        const team = { liderId, teamName };
        this.teams.push(team);
    }
    getTeams() {
        return this.teams;
    }
}
exports.default = Teams;
//# sourceMappingURL=Teams.js.map