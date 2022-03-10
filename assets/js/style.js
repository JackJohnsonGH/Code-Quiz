// Create h1 and p elements
var body = document.body
var h1El = document.createElement("h1");
var titleEl = document.createElement("p");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
// Create button elements
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
// Add text for h1
h1El.textContent = "Coding Quiz Challenge";
titleEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorret answers will penalize your score/time by ten seconds.";
// Add text for list items
btn1.textContent = "placeholder 1";
btn2.textContent = "placeholder 2";
btn3.textContent = "placeholder 3";
btn4.textContent = "placeholder 4";

body.appendChild(h1El);
body.appendChild(titleEl);
// Append ordered list 
body.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
// Append button elements to list elements
li1.appendChild(btn1);
li2.appendChild(btn2);
li3.appendChild(btn3);
li4.appendChild(btn4);

// Add styling to h1
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
titleEl.setAttribute("style", "font-size:20px; text-align:center;");
// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");