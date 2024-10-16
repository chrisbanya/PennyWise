import { hasGetInv } from "../interface/getInvoice";
export class invoice implements hasGetInv {
  constructor(
    readonly client: string, 
    private details: string | number, 
    public amount: number) {}
  getInv() {
    return `${this.client}  owes me N${this.amount} for ${this.details} `;
  }
}
