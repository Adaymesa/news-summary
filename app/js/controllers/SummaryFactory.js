newsSummaryApp.factory("SummaryFactory", function() {
  var Article = function(title, date, pics) {
    this.webTitle = title;
    this.pubDate = date;
    this.picture = pics;
  };
  return Article;
});