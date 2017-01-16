import {appModule} from "../app.module";
import {Contact} from "../services/contact.service";
import {Component} from "../common/decorators";

@Component({
    selector: "contactDetails",
    template: require("./contactDetails.component.html"),
    style: require("./contactDetails.component.css"),
    bindings: {
        "contact": "<",
        "onDelete": "&",
    }
})
export class ContactDetailsComponent {
    contact: Contact;
    onDelete: any;

    constructor() {
    }

    delete() {
        this.onDelete({contact: this.contact});
    }
}
