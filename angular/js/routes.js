
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/", {
        templateUrl: "view/tablerows.html",
        controller: "tablerowController" 
    })
    
    .when("/tablerow", {
        templateUrl: "view/tablerows.html",
        controller: "tablerowController" 
    })
    
    .when("/tablcolumn", {
        templateUrl: "view/tablecolumn.html",
        controller: "tablcolumnController" 
    })
    })