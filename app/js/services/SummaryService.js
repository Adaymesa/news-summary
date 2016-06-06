newsSummaryApp.service("SummaryService", ["SummaryFactory", "$http", function(SummaryFactory, $http) {

  this.getAll = function() {
    var url = "http://content.guardianapis.com/search?api-key=fb91fb66-f35b-4937-a480-b2b2baea1474&show-fields=all";
    return $http.get(url).then(_iterateThrough);
  };

  function _iterateThrough (response) {
    var articles = [];
    var summaryUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
    var i = 1;
    response.data.response.results.forEach(function(object) {
      $http.get(summaryUrl + object.webUrl).success(function(response){
        articles.push(new SummaryFactory(object.id, object.webTitle, object.webPublicationDate, 
        object.fields.thumbnail, object.fields.body, object.webUrl, response.sentences));
      });      
    });
    
    return articles;
  };

}]);
