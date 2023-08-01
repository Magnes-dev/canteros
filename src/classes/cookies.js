class Cookies {
    constructor(cookie) {
        this.cookie = cookie;
    }

    data() {
        const arr1 = this.cookie.split(';');
        let result = {};
        arr1.forEach((e) => {
            const arr = e.split('=');
            switch(arr[0].trim()) {
                case 'name':
                    Object.assign(result, {name: arr[1]});
                    break;
                case 'id':
                    Object.assign(result, {id: arr[1]});
                    break;
            }
        });

        return result;
    }
}

export default Cookies;