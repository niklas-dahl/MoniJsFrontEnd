
var app = angular.module("app", []);

app.controller("indexCtrl", function($scope) {
	var now = moment();
	$scope.week = now.week();
	currentWeekDays = [];
	updateCurremtWeekDays();

	parser = new WorkDayParser(); 
	//wd = new WorkDay(1, 1, 1, null);
   	
	$scope.getCurrentDays = function() {
		return currentWeekDays;
	}
	
	function updateCurremtWeekDays() {
		currentWeekDays = [];
		var weekDate = moment().week($scope.week).startOf("isoweek");
		for(i=0; i < 7; i++) {
			var dayInfo = {
				dayName: weekDate.format("dddd"),
				day: weekDate.format("DD"),
				monthName: weekDate.format("MMMM"),
				month: weekDate.format("M"),
				wholeDate: weekDate.format()
			}
			currentWeekDays.push(dayInfo);
			weekDate.add(1, "day")
		}
	}

	$scope.addWeek = function(n) {
		$scope.week += n;
		updateCurremtWeekDays();
	}
	$scope.subWeek = function(n) {
		$scope.week -= n;
		updateCurremtWeekDays();
	}
	$scope.getDate = function() {
		return moment().week($scope.week).format("W, MMMM");
	}

});