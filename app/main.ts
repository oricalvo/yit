import * as angular from "angular";
import {AppComponent} from "./components/app.component";
import {appModule} from "./app.module";
import {ContactDetailsComponent} from "./components/contactDetails.component";
import {routes} from "./routes";
import {HomeComponent} from "./components/home.component";
//import {AboutComponent} from "./components/about.component";
import {ContactListComponent} from "./components/contactList.component";

declare var SystemJS;

const components = [
    AppComponent,
    ContactDetailsComponent,
    HomeComponent,
    //AboutComponent,
    ContactListComponent
];

appModule.config(function($stateProvider, $urlRouterProvider) {
    for(let route of routes) {

        if(route.component) {
            const options = route.component.$$componentOptions;
            if (!options) {
                console.log("No component options for component", route.component);
                throw new Error("No component options for component");
            }

            $stateProvider.state({
                name: route.name,
                url: route.url,
                template: options.template
            });
        }
        else if(route.componentUrl) {
            $stateProvider.state({
                name: route.name,
                url: route.url,
                template: function() {
                    return SystemJS.import(route.componentUrl).then(function(m) {
                        const ctor = m.default;

                        const options = ctor.$$componentOptions;
                        if (!options) {
                            console.log("No component options for component", route.component);
                            throw new Error("No component options for component");
                        }

                        return options.template;
                    });
                }
            });
        }
    }

    $urlRouterProvider.otherwise("/");
});

angular.bootstrap(document.getElementById("html"), [appModule.name]);