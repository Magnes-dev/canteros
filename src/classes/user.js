class User {
    constructor(name, telf) {
        this.name = name;
        this.telf = telf;
    }

    getName = () => this.name;

    getTelf = () => this.telf;

    setName = (name) => this.name = name;

    setTelf = (telf) => this.telf = telf;
 }

 export default User;