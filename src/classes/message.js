class Message {
    constructor(userId, message) {
        this.userId = userId;
        this.message = message;
    }

    getUserId = () => this.userId;

    getMessage = () => this.message;
    
}

export default Message;