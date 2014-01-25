var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};
var west = true;

window.new_user_joined = function(name) {
	users_joined.push(name);
	//console.log(users_joined, "unidos");
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    var room= chatrooms.west_side;

    //if (west)
    //Pull out from users_joined
    var name = users_joined.pop();

    //Push in room
    if (name in chatrooms.west_side) {
    	return;
    } else {
    	chatrooms.west_side[name]=name;
		west ^= true;   //- toggle value.
    }
	
	// Append into HTML
	
	var user_p =document.createElement('p');
	$(user_p).addClass("users").text(name).appendTo($(".chat-1"));
	console.log(user_p, name);
  
    //console.log(chatrooms.west_side, "Room West");
    //console.log("assigning users to rooms");
}