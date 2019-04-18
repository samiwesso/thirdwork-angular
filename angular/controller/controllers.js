app.controller("tablerowController", function($scope) {
    $scope.namelist = product
const starsTotal = 5;

$scope.rating = function(input) {
return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
}
// $scope.rowLimits = "10 selected";
})


.controller("tablcolumnController", function($scope) {
$scope.namelist = product

const starsTotal = 5;

$scope.rating = function(input) {
return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
}
})