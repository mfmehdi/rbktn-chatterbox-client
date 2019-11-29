var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  
  },

  renderMessage : function(message) {
  	Parse.create(message)
  	$('#chats').append(`<div>@${message.username}&nbsp: ${message.text}</div>`)
  }

};