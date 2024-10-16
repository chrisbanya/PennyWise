import { hasGetInv } from "../interface/getInvoice";
export class payment implements hasGetInv {
  constructor(
    readonly recipient: string,
    private details: string|number,
    public amount: number
  ) {}
  getInv() {
    return `${this.recipient} is owed N${this.amount} for ${this.details} `;
  }
}
