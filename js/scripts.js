$(document).ready(function(){

  $("#formAnimals").submit(function(event) {

    var anim = $("#animals").val();

    if(anim==="Turtle"){
      $("#ant").hide();
      $("#manatee").hide();
      $("#turtle").show();
    } else if (anim==="Ant"){
      $("#turtle").hide();
      $("#manatee").hide();
      $("#ant").show();
    } else {
      $("#ant").hide();
      $("#turtle").hide();
      $("#manatee").show();
    }

    event.preventDefault();


  });
});
