(function(exports) {
  function Controller(view) {
    this.view = view
  }

  Controller.prototype.insertHTML = function() {
    var section = document.getElementById('headlines')
    section.innerHTML = this.view.returnHTMLString();
  }

  exports.Controller = Controller;
})(this);
