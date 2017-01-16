import {Component} from "../common/decorators";

@Component({
    selector: "myHome",
    template: require("./home.component.html"),
    style: require("./home.component.css"),
})
export class HomeComponent {
    constructor() {
    }
}
