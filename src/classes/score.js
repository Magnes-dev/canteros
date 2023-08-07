class Score {
    constructor(userId, eventId, voterId, score) {
        this.userId = userId;
        this.eventId = eventId;
        this.voterid = voterId;
        this.score = score;
    }

    getUserId = () => this.userId;

    getEventId = () => this.eventId;

    getVoterId = () => this.voterId;

    getScore = () => this.score;

    setUserId = (id) => this.userId = id;

    setEventId = (id) => this.eventId = id;

    setVoterid = (id) => this.voterid = id;

    setScore = (score) => this.score = score;
}

export default Score;