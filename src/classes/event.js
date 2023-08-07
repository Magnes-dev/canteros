class Event {
    constructor(date, time, message, winner = 'Por determinar', members) {
        this.date = date;
        this.time = time;
        this.message = message;
        this.winner = winner;
        this.members = members;
    }

    getDate = () => this.date;

    getTime = () => this.time;

    getMessage = () => this.message;

    getMembers = () => this.members;

    setDate = (date) => this.date = date;

    setTime = (time) => this.time = time;

    setMessage = (message) => this.message = message;

    addMember = (id) => this.members.push(id);

    removeMember = (id) => {
        const idx = this.members.indexOf(id);
        this.members.splice(idx, 1);
    }
}

export default Event;