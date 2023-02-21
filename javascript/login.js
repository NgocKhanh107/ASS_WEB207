app.controller('loginCtrl', function($scope,$rootScope,$http) {
    $scope.students= []
    $http.get(" http://localhost:3000/students")
    .then(function (response) {
        $scope.students = response.data;
    })

    $scope.login = function() {
        for(var i=0; i<$scope.students.length; i++){
            if($scope.username === $scope.students[i].username && $scope.password === $scope.students[i].password){
              alert('Đăng nhập thành công!');
              window.location.href="#/";
            }else{
              alert('Mật khẩu hoặcteen đăng nhập không đúng.Vui lòng nhập lại')
            }
          }
    };

});