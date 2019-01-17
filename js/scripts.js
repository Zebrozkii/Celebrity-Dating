$(document).ready(function(){

  $("#formDate").submit(function(event) {

    var theCar = $("#car").val();
    var theName = $("input#name").val();
    var theNumber = parseInt($("input#number").val());


    $(".name").text(theName);

    if(theCar==="BMW"){
      var celeb1="Prince Charming";
      var celeb2="Shrek";
      if (theNumber >= 10){
        alert(celeb1);
      } else {
        $("#shrek").show();
      }
    } else if(theCar==="Ferrari"){
      var celeb1="Dragon";
      var celeb2="Prince Charming";
      if (theNumber >= 10){
        alert(celeb1);
      } else {
        alert(celeb2);
      }
    }else if (theCar==="Tesla") {
      var celeb1="Donkey";
      var celeb2="Dragon";
      if (theNumber >= 10){
        alert(celeb1);
      } else {
        alert(celeb2);
      }
    }else {
      var celeb1="Shrek";
      var celeb2="Donkey";
      if (theNumber >= 10){
        alert(celeb1);
      } else {
        alert(celeb2);
      }
     }







    event.preventDefault();
  });
});

// if(anim==="Turtle"){
//   $("#ant").hide();
//   $("#manatee").hide();
//   $("#turtle").show();
// } else if (anim==="Ant"){
//   $("#turtle").hide();
//   $("#manatee").hide();
//   $("#ant").show();
// } else {
//   $("#ant").hide();
//   $("#turtle").hide();
//   $("#manatee").show();
// }
