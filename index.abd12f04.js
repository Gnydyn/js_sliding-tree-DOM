var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){if(e.children.length>0){var n=document.createElement("span");e.prepend(n),n.append(n.nextSibling)}}),e.addEventListener("click",function(e){"SPAN"===e.target.tagName&&(e.target.nextSibling.hidden=!e.target.nextSibling.hidden)});
//# sourceMappingURL=index.abd12f04.js.map
