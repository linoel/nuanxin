Template.lists.helpers({
  times: function () {
    var times = [];
    _(1).times(function(n){
      times.push(n);
    });
    return times;
  }
});
