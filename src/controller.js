(function(exports) {
  function Controller(GuardianAPI) {
    this.view = new HeadlinesView(GuardianAPI)
  }

  Controller.prototype.insertHTML = function() {
    var section = document.getElementById('headlines')
    section.innerHTML = this.view.returnHTMLString();
  }

  exports.Controller = Controller;
})(this);
