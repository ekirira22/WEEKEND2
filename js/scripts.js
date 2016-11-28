$("#animals").click(function(event){
  event.preventDefault();
  var animals = parseInt($("#animals").val());

  if(animals===1){
    $(location).attr('href', "http://www.drsfostersmith.com/pic/article.cfm?aid=828");
  }else if(animals===2){
    $(location).attr('href', "http://www.defenders.org/snakes/basic-facts");
  }else{
    $(location).attr('href', "http://www.livescience.com/52022-startling-facts-about-insects.html");
  }
});
