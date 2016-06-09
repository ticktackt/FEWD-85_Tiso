/*
HomeP
Create 3 divs with a class name of "counter". 
Each div will have an id "cups-counter", "steps-counter","pingpong-counter".

When the page loads up
  Activate Radial Menu plugin.
  We are going to update counter every 30 seconds.

In order to update counters:
  Each div will have a set number to start set in html.
  Get the current value in each div.
  Increase the value by a certain number for each div.
  Cups-count will increase+2
  Steps-counter will increase+4 
  Pingpong-counter will increase+1





*/

var Height = $(window).height();
var Width = $(window).width();
var HW = Width/Height;

if(HW<1){
      $("body").css("background-size","auto 100%");
    }
    else if(HW>1){
      $("body").css("background-size","100% auto");
    }
