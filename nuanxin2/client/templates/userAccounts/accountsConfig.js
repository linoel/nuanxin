AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
});

/*var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      Router.go("/trending");
    }
    if (state === "signUp") {
      Router.go("/");
    }
  }
};*/


AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/',
    redirect: '/trending',
});
AccountsTemplates.configureRoute('signUp', {
    name: 'signUp',
    path: '/',
    redirect: '/trending',
});

/*
AccountsTemplates.configureRoute('signIn', {
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/trending');
    }
});*/



//AccountsTemplates.removeField('password');
//AccountsTemplates.removeField('email');

/*AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "用户名",
      required: true,
      minLength: 5,
  },
  {
    _id: 'phone',
    type: 'tel',
    displayName: "电话",
    required: true,
    minLength: 11,
    errStr: 'Invalid Phone number!',
  },
  {
    _id: "fruit",
    type: "radio",
    displayName: "Preferred Fruit",
    select: [
        {
        text: "Apple",
        value: "aa",
      }, {
        text: "Banana",
        value: "bb",
      }, {
        text: "Carrot",
        value: "cc",
      },
    ],
  },
]);*/


/*AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "电话",
    required: true,
    func: function (number) {
        if (Meteor.isServer){
          if (isValidPhone(number))
              return false; // meaning no error!
          return true; // Validation error!
        }
    },
    errStr: 'Invalid Phone number!',
});*/


var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "姓名",
      required: true,
      minLength: 2,
  },

  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "邮箱",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },

  {
    _id: 'phone',
    type: 'tel',
    displayName: "电话",
    required: true,
    minLength: 11,
    errStr: 'Invalid Phone number!',
  },

  {
    _id: 'password',
    type: 'password',
    displayName: "密码",
    required: true,
    minLength: 6,
  },

  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "用户登录",
  },

]);




/*var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      Router.go("/trending");
    }
    if (state === "signUp") {
      Router.go("/trending");
    }
  }
};

AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
  onSubmitHook: mySubmitFunc,
});*/
