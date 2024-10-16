import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { credit } from "./classes/credit.js";
import { displayList } from "./classes/displayList.js";
const form = document.querySelector(".form-container");
const select = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new displayList(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputSet;
    inputSet = [tofrom.value, details.value, amount.valueAsNumber];
    let log;
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
            throw new Error("invalid");
    }
    list.render(log, select.value, 'end');
});
