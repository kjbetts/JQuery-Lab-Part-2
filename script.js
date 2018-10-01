//when user clicks on table number, Reservation form is brought up
$(document).ready(function() {
  var table;
  $(".table").on("click", function() {
    table = $(event.target);
    $(".tn").append('<p>Table Number: </p>' + table.text());
    $(".reservations").fadeIn('slow');

  })
  // when user clicks on save button, Reservation form fades out
  $("#Save").on("click", function() {
    table.addClass('selected');
    $(".reservations").fadeOut('slow');
    $('.tn').empty();

  })
  //when user clicks save button, console.log the values of the the inputs
  $("#Save").on("click", function() {
    var name = $("#Name").val();
    var phone = $("#Phone").val();
    var number = $("#NumberofPeople").val();
    //append a div to the table
    table.append("<div class='hover-div'><div>Guest Name: " + name + "</div><div>Phone Number:" + phone + "</div><div>Size of Party:" + number + "</div></div>");
  })

  //when click on x hide the form
  $("#xbutton").on("click", function() {
    $(".reservations").fadeOut("slow");
  })

});
