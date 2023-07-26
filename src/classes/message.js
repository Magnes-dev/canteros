class Message {
    constructor(userId, message) {
        this.userId = userId;
        this.message = message;
    }

    getUserId = () => {
        return this.userId;
    }

    getMessage = () => {
        return this.message;
    }
}

export default Message;