(function(exports) {
  function GuardianAPI() {
    this.data = [];
  }

    GuardianAPI.prototype.getTodayData = function() {
      var today = new Date().toISOString().slice(0,10);
      var url = `https://content.guardianapis.com/search?section=uk-news&from-date=${today}&order-by=newest&show-fields=thumbnail&api-key=68305209-2963-408e-8737-3bd1400c7a2d`;
      this.newRequest(url);
    }

    GuardianAPI.prototype.newRequest = function(url) {
      let self = this;
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          self.data = JSON.parse(request.responseText);
        }
      };
      request.send();
    }

  exports.GuardianAPI = GuardianAPI
})(this);
