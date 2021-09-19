import TeamsControllerSingleton from "../../components/teamsComponent/teamsComponent";

export  class TeamsController {
    createTeam(req: any,res: any )
    {
        const teamName = req.body.teamName;
        const teamsComponent = new TeamsControllerSingleton();
        teamsComponent.createTeam(req);
        res.json({
            ok: true,
            message: `i created a team named: ${teamName} `
        });
    }
    
}

