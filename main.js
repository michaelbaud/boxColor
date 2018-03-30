$(function(){
  var aucune = $('option[value="aucune"]');
  var vert = $('option[value="vert"]');
  var jaune = $('option[value="jaune"]');
  var rouge = $('option[value="rouge"]');
  
  var box = $('.box');
  
  aucune.click(function(){
    box.css({
      'background-color' : '#fff'
    });
  })
  vert.click(function(){
    box.css({
      'background-color' : 'green'
    });
  })
  jaune.click(function(){
    box.css({
      'background-color' : 'yellow'
    });
  })
  rouge.click(function(){
    box.css({
      'background-color' : 'red'
    });
  })
});