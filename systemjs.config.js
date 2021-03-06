SystemJS.config({
    map: {
        "angular": "node_modules/angular/angular.js",
        "text": "node_modules/systemjs-plugin-text/text.js",
        "css": "node_modules/systemjs-plugin-css/css.js",
        "angular-ui-router": "node_modules/angular-ui-router/release/angular-ui-router.js",
    },
    packages: {
        app: {
            defaultExtension: 'js'
        }
    },
    meta: {
        "angular": {
            "format": "global",
            "exports": "angular"
        },
        "*.html": {
            loader: "text"
        },
        "*.css": {
            loader: "css"
        }
    }
});
