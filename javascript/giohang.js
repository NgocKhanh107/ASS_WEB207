app.controller("giohangCtrl",function ($scope, $interval, $http, $routeParams, $rootScope){
    $scope.product = [];
    // $scope.sp.sl = " "
    $scope.sp = {
        name : '',
        sl : "",
        gia : '',
        image: ''
    }
    var id  = $routeParams.id
    $http.get(" http://localhost:3000/products"+ "/" + id).then(
    function (r) {
       
        $scope.product= r.data;
        $scope.so = r.data.id
        $scope.gia = r.data.price
        $scope.image = r.data.image

        $scope.sp = {
            name : r.data.name,
            sl : $scope.sl,
            gia :r.data.price,
            image: r.data.image
        }
         
       
    })
    $scope.them = function (event,sl) {
        // console.log($scope.form_data);
        // TODO: Validate form
        event.preventDefault
        $scope.sp.sl = sl;
        const api = ' http://localhost:3000/giohang  ';
        $http.post(api, $scope.sp)
            .then(function (response) {  
                alert("Thêm mới thành công");          
                    $scope.product.push(response.data); // Thêm vào table
                     // Thông báo
                
            })
    }

      const minusButton = document.getElementById('minus');
        const plusButton = document.getElementById('plus');
        const inputField = document.getElementById('input');

        minusButton.addEventListener('click', event => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue - 1;
        });

        plusButton.addEventListener('click', event => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue + 1;
        });

})

