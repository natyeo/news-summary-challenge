var model = new GuardianAPI();
model.getTodayData();

var view = new HeadlinesView(model);
var controller = new Controller(view);

controller.insertHTML();
