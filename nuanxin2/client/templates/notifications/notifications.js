Template.mydrugs.helpers({
    drugs: function () {
      //return Posts.find();
      return Posts.find({myuserid: Meteor.userId()});
    },
  });

  Template.mydrugs.events({
    /*'click .inc': function () {

      Meteor.call("addScore", Session.get("selectedPlayer"));*/
      //Players.update(Session.get("selectedPlayer"), {$inc: {score: 1}});
  });

  /*Template.drug.helpers({
    selected: function () {
      return Session.equals("selectedPlayer", this._id) ? "selected" : '';
    }
  });

  Template.drug.events({
    'click': function () {
      Session.set("selectedPlayer", this._id);
    }
  });*/
