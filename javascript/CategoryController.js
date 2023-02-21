app.controller("categoryCtrl", function($scope, $http){
    const categoryApi = "  http://localhost:3000/categories";
$scope.updateIndex = -1;
$scope.category = {
name: "",

};
function clear() {
$scope.category = {
    name: "",
   
};
}


$scope.btnUpdateOnClick = function (event, index) {
event.preventDefault();

const p = $scope.listCategory[index];
$scope.category.name = p.name;

$scope.updateIndex = index;
}

$scope.listCategory = [];

$http.get(categoryApi).then(function (response) {
$scope.listCategory = response.data;
});


function post() {
$http.post(categoryApi, $scope.category)
    .then(function (response) {
        $scope.listCategory.push($scope.category);
        alert("Thành công!");
        clear();
    });
}

function put() {
$http.put(categoryApi + "/" + $scope.listCategory[$scope.updateIndex].id, $scope.category)
    .then(function (response) {
        $scope.listCategory[$scope.updateIndex] = Object.assign({}, $scope.category);
        alert("Thành công!");
        clear()
    });
}

$scope.save = function (event) {
event.preventDefault();

if ($scope.updateIndex == -1) {
    post();

} else {
    put();

}
}

$scope.delete = function (event, index) {
event.preventDefault();

$http.delete(categoryApi + "/" + $scope.listCategory[index].id)
    .then(function (response) {
        $scope.listCategory.splice(index, 1);
        alert("Thành công!");
    });
}

$scope.clear = function (event) {
event.preventDefault();
clear();
}
})