(function(exports) {
  function GuardianAPI() {
    this.data = [];
  }

    GuardianAPI.prototype.getTodayData = function() {
      var today = new Date().toISOString().slice(0,10);
      const url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=https://content.guardianapis.com/search?section=uk-news&from-date=${today}&order-by=newest&show-fields=thumbnail';

      this.newRequest(url);
    }

    GuardianAPI.prototype.newRequest = function(url) {
      let self = this;
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
          self.data = request.response.results;
        }
      };
      request.open("GET", url, true);
      request.send();
    }

  exports.GuardianAPI = GuardianAPI
})(this);
