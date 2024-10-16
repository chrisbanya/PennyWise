import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { credit } from "./classes/credit.js";
import { hasGetInv } from "./interface/getInvoice.js";
import { displayList } from "./classes/displayList.js";

const form = document.querySelector(".form-container") as HTMLFormElement;
const select = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;
const list = new displayList(ul)

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let inputSet: [string, string|number, number];
  inputSet = [tofrom.value, details.value, amount.valueAsNumber];
  let log: hasGetInv;
  switch (select.value) {
    case "invoice":
      log = new invoice(...inputSet);
      break;
    case "payment":
      log = new payment(...inputSet);
      break;
    case "credit":
      log = new credit(...inputSet);
      break;
      default:
        throw new Error("invalid")
  }
 list.render(log, select.value, 'end')
});
