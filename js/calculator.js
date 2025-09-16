function getValues() {
  let a = parseFloat(document.getElementById("num1").value) || 0;
  let b = parseFloat(document.getElementById("num2").value) || 0;
  return { a, b };
}

document.getElementById("btn+").addEventListener("click", function() {
  let { a, b } = getValues();
  document.getElementById("result").innerText = "Result: " + (a + b);
});

document.getElementById("btn-").addEventListener("click", function() {
  let { a, b } = getValues();
  document.getElementById("result").innerText = "Result: " + (a - b);
});

document.getElementById("btn/").addEventListener("click", function() {
  let { a, b } = getValues();
  document.getElementById("result").innerText = "Result: " + (a / b);
});

document.getElementById("btn*").addEventListener("click", function() {
  let { a, b } = getValues();
  document.getElementById("result").innerText = "Result: " + (a * b);
});