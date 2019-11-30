var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  
  
  },

  renderMessage : function(message) {
  	Parse.create(message)
  	
       var msg = MessageView.render(message);
      var $msg=$(msg).on('click', function(){console.log("e")})
 	$('#chats').prepend($msg)

 	console.log(message)


  }

};