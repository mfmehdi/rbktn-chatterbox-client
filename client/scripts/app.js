var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{},room) {
  ///room = $('.sl:selected').attr('id')
    Parse.readAll((data) => {
      // examine the response from the server request:
     console.log(data);

    for(var i = data.results.length - 1; i >= 0; i--) {

        
        data.results[i]["friend"] = false;
      if(data.results[i].username && data.results[i].text){
          var message=""

         // if(data.results[i].roomname === room)
                 message = MessageView.render(data.results[i])
   
        $message = $(message).on('click', function(){console.log($(this).children()[0].innerHTML)})
        $('#chats').prepend($message)

        RoomsView.renderRoom(data.results[i].roomname)
        // console.log(data.results[i])
       // MessagesView.renderMessage(data.results[i])
    }
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
