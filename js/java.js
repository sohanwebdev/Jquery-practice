/*--========================================================================--*/
/*hide*/
$(function () {
   $("#hide").click(function () {
      $('#para').hide();
   })
});
/*call back*/
$(function () {
   $("#hide0").click(function () {
      $('#para').hide(function() {alert('hide the paragraph')});
   })
});
/*time hide*/
$(function () {
   $("#hide1").click(function () {
      $('#para').hide(2000,);
   })
});
/*slow hide*/
$(function () {
   $("#hide2").click(function () {
      $('#para').hide('slow');
   })
});
/*fast hide*/
$(function () {
   $("#hide3").click(function () {
      $('#para').hide('fast');
   })
});
/*--========================================================================--*/
/*--========================================================================--*/
/*show*/
$(function () {
   $("#show").click(function () {
      $('#para').show();
   })
});
/*call back*/
$(function () {
   $("#show0").click(function () {
      $('#para').show(function () {alert('show the paragraph')});
   })
});
/*time show*/
$(function () {
   $("#show1").click(function () {
      $('#para').show(2000);
   })
});
/*slow show*/
$(function () {
   $("#show2").click(function () {
      $('#para').show('slow');
   })
});
/*fast show*/
$(function () {
   $("#show3").click(function () {
      $('#para').show('fast');
   })
});
/*--========================================================================--*/
/*toggle*/
$(function () {
   $("#toggle").click(function () {
      $('#para').toggle();
   })
});
/*toggle*/
$(function () {
   $("#toggle").click(function () {
      $('#para').toggle();
   })
});
/*call back*/
$(function () {
   $("#toggle0").click(function () {
      $('#para').toggle(function () {alert('toggle means show or hide the paragraph')});
   })
});
/*time toggle*/
$(function () {
   $("#toggle1").click(function () {
      $('#para').toggle(2000);
   })
});
/*slow toggle*/
$(function () {
   $("#toggle2").click(function () {
      $('#para').toggle('slow');
   })
});
/*fast toggle*/
$(function () {
   $("#toggle3").click(function () {
      $('#para').toggle('fast');
   })
});
/*--========================================================================--*/
/*fadeout*/
$(function () {
   $("#fadeOut").click(function () {
      $('#fade').fadeOut();
   })
});
/*fadein*/
$(function () {
   $("#fadeIn").click(function () {
      $('#fade').fadeIn();
   })
});
/*fadeout time*/
$(function () {
   $("#fadeOut1").click(function () {
      $('#fade').fadeOut(4000);
   })
});
/*fadein time*/
$(function () {
   $("#fadeIn1").click(function () {
      $('#fade').fadeIn(4000);
   })
});
/*fade toggle*/
$(function () {
   $("#fadeToggle").click(function () {
      $('#fade').fadeToggle();
   })
});
/*fade toggle time*/
$(function () {
   $("#fadeToggle1").click(function () {
      $('#fade').fadeToggle(3000);
   })
});
/*fade to*/
$(function () {
   $("#fadeTo").click(function () {
      $('#fade').fadeTo(2000,0.3);
   })
});
/*--========================================================================--*/
/*slide up*/
$(function () {
   $("#slideUp").click(function () {
      $('#slide').slideUp();
   })
});
/*slide down*/
$(function () {
   $("#slideDown").click(function () {
      $('#slide').slideDown();
   })
});
/*slide up time*/
$(function () {
   $("#slideUp1").click(function () {
      $('#slide').slideUp(3000);
   })
});
/*slide down time*/
$(function () {
   $("#slideDown1").click(function () {
      $('#slide').slideDown(3000);
   })
});
/*slide*/
$(function () {
   $("#slide1").click(function () {
      $('#slide').slide();
   })
});
/*--========================================================================--*/
/*animate*/
$(function () {
   $("#animate").click(function () {
      $('#animation').animate({
         width: "700px",
         height: "500px",
      });
   })
});
/*animate time*/
$(function () {
   $("#animate1").click(function () {
      $('#animation').animate({
         width: "700px",
         height: "500px",
      },4000);
   })
});
/*animation stop*/
$(function () {
   $("#animate2").click(function () {
      $('#animation').stop();
   })
});