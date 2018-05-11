// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


$("#submitBtn").on("click", function(event){
    event.preventDfault();

    var name = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var frequency = $("#frequency").val().trim();
    var nextArival = $("#nextTrain").val().trim();
    var minAway = $("#away").val().trim();
    $("table > tbody").append("<tr><td>" + name + "</tr></td>");
    var tableRow = $("<tr>");
    tableRow.append("<td>" + name + "</td>");
    tableRow.append("<td>" + destination + "</td>");
    tableRow.append("<td>" + frequency + "</td>");
    tableRow.append("<td>" + nextArival + "</td>");
    tableRow.append("<td>" + minAway + "</td>");
    $(".table > tbody").append(tableRow);
})