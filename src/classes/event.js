class Event {
    constructor(date, time, message, members) {
        this.date = date;
        this.time = time;
        this.message = message;
        this.members = members;
    }

    getDate = () => {
        return this.date;
    }

    getTime = () => {
        return this.time;
    }

    getMessage = () => {
        return this.message;
    }

    getMembers = () => {
        return this.members;
    }

    setDate = (date) => {
        this.date = date;
    }

    setTime = (time) => {
        this.time = time;
    }

    setMessage = (message) => {
        this.message = message;
    }

    addMember = (id) => {
        this.members.push(id);
    }

    removeMember = (id) => {
        const idx = this.members.indexOf(id);
        this.members.splice(idx, 1);
    }
}

export default Event;