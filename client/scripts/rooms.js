var Rooms = {
  	
	add:() =>{
	var value = $('#message').val()
 	// console.log()
 	 if(!RoomsView.roomArr.includes(value)){
 	 	RoomsView.roomArr.push(value)
  	 RoomsView.$select.append(`<option class=sl id=${value}>${value}</option>`)
 	 }

	}
};