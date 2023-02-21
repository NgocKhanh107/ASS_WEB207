app.controller("sanphamCtrl",function($scope,$http){
    $scope.products = [];
    $scope.productTypes = [];
    $scope.selectedType = "";
   // Load tất cả sản phẩm và danh sách loại sản phẩm
   $http.get(" http://localhost:3000/products").then(function(response) {
    $scope.products = response.data;
    
});
$http.get("   http://localhost:3000/categories").then(function(response) {
    $scope.productTypes = response.data;
    
});
$scope.test = function(index){
    $scope.selectedType = $scope.productTypes[index].id
    console.log("$scope.selectedType")
}
// Lọc sản phẩm theo loại
$scope.$watch('selectedType', function() {
    if ($scope.selectedType === '') {
        $scope.filteredProducts = $scope.products;
    } else {
        $scope.filteredProducts = $scope.products.filter(function(product) {
            return product.categoryID === $scope.selectedType;
        });
    }
});

})