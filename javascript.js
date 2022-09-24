var nineBlock = $("#9amButton");
nineBlock.click(function () {
  var value = $("#9amDescription").val();
  localStorage.setItem("9", value);
});

$("#9amDescription").val(localStorage.getItem("9"));
