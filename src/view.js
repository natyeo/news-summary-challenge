(function(exports) {
    function HeadlinesView(model) {
      this.api = model
    }

    HeadlinesView.prototype.returnHTMLString = function() {
      let self = this;
      let array = self.api.headlines;
      let HTMLString = "<ul>";
      for (let i = 0; i < array.length; i++) {
        let webUrl = array[i].webUrl;
        let webTitle = array[i].webTitle;
        let thumbnail = array[i].fields.thumbnail;
        HTMLString += `<li><div><a href="${webUrl}"><img src="${thumbnail}"><br>${webTitle}</a></div></li>`;
      }
      return HTMLString += "</ul>";
    }
    exports.HeadlinesView = HeadlinesView
})(this);
