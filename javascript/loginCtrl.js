app.controller('login', function($scope,$rootScope,$http) {
    $scope.login = function() {
        var kt = true;
        // $scope.List_student=[];

        $http.get("http://localhost:3000/students")
        .then(function (response) {
            $scope.students1=response.data;
            console.log('---đọc thành công-----')
            $scope.students1.forEach(st => {
                console.log('vào để so sánh đăng nhập');
                console.log(st);
                if(st.username==$scope.username&&st.password==$scope.password){
                    alert('đăng nhập thành công!');
                    kt=false;
                    $rootScope.student=st;
                    window.location.href="#/";
                    return;
                }
        });
           if(kt==true){
               alert('không thành công!')
           }
        });
    };

});