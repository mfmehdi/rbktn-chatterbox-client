var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
   event.preventDefault();
   var room=$('.sl:selected').attr('id')
   console.log(room)
   
   var msg = {
    text:$("#message").val(),
    username: App.username,
    roomname:room
   }
   MessagesView.renderMessage(msg)
   // $('#chats').prepend('<p>test</p>')

    // FormView.$form.append( MessagesView.renderMessage(msg))
    console.log(msg);
    

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};