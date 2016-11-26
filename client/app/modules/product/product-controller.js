angular.module('app')
    .controller('ProductController', ['$scope', '$log', '$timeout', '$mdEditDialog', '$mdDialog', '$q', '$document', function ($scope, $log, $timeout, $mdEditDialog, $mdDialog, $q, $document) {
        'use strict';

        var bookmark;

        $scope.filter = {
            options: {
                debounce: 500
            }
        };

        $scope.selected = [];

        $scope.limitOptions = [5, 10, 15];

        $scope.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
        };

        $scope.query = {
            filter: '',
            order: 'name',
            limit: 5,
            page: 1
        };

        $scope.getDesserts = function() {
            var values = {
                "count": 9,
                "data": [
                    {
                        "name": "Frozen yogurt",
                        "type": "Ice cream",
                        "calories": {"value": 159.0},
                        "fat": {"value": 6.0},
                        "carbs": {"value": 24.0},
                        "protein": {"value": 4.0},
                        "sodium": {"value": 87.0},
                        "calcium": {"value": 14.0},
                        "iron": {"value": 1.0}
                    }, {
                        "name": "Ice cream sandwich",
                        "type": "Ice cream",
                        "calories": {"value": 237.0},
                        "fat": {"value": 9.0},
                        "carbs": {"value": 37.0},
                        "protein": {"value": 4.3},
                        "sodium": {"value": 129.0},
                        "calcium": {"value": 8.0},
                        "iron": {"value": 1.0}
                    }, {
                        "name": "Eclair",
                        "type": "Pastry",
                        "calories": {"value": 262.0},
                        "fat": {"value": 16.0},
                        "carbs": {"value": 24.0},
                        "protein": {"value": 6.0},
                        "sodium": {"value": 337.0},
                        "calcium": {"value": 6.0},
                        "iron": {"value": 7.0}
                    }, {
                        "name": "Cupcake",
                        "type": "Pastry",
                        "calories": {"value": 305.0},
                        "fat": {"value": 3.7},
                        "carbs": {"value": 67.0},
                        "protein": {"value": 4.3},
                        "sodium": {"value": 413.0},
                        "calcium": {"value": 3.0},
                        "iron": {"value": 8.0}
                    }, {
                        "name": "Jelly bean",
                        "type": "Candy",
                        "calories": {"value": 375.0},
                        "fat": {"value": 0.0},
                        "carbs": {"value": 94.0},
                        "protein": {"value": 0.0},
                        "sodium": {"value": 50.0},
                        "calcium": {"value": 0.0},
                        "iron": {"value": 0.0}
                    }, {
                        "name": "Lollipop",
                        "type": "Candy",
                        "calories": {"value": 392.0},
                        "fat": {"value": 0.2},
                        "carbs": {"value": 98.0},
                        "protein": {"value": 0.0},
                        "sodium": {"value": 38.0},
                        "calcium": {"value": 0.0},
                        "iron": {"value": 2.0}
                    }, {
                        "name": "Honeycomb",
                        "type": "Other",
                        "calories": {"value": 408.0},
                        "fat": {"value": 3.2},
                        "carbs": {"value": 87.0},
                        "protein": {"value": 6.5},
                        "sodium": {"value": 562.0},
                        "calcium": {"value": 0.0},
                        "iron": {"value": 45.0}
                    }, {
                        "name": "Donut",
                        "type": "Pastry",
                        "calories": {"value": 452.0},
                        "fat": {"value": 25.0},
                        "carbs": {"value": 51.0},
                        "protein": {"value": 4.9},
                        "sodium": {"value": 326.0},
                        "calcium": {"value": 2.0},
                        "iron": {"value": 22.0}
                    }, {
                        "name": "KitKat01",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }, {
                        "name": "KitKat02",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }, {
                        "name": "KitKat03",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }, {
                        "name": "KitKat04",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }, {
                        "name": "KitKat05",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }, {
                        "name": "KitKat06",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }, {
                        "name": "KitKat06",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }
                    , {
                        "name": "KitKat06",
                        "type": "Candy",
                        "calories": {"value": 518.0},
                        "fat": {"value": 26.0},
                        "carbs": {"value": 65.0},
                        "protein": {"value": 7.0},
                        "sodium": {"value": 54.0},
                        "calcium": {"value": 12.0},
                        "iron": {"value": 6.0}
                    }
                ]
            };

            $scope.desserts = JSON.parse(angular.toJson(values))
        };

        $scope.getDesserts();

        $scope.loadStuff = function () {
            $scope.getDesserts();
        };

        $scope.addStuff = function (event) {
            var product = {};

            $mdDialog.show({
                controller         : 'ProductFormController',
                controllerAs       : 'vm',
                locals             : {
                    product: product
                },
                templateUrl        : 'app/modules/product/form/product-form-template.html',
                parent             : angular.element($document.body),
                targetEvent        : event,
                clickOutsideToClose: true
            }).then(function(result){
                console.log('Product ' + product.name + " added");
            }, function() {
                console.log("Operation canceled");
            });
        };

        $scope.editStuff = function (event) {
            if ($scope.selected.size > 1)
                return;

            var product = JSON.parse(angular.toJson($scope.selected[0]));

            $mdDialog.show({
                controller         : 'ProductFormController',
                controllerAs       : 'vm',
                locals             : {
                    product: product
                },
                templateUrl        : 'app/modules/product/form/product-form-template.html',
                parent             : angular.element($document.body),
                targetEvent        : event,
                clickOutsideToClose: true
            }).then(function(result){
                console.log('Product ' + product.name + " updated");
            }, function() {
                console.log("Operation canceled");
            });
        };

        $scope.removeStuff = function (event) {
            var entity = $scope.selected;
        };

        $scope.editComment = function (event, dessert) {
            event.stopPropagation(); // in case autoselect is enabled

            var editDialog = {
                modelValue: dessert.comment,
                placeholder: 'Add a comment',
                save: function (input) {
                    if (input.$modelValue === 'Donald Trump') {
                        input.$invalid = true;
                        return $q.reject();
                    }
                    if (input.$modelValue === 'Bernie Sanders') {
                        return dessert.comment = 'FEEL THE BERN!'
                    }
                    dessert.comment = input.$modelValue;
                },
                targetEvent: event,
                title: 'Add a comment',
                validators: {
                    'md-maxlength': 30
                }
            };

            var promise;

            if ($scope.options.largeEditDialog) {
                promise = $mdEditDialog.large(editDialog);
            } else {
                promise = $mdEditDialog.small(editDialog);
            }

            promise.then(function (ctrl) {
                var input = ctrl.getInput();

                input.$viewChangeListeners.push(function () {
                    input.$setValidity('test', input.$modelValue !== 'test');
                });
            });
        };

        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };

        $scope.getTypes = function () {
            return ['Candy', 'Ice cream', 'Other', 'Pastry'];
        };

        // table event handlers
        $scope.loadStuff = function () {
            // fire table progress
            var deferred = $q.defer();
            $scope.promise = deferred.promise;

            $scope.getDesserts();

            deferred.resolve();

            /*$scope.promise = $timeout(function () {
             // loading
             }, 2000);*/
        };

        $scope.logItem = function (item) {
            console.log(item.name, 'was selected');
        };

        $scope.logOrder = function (order) {
            console.log('order: ', order);
        };

        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        };

        // filter event handlers
        $scope.removeFilter = function () {
            $scope.filter.show = false;
            $scope.query.filter = '';

            if($scope.filter.form.$dirty) {
                $scope.filter.form.$setPristine();
            }
        };

        $scope.$watch('query.filter', function (newValue, oldValue) {
            if(!oldValue) {
                bookmark = $scope.query.page;
            }

            if(newValue !== oldValue) {
                $scope.query.page = 1;
            }

            if(!newValue) {
                $scope.query.page = bookmark;
            }

            $scope.getDesserts();
        });
    }]);
