// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour (9am -5pm). HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var id;
  var hour;
  var containerEl = $(".container-lg");
  //calls all the divs under the container
  var childDivs = containerEl.children("div");
  //this will initialize the page with present, past and future textAreas
  //I am traversing through all the divs and pulling only id's
  for (var i = 0; i < childDivs.length; i++) {
    //this variable will hold the id's being pulled from divs
    id = $(childDivs[i]).attr("id");
    //hours will be the last number from the id ex.9 in hour-9
    hour = parseInt(id.slice(5), 10);
    // console.log("These are the ids " + initId);
    //get saved input and place it in the textarea of id
    var savedInput = localStorage.getItem(id);
    $("#" + id + " .description").val(savedInput);

    var currentHour = parseInt(dayjs().format("HH:mm"), 10);
    if (hour == currentHour) {
      console.log("present");
      $("#" + id).attr("class", "row time-block present");
    } else if (hour < currentHour) {
      console.log("past");
      $("#" + id).attr("class", "row time-block past");
    } else if (hour > currentHour) {
      console.log("future");
      $("#" + id).attr("class", "row time-block future");
    }
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // var id;
  // var hour;
  //'this' refers to the DOM element to which the event handler is attached; it is attached to the 'container-lg'
  //$(this) this keyword is used inside $(), then it becomes a jQuery object, and now we can use all properties of jQuery on this method.
  // var textAreaEl = $(this).siblings(".description");
  // console.log("TextArea = " + textAreaEl);

  containerEl.on("click", ".saveBtn", function (event) {
    var clickedButton = $(event.target);
    //save user input when user clicks on save button
    id = clickedButton.parent().attr("id");
    var textAreaEl = $(this).siblings(".description");
    var userInput = textAreaEl.val();

    // console.log(userInput);
    //save the id and and user input as key and value pair
    localStorage.setItem(id, userInput);
    alert("Event has been saved to LocalStorage");
  });

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // var savedInput = localStorage.getItem(id);
  // //this is placing the saved text from localstorage into all the textArea's
  // //must use id to set it to a certain area
  // textAreaEl.text(savedInput);

  // TODO: Add code to display the current date in the header of the page.
  var theDay = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(theDay);
});
