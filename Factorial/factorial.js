function getFactorial() {
  var num = document.getElementById("fact").value;
  var result = num;
  if (num < 0) {
    alert("Please enter positive integers");
    return 0;
  } else if (num == 0 || num == 1) {
    return (result = 1);
  }
  for (var i = num - 1; i >= 1; i--) {
    result = result * i;
  }
  var res = document.getElementById("result");
  res.innerHTML = result;
}
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
