// our tables

var friend_table = document.getElementById("friendTable");
var our_table = document.getElementById("ourTable");


// send button and where our message comes from (input), where it will go, etc

var send_btn = document.getElementById("send_button");


// where our responses will come from

const chat_map = new Map([
	["hello" , "hi friend! how are you?"],
	["im good" , "great to hear!"],
	["what's new?" , "not much"],
	["tell me a joke" , "What did the zebra say the first time he saw a piano? 'Dad?'"]
]);


// what happens when we send our message

function onSend() {
	var msg = document.getElementById("message_input").value;
	
	if (msg.length !== 0) {
		var row = our_table.insertRow(1);
		var cell = row.insertCell(0);
		
		cell.innerHTML = msg;

		if (chat_map.has(msg)) {
			var frow = friend_table.insertRow(1);
			var fcell = frow.insertCell(0);

			fcell.innerHTML = chat_map.get(msg);
		}
	}
}

// actually sending our items

send_btn.addEventListener("click", onSend);