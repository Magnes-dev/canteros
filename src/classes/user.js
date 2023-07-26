class User {
    constructor(name, telf) {
        this.name = name;
        this.telf = telf;
    }

    getName = () => {
        return this.name;
    }

    getTelf = () => {
        return this.telf;
    }

    setName = (name) => {
        this.name = name;
    }

    setTelf = (telf) => {
        this.telf = telf;
    }
 }

 export default User;