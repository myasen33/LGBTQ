
// //SCREEN CENTER
// var x = window.innerWidth / 2;
// var y = window.innerHeight / 2;

$(".navig").hover(function(){
    $(this).css("background-color", "lavender");
    }, function(){
    $(this).css("background-color", "");
  });

function screenMid(){
  var y = document.body.clientHeight;
  return y / 2;
}

//history descriptions on hover
$("#pic1").hover(function(){
  $("#pride1").css("display","block");
  // $("#pride1").css("position", $("#pic1").css("position"));
  // $("#pride1").css("top",$("#pic1").css("top") + "px");
  $("#pride1").css("top",screenMid()-10 + "px");
}, function(){
  $("#pride1").css("display","none");
});

$("#pic2").hover(function(){
  $("#london").css("display","block");
  $("#london").css("top",screenMid()-10 + "px");
}, function(){
  $("#london").css("display","none");
});

$("#pic3").hover(function(){
  $("#stonewall").css("display","block");
  $("#stonewall").css("top",screenMid()-10 + "px");
}, function(){
  $("#stonewall").css("display","none");
});

$("#pic4").hover(function(){
  $("#surgery").css("display","block");
  $("#surgery").css("top",screenMid()-10 + "px");
}, function(){
  $("#surgery").css("display","none");
});


$(".link").hover(function(){
    $(this).css("background-color", "lavender");
    }, function(){
    $(this).css("background-color", "");
  });

$('.heman').click(function() {
window.open('https://www.youtube.com/watch?v=ZZ5LpwO-An4');
  });

//should set every description to the size and position of its flag
// $(".iddesc").css({
//   "width": this.parent().innerWidth() });

// //id captions on hover
// $("#lesflag").hover(function(){
//   $("#lesdesc").css("display","block");
//   // $("#surgery").css("top",screenMid()+600 + "px");
// }, function(){
//   $("#lesdesc").css("display","none");
// });

// $("#panflag").hover(function(){
//   $("#pandesc").css("display","block");
//   // $("#surgery").css("top",screenMid()+600 + "px");
// }, function(){
//   $("#pandesc").css("display","none");
// });
 
