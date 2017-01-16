import {Component} from "../common/decorators";

@Component({
    selector: "myAbout",
    template: require("./about.component.html"),
    style: require("./about.component.css"),
})
export default class AboutComponent {
    constructor() {
    }
}
