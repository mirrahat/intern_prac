const navList = document.querySelector(".nav-list") as HTMLElement,
    navitem = navList.querySelectorAll("a");

Array.prototype.map.call(navitem, (item) => {
    navList.addEventListener("click", (e) => {
        item.contains(e.target)
            ? item.classList.add("active-item")
            : item.classList.remove("active-item");
    });
});

console.log('It Works!');
