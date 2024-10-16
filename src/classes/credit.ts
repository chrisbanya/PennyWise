import { hasGetInv } from "../interface/getInvoice";
export class credit implements hasGetInv {
  constructor(
    readonly client: string,
    private details: string| number,
    public amount: number
  ) {}
  getInv() {
    return `Received N${this.amount} from ${this.client} for ${this.details} `;
  }
}
