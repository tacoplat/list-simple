var msgBox = document.getElementById("msg");
var list = document.querySelector("ul");

function addToList() {
	console.log("start add");

	var li = document.createElement("li");

	var newItem = document.getElementById("input").value;

	if (newItem !== "") {
		li.appendChild(document.createTextNode(newItem));
		list.appendChild(li);

		li.addEventListener('click', e => {
			msgBox.innerHTML = "<span class='scs'><span id='msgAct'>Success:</span> Deleted item \"" + newItem + "\".</span>";
			li.outerHTML = null;
		});

		resetField();

		msgBox.innerHTML = "<span class='scs'><span id='msgAct'>Success:</span> Added new item.</span>";
	} else {
		msgBox.innerHTML = "<span class='err'><span id='msgAct'>Error:</span> Input was left blank.</span>";
	}

	console.log("end add");
}

function clearMsg() {
		msgBox.innerHTML = "";
}

function clearList() {
	console.log("start clear");

	list.innerHTML = null;

	clearMsg();

	console.log("end clear");
}

function resetField() {
	console.log("start reset");

	var field = document.getElementById("input");
	field.value = "";

	clearMsg();

	console.log("end reset");
}

function deleteLast() {
	console.log("start delete");

	var listchilds = list.children;

	if (listchilds.length > 0) {
		listchilds[listchilds.length-1].outerHTML = null;
		msgBox.innerHTML = "<span class='scs'><span id='msgAct'>Success:</span> Deleted last item.</span>";
	} else {
		msgBox.innerHTML = "<span class='err'><span id='msgAct'>Error:</span> List is already blank.</span>";
	}
	
	console.log("end delete");
}

function addListKeypress(event) {
	if (event.keyCode === 13) {
		addToList();
	}
}

var addBtn = document.getElementById("add");
var clearBtn = document.getElementById("clear");
var resetBtn = document.getElementById("reset");
var deleteBtn = document.getElementById("delete");

addBtn.addEventListener("click", addToList);
clearBtn.addEventListener("click", clearList);
resetBtn.addEventListener("click", resetField);
deleteBtn.addEventListener("click", deleteLast);

var initli = document.querySelector("li");
initli.addEventListener('click', e => {
	msgBox.innerHTML = "<span class='scs'><span id='msgAct'>Success:</span> Deleted item \"" + initli.innerHTML + "\".</span>";
	initli.outerHTML = null;
});

var input = document.getElementById("input");
input.addEventListener("keypress", addListKeypress);