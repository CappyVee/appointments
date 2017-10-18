$(document).ready(function(){
  $("#confirm-btn").click(function(event){
    event.preventDefault();
    //Collect info from form
    var userName = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    //Assign info to confirmation message
    $(".name").text(userName);
    $(".info").text(description);
    $(".date").text(date);
    $(".start-time").text(startTime);
    $(".end-time").text(endTime);

    $("#confirm-msg").fadeIn(600);
    $("#hide-form").hide();
  });//end click fxn

});//end ready fxn
