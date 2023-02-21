var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:"/html/home.html",
        controller:'homeCtrl'
    })
    .when('/sanpham',{
        templateUrl:'/html/sanpham.html',
        controller:'sanphamCtrl'
    })
    .when('/giohang/:id',{
        templateUrl:'/html/giohang.html', 
        controller:'giohangCtrl'
    })
    .when('/muahang',{
        templateUrl:'html/muahang.html',
        controller: "muahangCtrl"
        
    })
    .when('/gioithieu',{
        templateUrl:'html/gioithieu.html',   
    })
    .when('/sukien',{
        templateUrl:'html/sukien.html',   
    })
    .when('/category',{
        templateUrl:'/html/addCategory.html',
        controller: 'categoryCtrl'
        
    })
    .when('/product',{
        templateUrl:'/html/addProducts.html',
        controller: 'productCtrl'
        
    })
    .when('/hoadon',{
        templateUrl:'/html/hoadon.html',
        controller: 'hoadonCtrl'
        
    })
    .when('/login',{
        templateUrl:'/html/login.html',
        controller: 'login'
        
    })
    .when('/dangky',{
        templateUrl:'/html/dangky.html',
        controller: 'registerCtrl'
        
    })
});
