"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsController = void 0;
const teamsComponent_1 = __importDefault(require("../../components/teamsComponent/teamsComponent"));
class TeamsController {
    createTeam(req, res) {
        const teamName = req.body.teamName;
        const teamsComponent = new teamsComponent_1.default();
        teamsComponent.createTeam(req);
        res.json({
            ok: true,
            message: `i created a team named: ${teamName} `
        });
    }
}
exports.TeamsController = TeamsController;
//# sourceMappingURL=TeamsController.js.map