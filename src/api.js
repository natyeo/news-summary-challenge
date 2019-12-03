(function(exports) {
  function GuardianAPI() {
    this.headlines = [];
  }

    GuardianAPI.prototype.getTodayData = function() {
      var today = new Date().toISOString().slice(0,10);
      var url = `https://content.guardianapis.com/search?section=uk-news&from-date=${today}&order-by=newest&show-fields=thumbnail&api-key=68305209-2963-408e-8737-3bd1400c7a2d`;
      this.newRequest(url);
    }

    GuardianAPI.prototype.newRequest = function(url) {
      let self = this;
      var request = new XMLHttpRequest();
      request.onload = function() {
          var data = JSON.parse(request.response).response.results;
          self.headlines.push(data);
      };
      request.open("GET", url, true);
      request.send();
  }

  exports.GuardianAPI = GuardianAPI
})(this);
