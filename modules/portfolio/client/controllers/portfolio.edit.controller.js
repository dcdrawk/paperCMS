(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioEditController', PortfolioEditController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function PortfolioEditController($location, $state, Authentication, Portfolio, $scope) {
    var vm = this;
    vm.authentication = Authentication;
    vm.portfolio = Portfolio;
    vm.portfolio.position = parseInt(vm.portfolio.position);
    // Update existing Article
    vm.update = function(isValid) {
      // console.log('dwjiaodjiaod');
      vm.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'portfolioForm');
        return false;
      }

      var portfolio = vm.ortfolio;

      portfolio.$update(function() {
        $location.path('portfolio/' + portfolio._id);
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    vm.cancel = function() {
      $state.go('portfolio.view', { portfolioId: vm.portfolio._id });
    };
  }
})();
