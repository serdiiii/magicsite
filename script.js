$(document).ready(function(){
    let isCatShow = false;
    $('#CastSpellBTN').click(function(){
    if($('#SpellInput').val() == "leviosa"){

      $('#CastSpellBTN').animate({bottom: '100px'}, 2000)
      $('#CastSpellBTN').animate({top: '0px'}, 2000)

      
    }
    if($('#SpellInput').val() == "left"){

        $('#CastSpellBTN').animate({left: '100px'}, 2000)
        $('#CastSpellBTN').animate({left: '0px'}, 2000)
      }
      if($('#SpellInput').val() == "robocat"){

        $('#cat').slideToggle(2000);
        isCatShow = !isCatShow;
      }
      if($('#SpellInput').val() == "catgif"){

        $('#catgif').slideToggle(2000);
      }
      if($('#SpellInput').val() == "transformio"
      && isCatShow){

        $('#cat').attr("src", "h.jpg");
      }
    // alert(`${  $('#SpellInput').val()}`);
    });
})