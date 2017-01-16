import {appModule} from "../app.module";

export interface ComponentOptions {
    selector: string;
    template: string;
    style: string;
    bindings?: any;
}

export function Component(options: ComponentOptions) {
    return function(ctor: any) {
        ctor.$$componentOptions = options;

        appModule.component(options.selector, {
            controller: ctor,
            template: options.template,
            bindings: options.bindings,
        })
    }
}

export interface ServiceOptions {
    name: string;
}

export function Service(options: ServiceOptions) {
    return function(ctor: any) {
        ctor.$$serviceOptions = options;

        appModule.service(options.name, ctor);
    }
}
