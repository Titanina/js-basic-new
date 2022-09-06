var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");
userId.onchange = checkId; 
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkPw() {

    if (pw1.value.length < 8) {

      alert ("비밀번호는 8자리 이상이어야합니다.");
      pw1.value = "";
      pw1.focus();

    }



}
function checkPw() {

  if (pw1.value != pw2.value) {

    alert ("암호가 다릅니다. 다시 입력하세요.");
    pw2.value = "";
    pw2.focus();

  }



}
