document.addEventListener('DOMContentLoaded', (event) => {
  var model = new GuardianAPI();
  model.getTodayData(model.testFunction);

  var view = new HeadlinesView(model);
  var controller = new Controller(view);

  controller.insertHTML();
})
