
var app = angular.module("app", []);

app.controller("indexCtrl", function($scope) {
	var now = moment();
	$scope.activeWeek = now.week();
	$scope.activeMonthName = now.format("MMMM");
	currentWeekDays = [];
	updateCurrentWeekDays();

	//parser = new WorkDayParser(); 
	//wd = new WorkDay(1, 1, 1, null);
   	
	$scope.getCurrentDays = function() {
		return currentWeekDays;
	}
	
	function updateCurrentWeekDays() {
		currentWeekDays = [];
		var weekDate = moment().week($scope.activeWeek).startOf("isoweek");
		for(i=0; i < 7; i++) {
			var dayInfo = {
				dayName: weekDate.format("dddd"),
				day: weekDate.format("DD"),
				monthName: weekDate.format("MMMM"),
				month: weekDate.format("M"),
				wholeDate: weekDate.format()
			}
			if(($scope.activeMonthName === dayInfo.monthName)) {
				currentWeekDays.push(dayInfo);
			}
			weekDate.add(1, "day")
		}
	}

	$scope.addWeek = function(n) {
		$scope.activeWeek += n;
		var weekDate = moment().week($scope.activeWeek).startOf("isoweek");
		if(! (weekDate.format("MMMM") === $scope.activeMonthName)) {
			$scope.activeWeek -= n;
			$scope.activeMonthName = weekDate.format("MMMM");
		}

		updateCurrentWeekDays();
	}
	$scope.subWeek = function(n) {
		$scope.activeWeek -= n;
		var weekDate = moment().week($scope.activeWeek).startOf("isoweek").add(6, "day");
		if(! (weekDate.format("MMMM") === $scope.activeMonthName)) {
			$scope.activeWeek += n;
			$scope.activeMonthName = weekDate.format("MMMM");
		}
		updateCurrentWeekDays();
	}
	$scope.getDate = function() {
		return moment().week($scope.activeWeek).format("W, MMMM");
	}

});