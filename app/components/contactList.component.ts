import {Component} from "../common/decorators";
import {ContactService, Contact} from "../services/contact.service";

@Component({
    selector: "contactList",
    template: require("./contactList.component.html"),
    style: require("./contactList.component.css"),
})
export class ContactListComponent {
    contacts: Contact[];

    constructor(private contactService: ContactService, private $scope) {
    }

    async $onInit() {
        console.log("$onInit");

        // this.contacts = await this.contactService.getAll();
        // this.$scope.$apply();

        this.contactService.getAll().then((contacts) => {
            this.contacts = contacts;
        });
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
