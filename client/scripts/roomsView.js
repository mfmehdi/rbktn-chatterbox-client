var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	
  },

  renderRoom : function(val) {
	// $('<option></option>').val(val).html(text)
	console.log(RoomsView.$select)
	RoomsView.$select.append(`<option>${val}</option>`)
  }

};