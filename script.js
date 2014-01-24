var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};

window.new_user_joined = function(name) {
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");
}