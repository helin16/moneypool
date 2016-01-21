/**
 * all angular controllers are here
 */
angular.module('mpApp.controllers', [])
	.controller('groupsController', function($scope, mpAPIservice) {
		$scope.groupList = {};
		$scope.getData = function (pageNo) {
			mpAPIservice.getGroups({'page': (pageNo || 1)}).success(function (response) {
			    //Dig into the responde to get the relevant data
				if (response.data && response.data.length > 0) {
					if(!$scope.groupList.data) {
						$scope.groupList = {'totalPages': response.last_page, 'total': response.total, 'pageSize': response.per_page, 'data': response.data};
	        		} else {
	        			$scope.groupList.data = $scope.groupList.data.concat(response.data);
	        		}
	        		$scope.groupList.pageNo = response.current_page;
	        	}
	        });
	    };
	    $scope.getData(1);
	})
	.controller('groupController', function($scope, $routeParams, mpAPIservice) {
		$scope.id = $routeParams.id;
		$scope.group = {'details': null, 'members': []};
		
		mpAPIservice.getGroup($scope.id).success(function (response) {
			$scope.group.details = response;
		});
		mpAPIservice.getGroupMembers($scope.id).success(function (response) {
			$scope.group.members = response;
		});
		$scope.getGroupTransactions = function (pageNo) {
			mpAPIservice.getGroupTransactions($scope.id, {'page': (pageNo || 1)}).success(function (response) {
				if (response.data && response.data.length > 0) {
					if(!$scope.group.transactions) {
						$scope.group.transactions = {'totalPages': response.last_page, 'total': response.total, 'pageSize': response.per_page, 'data': {}};
					}
					$scope.group.transactions.pageNo = response.current_page;
					angular.forEach(response.data, function(value, key) {
						if (!$scope.group.transactions.data[value.transGroupId])
							$scope.group.transactions.data[value.transGroupId] = {};
						$scope.group.transactions.data[value.transGroupId][value.userId] = value.amount;
					});
	        	}
	        });
	    };
//	    $scope.processForm = function () {
//	    	$http({
//    		  method  : 'POST',
//    		  url     : 'process.php',
//    		  data    : $.param($scope.formData),  // pass in data as strings
//    		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
//    		 })
//			  .success(function(data) {
//			    if (!data.success) {
//			      // if not successful, bind errors to error variables
//			      $scope.errorName = data.errors.name;
//			      $scope.errorSuperhero = data.errors.superheroAlias;
//			    } else {
//			      // if successful, bind success message to message
//			      $scope.message = data.message;
//			    }
//			  });
//	    }
	    $scope.getGroupTransactions(1);
	})
	.controller('userController', function($rootScope, $scope, $routeParams, mpAPIservice) {
		$scope.requestedUser = {'id': $routeParams.id};
		$scope.getUser = function (userId) {
			mpAPIservice.getUser(userId).success(function (response) {
				$scope.requestedUser = response;
			});
		};
		$scope.getUser($rootScope.user.id);
	});