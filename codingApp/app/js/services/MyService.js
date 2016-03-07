app.service("MyService", function($http){
  var CatService = {};

  MyService.getCats = function(){
    return $http.get("http://localhost:3000/cats", {method: "jsponp"});
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats", {method: "jsonp"});
  }

  MyService.getCat = function(cat_id){
    return $http.get("http://localhost:3000/cats/"+cat_id);
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats/"+cat_id, {method: "jsonp"});
  }

  MyService.newCat = function(cat_object) {
    console.log("reached the service and creating a new cat");
    return $http.post('http://localhost:3000/cats/', cat_object)
      /// needs to take in data from the from (my_data is what we're calling it here, )
      ///  and it needs to make a post request to our backend API
  }

  return MyService;
});
heroku pg:push resources postgresql-spherical-23452 --app apiandapp
heroku pg:psql learning
