//import {AboutComponent} from "./components/about.component";
import {HomeComponent} from "./components/home.component";

export const routes: Route[] = [
    {
        name: "home",
        url: "/",
        component: HomeComponent,
    },
    {
        name: "about",
        url: "/about",
        componentUrl: "app/components/about.component"
    },
];

export interface Route {
    name: string;
    url: string;
    component?: any;
    componentUrl?: string;
}
