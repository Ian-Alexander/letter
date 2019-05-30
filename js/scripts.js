$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var prefixInput = $("#prefix").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    

    $(".prefix").text(prefixInput);
    $(".name").text(nameInput);
    $(".address").text(addressInput);


    $("#letter").show();
    event.preventDefault();
  });
});
