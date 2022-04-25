"use strict";
var navList = document.querySelector(".nav-list"), navitem = navList.querySelectorAll("a");
Array.prototype.map.call(navitem, function (item) {
    navList.addEventListener("click", function (e) {
        item.contains(e.target)
            ? item.classList.add("active-item")
            : item.classList.remove("active-item");
    });
});
console.log('It Works!');
