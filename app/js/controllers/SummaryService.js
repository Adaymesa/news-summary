newsSummaryApp.service("SummaryService", ["SummaryFactory", "$http", function(SummaryFactory, $http) {

  this.getAll = function() {
    var url = "http://content.guardianapis.com/search?api-key=fb91fb66-f35b-4937-a480-b2b2baea1474&show-fields=thumbnail";
    return $http.get(url).then(_iterateThrough);
  };

  function _iterateThrough (response) {
    console.log(response);
    var articles = [];
    response.data.response.results.forEach(function(object) {
      articles.push(new SummaryFactory(object.webTitle, object.webPublicationDate, object.fields.thumbnail));
    });
    return articles;
  }
}]);