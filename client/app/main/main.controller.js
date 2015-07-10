/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

App.controller('MainCtrl', ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http',
  function($scope, editableOptions, editableThemes, $filter, $http) {

    $scope.splineData = [{
      "label": "Uniques",
      "color": "#768294",
      "data": [
        ["Mar", 70],
        ["Apr", 85],
        ["May", 59],
        ["Jun", 93],
        ["Jul", 66],
        ["Aug", 86],
        ["Sep", 60]
      ]
    }, {
      "label": "Recurrent",
      "color": "#1f92fe",
      "data": [
        ["Mar", 21],
        ["Apr", 12],
        ["May", 27],
        ["Jun", 24],
        ["Jul", 16],
        ["Aug", 39],
        ["Sep", 15]
      ]
    }]


    editableOptions.theme = 'bs3';

    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
    editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                     '<span class="fa fa-times text-muted"></span>'+
                                   '</button>';

    $scope.user = {
      email: 'email@example.com',
      tel: '123-45-67',
      number: 29,
      range: 10,
      url: 'http://example.com',
      search: 'blabla',
      color: '#6a4415',
      date: null,
      time: '12:30',
      datetime: null,
      month: null,
      week: null,
      desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
    };

    // Local select
    // ----------------------------------- 

    $scope.user2 = {
      status: 2
    };

    $scope.statuses = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'},
      {value: 4, text: 'status4'}
    ];

    $scope.showStatus = function() {
      var selected = $filter('filter')($scope.statuses, {value: $scope.user2.status});
      return ($scope.user2.status && selected.length) ? selected[0].text : 'Not set';
    };

    // select remote
    // ----------------------------------- 

    $scope.user3 = {
      id: 4,
      text: 'admin' // original value
    };

    $scope.groups = [];

    $scope.loadGroups = function() {
      return $scope.groups.length ? null : $http.get('../server/xeditable-groups.json').success(function(data) {
        $scope.groups = data;
      });
    };

    $scope.$watch('user3.id', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        var selected = $filter('filter')($scope.groups, {id: $scope.user3.id});
        $scope.user3.text = selected.length ? selected[0].text : null;
      }
    });

    // Typeahead
    // ----------------------------------- 

    $scope.user4 = {
      state: 'Arizona'
    };

    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

}]);

