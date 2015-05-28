AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
});

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
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);
