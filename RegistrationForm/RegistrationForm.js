var form = document.getElementById("Login_form");
function sConsole(event) {
  event.preventDefault();
  var fname = document.form.name.value;
  var fmail = document.form.email.value;
  var fpass = document.form.pass.value;
  var frpass = document.form.rpass.value;
  var fgender = document.form.Gender.value;
  var fsub = document.form.subscription.value;
  var fmsg = document.form.msg.value;
  var int = new Array();
  var fint = document.getElementsByName("Interests");
  for (var x of fint) {
    if (x.checked) {
      int.push(x.value);
    }
  }
  const message = function () {
    console.log(fname);
    console.log(fmail);
    console.log(fpass);
    console.log(frpass);
    console.log(fgender);
    console.log(int);
    console.log(fsub);
    console.log(fmsg);
  };
  setTimeout(message, 2000);
}

form.addEventListener("submit", sConsole);
