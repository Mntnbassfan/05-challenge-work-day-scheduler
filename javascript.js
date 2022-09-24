// functionality for 9am button
var nineBlock = $("#9amButton");
// Get the value of the text entry and save it to local storage
nineBlock.click(function () {
  var value = $("#9amDescription").val();
  localStorage.setItem("9", value);
});
// retrieve the value of the text entry from local storage
$("#9amDescription").val(localStorage.getItem("9"));

// functionality for 10am button
var tenBlock = $("#10amButton");
// Get the value of the text entry and save it to local storage
tenBlock.click(function () {
  var value = $("#10amDescription").val();
  localStorage.setItem("10", value);
});
// retrieve the value of the text entry from local storage
$("#10amDescription").val(localStorage.getItem("10"));

// functionality for 11am button
var elevenBlock = $("#11amButton");
// Get the value of the text entry and save it to local storage
elevenBlock.click(function () {
  var value = $("#11amDescription").val();
  localStorage.setItem("11", value);
});
// retrieve the value of the text entry from local storage
$("#11amDescription").val(localStorage.getItem("11"));

// functionality for 12pm button
var twelveBlock = $("#12pmButton");
// Get the value of the text entry and save it to local storage
twelveBlock.click(function () {
  var value = $("#12pmDescription").val();
  localStorage.setItem("12", value);
});
// retrieve the value of the text entry from local storage
$("#12pmDescription").val(localStorage.getItem("12"));

// functionality for 13pm button
var thirteenBlock = $("#13pmButton");
// Get the value of the text entry and save it to local storage
thirteenBlock.click(function () {
  var value = $("#13pmDescription").val();
  localStorage.setItem("13", value);
});
// retrieve the value of the text entry from local storage
$("#13pmDescription").val(localStorage.getItem("13"));

// functionality for 14pm button
var fourteenBlock = $("#14pmButton");
// Get the value of the text entry and save it to local storage
fourteenBlock.click(function () {
  var value = $("#14pmDescription").val();
  localStorage.setItem("14", value);
});
// retrieve the value of the text entry from local storage
$("#14pmDescription").val(localStorage.getItem("14"));

// functionality for 15pm button
var fifteenBlock = $("#15pmButton");
// Get the value of the text entry and save it to local storage
fifteenBlock.click(function () {
  var value = $("#15pmDescription").val();
  localStorage.setItem("15", value);
});
// retrieve the value of the text entry from local storage
$("#15pmDescription").val(localStorage.getItem("15"));

// functionality for 16pm button
var sixteenBlock = $("#16pmButton");
// Get the value of the text entry and save it to local storage
sixteenBlock.click(function () {
  var value = $("#16pmDescription").val();
  localStorage.setItem("16", value);
});
// retrieve the value of the text entry from local storage
$("#16pmDescription").val(localStorage.getItem("16"));

// functionality for 17pm button
var seventeenBlock = $("#17pmButton");
// Get the value of the text entry and save it to local storage
seventeenBlock.click(function () {
  var value = $("#17pmDescription").val();
  localStorage.setItem("17", value);
});
// retrieve the value of the text entry from local storage
$("#17pmDescription").val(localStorage.getItem("17"));
