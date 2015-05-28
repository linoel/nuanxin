Template.userAccounts.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
    Router.go("/");
  }
});

Template.userAccounts.rendered = function () {
  if (Meteor.loggingIn()) {
    Router.go("/trending");
  }
};
