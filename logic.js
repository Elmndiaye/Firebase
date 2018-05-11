//firebase goes here
// start frebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDuo-wk8odH8kOPEkJFurvyIZETbxOEmIs",
    authDomain: "fir-11-6fe81.firebaseapp.com",
    databaseURL: "https://fir-11-6fe81.firebaseio.com",
    projectId: "fir-11-6fe81",
    storageBucket: "fir-11-6fe81.appspot.com",
    messagingSenderId: "929086219159"
  };
  firebase.initializeApp(config);


// end firebase



$("#submitBtn").on("click", function(event){
    event.preventDfault();

    var name = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var nextArival = $("#nextTrain").val().trim();
    var trainFreq = $("#frequency").val().trim();

var newTrain = {
    tname: name,
    tdest: destination ,
    start: nextArival,
    frequency: trainFreq,
};

// uploads data to the database
database.ref().push(newTrain);

// alert user
alert("Train added");

$("#trainName").val("");
$("#destination").val("");
$("#nextTrain").val("");
$("#frequency").val("");

});





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
    var nextArival = $("#nextTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    $("table > tbody").append("<tr><td>" + name + "</tr></td>");
    var tableRow = $("<tr>");
    tableRow.append("<td>" + name + "</td>");
    tableRow.append("<td>" + destination + "</td>");
    tableRow.append("<td>" + frequency + "</td>");
    tableRow.append("<td>" + nextArival + "</td>");
    tableRow.append("<td>" + minAway + "</td>");
    $(".table > tbody").append(tableRow);
})