newsSummaryApp.factory("SummaryFactory", function() {
  var Article = function(title, date, pics, content, webUrl, summary) {
    this.webTitle = title;
    this.pubDate = date;
    this.picture = pics;
    this.content = content;
    this.webUrl = webUrl;
    this.summary = summary;
  };
  return Article;
});