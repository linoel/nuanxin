Template.registerHelper('formatdate',function(datetime){
  if(moment && datetime){
    /*return moment(datetime).format('MM/DD/YYYY');*/
    return moment(datetime).format('YYYY/MM/DD');

  } else{
    return datetime;
  }
});

Template.registerHelper('formatdatetime', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "Today " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("MM/DD/YYYY hh:mm");
    }

  }
  else {
    return datetime;
  }
});

Template.registerHelper('shorten', function(str,len){
  if(str && len){
    if(str.length > len && Session.get('shorten')){
      str = str.substring(0,len) + "...";
    }
  }
  return str;
});
Template.registerHelper('checkRole', function(userId,rolename){
  var authorized = false;
  if (Roles.userIsInRole(userId, [rolename]) || Roles.userIsInRole(userId,['admin'])){
    authorized = true;
  }
  return authorized;
});
Template.registerHelper('formatfilesize', function(str){
  str = (Number(str)/1000000).toFixed(2) + "MB";
  return str;
});
Template.registerHelper('formatphone', function(str){

  if(str && str.length > 9){
    str = "(" + str.substring(0,3) + ")" + str.substring(3,6) + "-" + str.substring(6,13);
  }
  return str;
});
Template.registerHelper('isAdmin', function(){
  if(Meteor.user() && Meteor.user().profile)
    var role = Meteor.user().profile.role;
    return role === 'admin';
  });

  Template.registerHelper('pad',function(number,digits){
    return String("00000000" + number).slice(-(digits+1));
  });

  Template.registerHelper('camel',function(str){
    return str.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  });
