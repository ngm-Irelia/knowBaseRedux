'use strict'

$(function(){
 
  $(".map_type").bind('click', function () {
    console.log("click  map_type -----" + $(this).attr('value'));
    loadGis($(this).attr('value'));
  })

})