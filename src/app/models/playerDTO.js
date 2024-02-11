class PlayerDTO {
    constructor(league, team, summonername, position, name, firstname, nationality, enddate, residency, status, tricode, teamcontact) {
        this.league = league;
        this.team = team;
        this.summonername = summonername;
        this.position = position;
        this.name = name;
        this.firstname = firstname;
        this.nationality = nationality;
        this.enddate = enddate;
        this.residency = residency;
        this.status = status;
        this.tricode = tricode;
        this.teamcontact = teamcontact;
    }
}

export default PlayerDTO;
