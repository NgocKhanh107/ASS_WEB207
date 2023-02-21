    app.controller("productCtrl", function($scope,$http){

    const productApi = "http://localhost:3000/products";
    const categoryApi = "http://localhost:3000/categories";
    $scope.updateIndex = -1;
    $scope.listCategory = [];

    $http.get(categoryApi).then(function (response) {
        $scope.listCategory = response.data;
    });
    $scope.getNameByID = function (categoryID) {
        var category = $scope.listCategory.find(function (category) {
            return category.id == categoryID;
        });
        return category ? category.name : '';
    };

    $scope.product = {
        name: "",
        price: 0,
        status: true,
        categoryID: 1,
        image: ""
    };


   
    function clear() {
        $scope.product = {
            name: "",
            price: 0,
            status: true,
            categoryID: 1,
            image: ""
        };
    }

    $scope.btnUpdateOnClick = function (event, index) {
        event.preventDefault();

        const p = $scope.listProduct[index];
        $scope.product.name = p.name;
        $scope.product.price = p.price;
        $scope.product.status = p.status;
        document.getElementById("category").value = p.categoryID;
        $scope.updateIndex = index;
    }

    $scope.listProduct = [];

    $http.get(productApi).then(function (response) {
        $scope.listProduct = response.data;
    });


    function post() {
        var file = document.getElementById('fileInput').files[0];
        //var fileName = file.name;
        $scope.product.image = file.name
        $scope.name = file.name
        $http.post(productApi, $scope.product)
            .then(function (response) {
                $scope.listProduct.push($scope.product);
                clear();
            });
    }

    function put() {
        $http.put(productApi + "/" + $scope.listProduct[$scope.updateIndex].id, $scope.product)
            .then(function (response) {
                $scope.listProduct[$scope.updateIndex] = Object.assign({}, $scope.product);
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

        $http.delete(productApi + "/" + $scope.listProduct[index].id)
            .then(function (response) {
                $scope.listProduct.splice(index, 1);
            });
    }

    $scope.clear = function (event) {
        event.preventDefault();
        clear();
    }
})






