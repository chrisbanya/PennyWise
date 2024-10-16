export class credit {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    getInv() {
        return `Received N${this.amount} from ${this.client} for ${this.details} `;
    }
}
