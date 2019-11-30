var RoomsView = {
 roomArr : [],

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	 RoomsView.$button.on('click', Rooms.add);
  	 RoomsView.$select.change(RoomsView.refrech)
  },

  renderRoom : function(value) {
 	if(!RoomsView.roomArr.includes(value)){
 		RoomsView.roomArr.push(value)
  			RoomsView.$select.append(`<option class=sl id=${value}>${value}</option>`)
 	}
  },
  refrech:()=>{
  	$("#chats").html('')
  	 var room=$('.sl:selected').attr('id')
  	 App.fetch(App.stopSpinner,room);
  }

};