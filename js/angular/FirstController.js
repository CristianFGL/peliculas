angular.module("pelis",['ngResource'])
.controller("FirstController",function($scope,$http){
	$scope.arreglo=[];
	$scope.ver=function(){
		console.log($scope.post);
			$scope.arreglo.push({post:$scope.nombre+": "+$scope.comentario})
	}
})
//$scope para buscar la funcion y declarar variables sort_by=first_air_date.desc&page=52
.factory("Post",function($resource){
	return $resource("https://api.themoviedb.org/3/discover/movie?api_key=5d666a5fd65a47d3e479f413b23f9cd4&sort_by=popularity.desc&page=3",{},{
		query:{method:"GET",isArray:false}
	});
})
.controller("MoviesController",function($scope,Post){
	Post.query(function(data){
		$scope.movies=data.results;
		console.log($scope.movies)
	});
})