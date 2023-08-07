class Fetch {
    constructor(mode, body) {
        this.mode = mode;
        this.body = body;
    }

    async run() {
        try {
            await fetch(`http://localhost:3001/${this.mode}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.body)
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.data = data;
            });
    
            return this.data;

        } catch (e) {
            console.log(e.message);
            
        }
    }
}

export default Fetch;