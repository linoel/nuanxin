AutoForm.hooks({
  'edit-form': {
    onSuccess: function (operation, result, template) {
      alert('Post saved successfully!');
      Router.go('/');
    //  Posts.insert();
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
