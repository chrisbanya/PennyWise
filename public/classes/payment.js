export class payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    getInv() {
        return `${this.recipient} is owed N${this.amount} for ${this.details} `;
    }
}
