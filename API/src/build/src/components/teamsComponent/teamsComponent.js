"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Teams_1 = __importDefault(require("../teamsComponent/Teams"));
class teamsControllerSingleton {
    constructor() {
        const instance = this.instance;
        if (instance) {
            return instance;
        }
        this.teams = new Teams_1.default();
        this.instance = this;
    }
    createTeam(req) {
        return __awaiter(this, void 0, void 0, function* () {
            //getting the parameters from the request
            const liderId = req.body.liderId;
            const teamName = req.body.teamName;
            //logic to create a team
            this.teams.addTeam(liderId, teamName);
            //todo: llamar a la base de datos
        });
    }
}
exports.default = teamsControllerSingleton;
//# sourceMappingURL=teamsComponent.js.map