// $(function(){
//   $("#getText").submit(function(event){
//     var wordsInput = $("input#words").val();
//     console.log(wordsInput);
//
//     $("wordsInput").text(wordsInput.toUpper);
//
//     // $("#letter").show();
//   // var shoutWords = wordsInput.toUpper();
//   console.log(shoutWords);
//
//     event.preventDefault();
//   });
// });

$(function(){
  $("#getText").submit(function(event){
    var wordsInput = $("input#words").val().toUpperCase();
    $(".words").text(wordsInput);

    event.preventDefault();
  });
});
