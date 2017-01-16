import {appModule} from "../app.module";
import {Contact} from "./contactDetails.component";

export class AppComponent {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    run() {
        alert("ddd");
    }

    onContactDeleted(contact: Contact) {
        if(confirm("Delete contact " + contact.name + "?")) {
            const index = this.contacts.findIndex(c => c == contact);
            if(index != -1) {
                this.contacts.splice(index, 1);
            }
        }
    }
}

appModule.component("myApp", <any>{
    controller: AppComponent,
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});