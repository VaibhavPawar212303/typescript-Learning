"use strict";
function getValue() {
    var _a, _b, _c;
    let isStudent = false;
    let userArray = [];
    if (((_a = document.getElementById("checkbox")) === null || _a === void 0 ? void 0 : _a.value) || "") {
        isStudent = true;
    }
    else {
        isStudent = false;
    }
    let userOne = {
        username: ((_b = document.getElementById("username")) === null || _b === void 0 ? void 0 : _b.value) || "",
        age: ((_c = document.getElementById("age")) === null || _c === void 0 ? void 0 : _c.value) || "",
        isStudent: isStudent
    };
    userArray.push(userOne);
    console.log(userArray);
}
