import {Service} from "../common/decorators";

@Service({
    name: "contactService",
})
export class ContactService {
    constructor(private $q) {
    }

    getAll(): ng.IPromise<Contact[]> {
        return this.$q.when([
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ]);
    }
}

export interface Contact {
    id: number;
    name: string;
}
