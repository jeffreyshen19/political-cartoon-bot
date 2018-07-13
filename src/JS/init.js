/*
  Responsible for the website's initialization script
  Jeffrey Shen
*/

var currentData, //Data that has been filtered by subject(s)
    originalData; //Unaltered data

$.get("./data/data-min.json", function(d){
  originalData = d;
  currentData = d;

  generateSubjectDropdown();
  drawGraph(currentData);

  //Make sure graph sizes responsively
  $(window).on("resize", function(){
    drawGraph(currentData);
  });

});
