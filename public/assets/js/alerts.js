var symbolInput = $("#symbolName"),
  target_priceInput = $("#target_price")

var url = window.location.search;
var alertId;
var userId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;

function submitAlert(alert) {
  $.post("/alerts/new", alert, function () {
    window.location.href = "/alerts";
  });
}

function updateAlert(alert) {
  $.ajax({
    method: "PUT",
    url: "/alerts",
    data: alert
  })
    .done(function () {
      window.location.href = "/alerts";
    });
}

function handleFormSubmit(event) {
  console.log("handleFormSubmit: ")
  console.log(event)
  event.preventDefault();
  // Wont submit the post if we are missing a body, title, or author
  if (!target_priceInput.val().trim()) {
    return;
  }
  // Constructing a newPost object to hand to the database
  var newAlert = {
    symbol: symbolInput
      .val()
      .trim(),
    target_price: target_priceInput
      .val()
      .trim(),
    target_price: target_priceInput
      .val()
      .trim()
  };

  // If we're updating a post run updatePost to update a post
  // Otherwise run submitPost to create a whole new post
  if (updating) {
    newAlert.id = alertId;
    updateAlert(newAlert);
  }
  else {
    submitAlert(newAlert);
  }
}

$("#alertForm").on("submit", handleFormSubmit);