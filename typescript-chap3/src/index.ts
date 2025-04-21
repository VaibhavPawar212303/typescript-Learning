function getValue() {
    let isStudent: boolean = false
    let userArray:object[] = [];
    type user = {
        username: string;
        age: string;
        isStudent: boolean;
    }
    if((document.getElementById("checkbox") as HTMLInputElement)?.value || "") {
        isStudent = true
    } else {
        isStudent = false
    }
    let userOne: user = {
        username:  (document.getElementById("username") as HTMLInputElement)?.value || "",
        age: (document.getElementById("age") as HTMLInputElement)?.value || "",
        isStudent: isStudent
    }
    userArray.push(userOne);
   console.log(userArray);
}





