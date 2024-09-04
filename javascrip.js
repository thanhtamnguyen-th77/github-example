document.getElementById("tong").addEventListener("click", tinh);
function tinh() {
  var so11 = document.getElementById("so1").value;
  var so22 = document.getElementById("so2").value;
  var ketquain = so11 + so22;
  document.getElementById("ketqua").innerHTML = ketquain;
}
