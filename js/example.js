var list = document.querySelector("ul");

// ADD NEW ITEM TO END OF LIST
var end = document.createElement("li");
end.textContent = "cream";
list.appendChild(end);

// ADD NEW ITEM START OF LIST
var start = document.createElement("li");
start.textContent = "kale";
list.insertBefore(start, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll("li");
listItems.forEach(item => {
  item.classList.add("cool");
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector("h2");
var itemCount = listItems.length;
var span = document.createElement("span");
span.textContent = itemCount;
heading.appendChild(span);