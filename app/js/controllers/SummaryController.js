newsSummaryApp.controller("SummaryAppController", ["SummaryFactory", "SummaryService", function(SummaryFactory, SummaryService) {
  var self = this;

  SummaryService.getAll().then(function(response) {
    self.articles = response;
  });
}]);