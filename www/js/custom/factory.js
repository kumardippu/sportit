// Factory to fetch Query
    sportit.factory('queryFactory',function($http){
          return {
             getResult: function(url){
                return $http.get(url);
             }
          };
    });


// Factory to fetch Query with post method
    sportit.factory('postQuery',function($http){
          return {
             getResult: function(url,postData){
                return $http.post(url,postData);
             }
          };
    });
//To Manage session service    
//sportit.factory('sessionService',['$http',function($http){
sportit.factory('sessionService',function(){
return {
   set:function(key,value){
      return localStorage.setItem(key,JSON.stringify(value));
   },
   get:function(key){
     return JSON.parse(localStorage.getItem(key));
   },
   destroy:function(key){
     return localStorage.removeItem(key);
   },
   destroyAll:function(key){
     return localStorage.clear();
   },
   
 };
})  