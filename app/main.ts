import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {appModule} from "./app.module";
import {ContactDetailsComponent} from "./components/contactDetails.component";

const components = [
    AppComponent,
    ContactDetailsComponent
];

angular.bootstrap(document.getElementById("html"), [appModule.name]);