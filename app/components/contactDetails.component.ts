import {appModule} from "../app.module";

export class ContactDetailsComponent {
    contact: Contact;
    onDelete: any;

    constructor() {
    }

    delete() {
        this.onDelete({contact: this.contact});
    }
}

export interface Contact {
    id: number;
    name: string;
}

appModule.component("contactDetails", <any>{
    controller: ContactDetailsComponent,
    template: require("./contactDetails.component.html"),
    style: require("./contactDetails.component.css"),
    bindings: {
        "contact": "<",
        "onDelete": "&",
    }
});