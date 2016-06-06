newsSummaryApp.factory("SummaryFactory", function() {
  
  var Article = function(id, title, date, pics, content, webUrl, summary) {
		this.id       = id;
		this.webTitle = title;
		this.pubDate  = date;
		this.picture  = pics;
		this.content  = content;
		this.webUrl   = webUrl;
		this.summary  = summary;
  };
  
  return Article;
  
});