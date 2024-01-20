// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var id;
  var hour;
  //'this' refers to the DOM element to which the event handler is attached; it is attached to the 'container-lg'
  var containerEl = $(".container-lg");

  containerEl.on("click", ".saveBtn", function (event) {
    var clickedButton = $(event.target);
    //DOM traversal of id's
    id = clickedButton.parent().attr("id");
    hour = id.slice(5);
    console.log(id);

    console.log(hour);

    handleId();
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour (9am -5pm). HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function handleId() {
    var currentHour = parseInt(dayjs().format("H"), 10);
    hour = parseInt(id.slice(5), 10);
    if (hour == currentHour) {
      console.log("present");
      $("#" + id).attr("class", "row time-block present");
    }
    if (hour < currentHour) {
      console.log("past");
      $("#" + id).attr("class", "row time-block past");
    }
    if (hour > currentHour) {
      console.log("future");
      $("#" + id).attr("class", "row time-block future");
    }
    console.log(currentHour);
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
});
