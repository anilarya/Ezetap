'use strict';

/**
 * @ngdoc function
 * @name ezetabApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the ezetabApp
 */
angular.module('ezetabApp')
  .controller('DashboardCtrl', function ($scope,$rootScope, $state, $location) {
    
  	$scope.model = {

      checksum : false ,
      generated_num : []
    };


    $scope.submitInfo = function(){
      console.log($scope.model.version_number);
      var version_number =  $scope.model.version_number ;
      var start_at = $scope.model.start_at ;
      var width = $scope.model.width ;
      var pad = $scope.model.pad;
      var total_number = $scope.model.total_number;
      var checksum = $scope.model.checksum ; 

      $scope.model.generated_num = [];
      var start_at_temp = String(start_at); 
      var padding = pad;
      for(var i=0 ; i<width-1; i++){
        padding +=String(pad); 
      } 

      if(start_at_temp.length >width){
        alert("start at cannot have larger than width");
      }
      else{

      } 
      
      for(var i=0 ; i<total_number; i++){
          var start_at_temp = String(start_at); 
          var final_value  = "";
          var paddedWidthNumber =  padding.substr(0,width-start_at_temp.length) + String(start_at);
          final_value =  String(version_number) +paddedWidthNumber

          if(checksum){
            final_value  = final_value + String(luhnDigit(final_value))
          }

          $scope.model.generated_num.push(final_value); 
          start_at += 1;
      }  

    }

    function luhnDigit(str) {
          var counter = 0;
          var  value = 0 ;
          var incNum;
          var odd = false;
          var temp = String(str).replace(/[^\d]/g, ""); 
          if ( temp.length == 0)
              return false;
          for (var i = temp.length-1; i >= 0; --i)
          {
              incNum = parseInt(temp.charAt(i), 10); 
              value = (odd = !odd)? incNum * 2 :  incNum; 
              if(value>=10){
                value =  parseInt(value/10 , 10)+ value%10;
              }
              counter += value; 
          }
          return ((counter*9)%10);
    }


    console.log("checksum" , luhnDigit("030000010"));
     
    var init = function () { // initial function
      console.log('DashboardCtrl.init()');  
    }();

});
