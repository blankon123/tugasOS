FlowRouter.route('/', {
  name:'home',
  action() {
    if (!Session.get('sudahLogin')) {
      BlazeLayout.render("landing", {content: "homepage"});}
    else{
      FlowRouter.go('vote');}
  }
});