export class displayList {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        li.classList.add("border-l-4", "border-indigo-500", "my-2");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        h4.classList.add('uppercase', 'font-bold');
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.getInv();
        li.append(p);
        const hr = document.createElement("hr");
        hr.classList.add("my-2", "border-t-2", "border-gray-300");
        li.append(hr);
        if (position === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
