
var app = angular.module("app", []);

app.controller("indexCtrl", function($scope) {
	var now = moment();
	$scope.week = now.week();

	$scope.getCurrentDays = function() {
		var days = [];
		var weekDate = moment().week($scope.week).startOf("isoweek");
		for(i=0; i < 7; i++) {
			days.push(weekDate.format("dddd D. MMMM"));
			weekDate.add(1, "day")
		}
		return days;
	}

	$scope.addWeek = function(n) {
		$scope.week += n;
	}
	$scope.subWeek = function(n) {
		$scope.week -= n;
	}
	$scope.getDate = function() {
		return moment().week($scope.week).format("W, MMMM");
	}

});