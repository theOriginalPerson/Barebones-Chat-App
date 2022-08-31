<h1>A Simple Chat Application</h1>
<h3>Intro</h3>
<p>Welcome to the JavaScript course! Here we will develop a chat application to illustrate how it can be made. Feel free to follow the templates provided in this GitHub repository! Click on <code>script.js</code>, <code>index.html</code> or <code>style.css</code> to use for reference when trying to develop your own chat application.</p>
<h3>How to reproduce this</h3>
<ol>
	<li>Copy the HTML & CSS code provided above in the <code>index.html</code> and <code>style.css</code> files</li>
	<li>Retrieve both your and your friend's tables using the <code>document.getElementById("name of ID")</code> command</li>
	<li>Retrieve your "send" button's ID, as well</li>
	<li>Add a map of keys and values. The keys would be your messages you send and the values would be the responses you want your friend to return back</li>
	<li>Add an "onSend" function that posts your messages in your table, and if the chat_map you created in the previous step has a response listed to that message, then display the response (value from the key) in your friend's table. Make sure to retrieve your input field's value here using <code>document.getElementById("name of input field").value</code> in order to store it for temporary use. Scope is super important here (make sure this variable is not outside of the function)!</li>
	<li>Add an event listener that "listens" for the click of the mouse, and when it's clicked, completes the onSend function you created in the previous step</li>
	<li>If you've made it thus far without errors, congratulations! A job well done! If you still have some debugging left to do, not to worry! Take your time and follow your instructor's advice for best result</li>
</ol>
<h3>How to use this</h3>
<p>Simply write your message in the input, hit send, and if your friend has a response to that, they'll post it in the chat!</p>