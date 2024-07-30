var getinput = document.querySelector(".input");
var getstarted = document.querySelector(".inpbtn");
getstarted === null || getstarted === void 0 ? void 0 : getstarted.addEventListener("click", listing);
var liu = JSON.parse(localStorage.getItem('li'));
var i = 0;
var getlocalval;
var _loop_1 = function () {
    getlocalval = liu[i];
    var unorderlist = document.querySelector(".unli");
    var list = document.createElement("li");
    list.classList.add("list");
    list.textContent = getlocalval;
    var strike = document.createElement("input");
    strike.type = "checkbox";
    strike.style.cursor = "pointer";
    strike.style.userSelect = 'none';
    strike.classList.add("liinp");
    var span = document.createElement("span");
    span.classList.add("spcl");
    span.textContent = 'X';
    span.style.cursor = "pointer";
    span.style.userSelect = 'none';
    span.onclick = function () {
        unorderlist.removeChild(list);
    };
    strike.onclick = function () {
        if (strike.checked == true) {
            list.style.textDecoration = "Line-Through";
            span.style.textDecoration = "none";
        }
        else {
            list.style.textDecoration = "none";
        }
    };
    unorderlist === null || unorderlist === void 0 ? void 0 : unorderlist.appendChild(list);
    list.prepend(strike);
    list.appendChild(span);
    i++;
};
while (i < liu.length) {
    _loop_1();
}
var arr = [];
function listing() {
    var value = getinput.value;
    var unorderlist = document.querySelector(".unli");
    var list = document.createElement("li");
    list.classList.add("list");
    list.textContent = value;
    arr.push(list.textContent);
    var strike = document.createElement("input");
    strike.type = "checkbox";
    strike.style.cursor = "pointer";
    strike.style.userSelect = 'none';
    strike.classList.add("liinp");
    var span = document.createElement("span");
    span.classList.add("spcl");
    span.textContent = 'X';
    span.style.cursor = "pointer";
    span.style.userSelect = 'none';
    span.onclick = function () {
        unorderlist.removeChild(list);
    };
    strike.onclick = function () {
        if (strike.checked == true) {
            list.style.textDecoration = "Line-Through";
            span.style.textDecoration = "none";
        }
        else {
            list.style.textDecoration = "none";
        }
    };
    unorderlist === null || unorderlist === void 0 ? void 0 : unorderlist.appendChild(list);
    list.prepend(strike);
    list.appendChild(span);
    getinput.value = "";
    var listval = arr.map(function (value) {
        return value;
    });
    localStorage.setItem("li", JSON.stringify(listval));
}
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (getinput.value === "") {
            window.alert("Go-ahead with daily Goals");
        }
        else {
            listing();
        }
    }
});
