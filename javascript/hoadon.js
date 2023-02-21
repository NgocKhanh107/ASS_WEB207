app.controller("hoadonCtrl", function ($scope, $http) {
    $scope.sanpham = [];
    $http.get("http://localhost:3000/hoadon").then(
        function (r) {
            $scope.sanpham = r.data;

        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );
    
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
   
})