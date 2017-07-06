var myApp = angular.module("thisApp",[]);
myApp.controller("mainController",function($scope){

	$scope.newUser={};
	$scope.message="";

	$scope.users=[

       {name:"sohel", email:"sohel@gmail.com", fullname:"Sohel Rana"},
       {name:"sohel", email:"kamal@gmail.com", fullname:"Kamal Hossain"},
       {name:"rana", email:"rana@gmail.com",   fullname:"Rana Ahmed"}
     ];	

     $scope.saveUser = function(){
     	$scope.users.push($scope.newUser);
     	$scope.newUser={};
     	$scope.message="New User Added Successfully!";
     };
     $scope.selectUser = function(user){
     	console.log(user);
     	$scope.clickedUser=user;
     };

     $scope.updateUser=function(){
     	$scope.message="User Updated Successfully!";
     };
     $scope.deleteUser = function(){
     	$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
     	$scope.message="User Deleted Successfully!";
     };

     $scope.clearMessage=function(){
     	$scope.message="";
     };
});