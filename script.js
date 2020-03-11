var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = ul.getElementsByTagName("li");
var del = document.getElementsByClassName("delete");

// The length of the input
function inputLength() {
	return input.value.length;
}

// Append a list element
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var newButton = li.appendChild(button);
	newButton.innerText = "Delete";
	newButton.addEventListener("click", deleteList);
	li.addEventListener("click", strikeThrough);
	ul.appendChild(li);
	input.value = "";
}

// Enter click to create a list element
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Press enter to create a list element
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Press delete to delete the list element
function deleteList(event) {
	event.target.parentNode.remove();
}

// Click to strikethrough the list element
function strikeThrough(event) {
	if (event.target.style.textDecoration === "") {
			event.target.style.textDecoration = "line-through";
	} else {
			event.target.style.textDecoration = "";
	}
}

// Assign function to the ENTER button clicked
button.addEventListener("click", addListAfterClick);

// Assign function to the ENTER key pressed
input.addEventListener("keypress", addListAfterKeypress);

// Assign function to all DELETE buttons clicked
for (var i = 0; i < del.length; i++) {
	del[i].addEventListener("click", deleteList);
}

// Assign function to all list elements clicked
for (var i = 0; i < listItem.length; i++) {
	listItem[i].addEventListener("click", strikeThrough);
}
