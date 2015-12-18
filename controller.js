
var app = angular.module("app", []);

app.controller("indexCtrl", function($scope, $timeout, $animate) {
	var now = moment();
	$scope.activeWeek = now.week();
	$scope.activeMonthName = now.format("MMMM");
	$scope.activeYear = parseInt(now.format("YYYY"));

	$scope.currentWeekDays = [];
	updateCurrentWeekDays();
	
	function updateCurrentWeekDays() {
		$scope.currentWeekDays = [];
		var weekDate = moment().year($scope.activeYear).week($scope.activeWeek).startOf("isoweek");
		for(i=0; i < 7; i++) {
			var dayInfo = {
				dayName: weekDate.format("dddd"),
				day: weekDate.format("DD"),
				monthName: weekDate.format("MMMM"),
				month: weekDate.format("M"),
				wholeDate: weekDate.format(),
				isWeekend: (weekDate.format("dddd")==="Saturday" || weekDate.format("dddd")==="Sunday"),
				isHoliday: false
			}
			if(($scope.activeMonthName === dayInfo.monthName)) {
				$scope.currentWeekDays.push(dayInfo);
			}
			weekDate.add(1, "day")
		}
	}

	$scope.addWeek = function(n) {
		$scope.containerClass = "{slideOutLeft: true}";
		console.log("class set");
		$timeout(increment, 500);
		$timeout(function () { $scope.containerClass = "{slideInRight: true}"; } , 1000);

		function increment () {
			for(var i = 0; i < n; i++) {

				$scope.activeWeek += 1;
				var weekDate = moment().week($scope.activeWeek).startOf("isoweek");
				if(! (weekDate.format("MMMM") === $scope.activeMonthName)) {
					$scope.activeWeek -= 1;
					$scope.activeMonthName = weekDate.format("MMMM");
				}
				if(! (parseInt(weekDate.format("YYYY")) === $scope.activeYear)) {
					$scope.activeYear += 1;
					$scope.activeWeek = 1;
					console.log("year change !");
				}
	 
				updateCurrentWeekDays();
			}
		}

	}
	$scope.subWeek = function(n) {
		
		
		for(var i = 0; i < n; i++) {
			$scope.activeWeek -= 1;
			var weekDate = moment().week($scope.activeWeek).startOf("isoweek").add(6, "day");
			if(! (weekDate.format("MMMM") === $scope.activeMonthName)) {
				$scope.activeWeek += 1;
				$scope.activeMonthName = weekDate.format("MMMM");
			}
			updateCurrentWeekDays();		
		}
	}
	$scope.getDate = function() {
		return moment().week($scope.activeWeek).format("W, MMMM");
	}


  $scope.items = ['asd'];

  $scope.push = function() {
    console.log('asd');
    $scope.items.push(+new Date());
  };

  $scope.pop = function() {
    $scope.items.pop();
  };

});

$(document).ready(function() {
    // fix main menu to page on passing
    $('.main.menu').visibility({
    	type: 'fixed'
    });

    //jQuery('.slide').transition('scale').transition('scale');
    //jQuery('.slide').fadeOut(1000);
});
