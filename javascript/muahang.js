app.controller("muahangCtrl", function ($scope,$rootScope, $http) {
    $scope.sanpham = [];
    $scope.cart = [];
    $scope.sp = {
        name : '',
        sl : '',
        gia : '',
        image: ''
       
    }
    $http.get("http://localhost:3000/giohang").then(
        function (r) {
            $scope.sanpham = r.data;
            $rootScope.total = r.data.length;
        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );
    $scope.delete = function (event, index) {
      event.preventDefault();
      
      $http.delete("http://localhost:3000/giohang" + "/" + $scope.sanpham[index].id)
          .then(function (response) {
              $scope.sanpham.splice(index, 1);
              alert("Thành công!");
          });
      }

    $scope.tongTien = function () {
        var amount = 0;
        for (var i = 0; i < $scope.sanpham.length; i++) {
            if ($scope.sanpham[i].buy) {
                amount += $scope.sanpham[i].gia * $scope.sanpham[i].sl;
            }
        }
        return numberWithCommas(amount);
    }
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    
  $scope.addProduct = function() {
    for (var i = 0; i < $scope.sanpham.length; i++) {
      var sp = $scope.sanpham[i];
      if (sp.buy) {         
            $http.post('http://localhost:3000/hoadon', { id: sp.id, name: sp.name, sl: sp.sl, gia: sp.gia,image:sp.image }).then(function(response) {
              $scope.cart.push(response.data);
            });
          
          
      }
    }
  };
  
})

