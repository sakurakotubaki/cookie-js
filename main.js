document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    console.log("Name: " + name);
    console.log("Age: " + age);
    // cookieの有効期限を設定。24時間後に期限切れとなる
    let date = new Date();
    date.setTime(date.getTime() + (24*60*60*1000));
    let expires = "; expires=" + date.toGMTString();

    document.cookie = "name=" + name + expires + "; path=/";
    document.cookie = "age=" + age + expires + "; path=/";

    window.location.href = "display.html";
});