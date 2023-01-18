// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// var localData = localStorage.getItem(calendar);
var saveButton = $(".saveBtn");
var timeNow = dayjs();
var currentDay = dayjs().format("dddd, MMMM DD");
var currentHour = dayjs().format("HH");

console.log(currentDay);
console.log(timeNow);
console.log(currentHour);

$(function () {
  saveButton.on("click", function () {
    console.log($(this).siblings("textarea").val());
    console.log($(this).parent().attr("id"));

    var calendar = JSON.parse(localStorage.getItem("calendar")) || {};
    console.log(calendar);
    var hour = $(this).parent().attr("id");
    var textMessage = $(this).siblings("textarea").val();
    // var savedMessage = $(this).siblings("textarea");

    calendar[hour] = textMessage;
    localStorage.setItem("calendar", JSON.stringify(calendar));
  });

  for (var i = 0; i < currentHour; i++) {
    console.log("hello");
    var mainCalenderDiv = $("div");
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // for loop

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(currentDay);
});
