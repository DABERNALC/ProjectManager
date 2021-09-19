
class TeamsController {
    createTeam(req,res)
    {
        const teamName = req.body.teamName;
        res.json({
            ok: true,
            message: `i created a team named: ${teamName} `
        });
    }
    
}

module.exports = TeamsController;