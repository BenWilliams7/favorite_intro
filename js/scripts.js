$(document).ready(function(){
  $("form").submit(function(event) {
    var blanks = ["favthing1", "favthing2", "favthing3", "favthing4", "favthing5"];
    // $(".yourArray").append(blanks);
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
      // var favthing1 = $(input#favthing1).val()
    });
    $("#arrayOutput").show();
    event.preventDefault();
  });

});
