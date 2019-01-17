$(document).ready(function(){

  $("#formDate").submit(function(event) {

    var theCar = $("#car").val();
    var theName = $("input#name").val();
    var theNumber = parseInt($("input#number").val());

    if(theNumber&&theName){

    $(".name").text(theName);

    if(theCar==="BMW"){
      var celeb1="Prince Charming";
      var celeb2="Shrek";
      if (1<=theNumber>=25 || 50<=theNumber>=75){
        $("#prince").show();
      } else {
        $("#shrek").show();
      }
    } else if(theCar==="Ferrari"){
      var celeb1="Dragon";
      var celeb2="Prince Charming";
      if (1<=theNumber>=25 || 50<=theNumber>=75){
        $("#dragon").show();
      } else {
        $("#prince").show();
      }
    }else if (theCar==="Tesla") {
      var celeb1="Donkey";
      var celeb2="Dragon";
      if (1<=theNumber>=25 || 50<=theNumber>=75){
        $("#donkey").show();
      } else {
        $("#dragon").show();
      }
    }else {
      var celeb1="Shrek";
      var celeb2="Donkey";
      if (1<=theNumber>=25 || 50<=theNumber>=75){
        $("#shrek").show();
      } else {
        $("#donkey").show();
      }
     }
   } else{
     alert("Please enter the information.")
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
