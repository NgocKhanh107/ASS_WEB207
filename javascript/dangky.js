app.controller('registerCtrl', function( $scope,$http) {
    $scope.studentR={
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: true,
    birthday: "",
    admin: true
    }
    $scope.list = []
    $scope.register = function(event) {
            console.log('vào onsumit')
            event.preventDefault();//chặn load lại trang
            console.log($scope.studentR);
            $http.post(" http://localhost:3000/students",$scope.studentR).then(function(response){
                $scope.list.push($scope.studentR)
                console.log(response);
               alert('đăng ký thành công!')
            });
        
        window.location.href="#login";
    }
});