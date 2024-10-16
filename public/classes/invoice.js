export class invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    getInv() {
        return `${this.client}  owes me N${this.amount} for ${this.details} `;
    }
}
