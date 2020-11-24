console.log("hello world");

$(document).ready(
  function(){
    var next = $(".next");
    var prev = $(".prev");

    next.click(
      function (){
        console.log(next);
        goToRigth();

      }
    )

    prev.click(
      function (){
        console.log(prev);
        goToLeft();

      }
    )

  }
)

function goToRigth(){

  // console.log($(".images img.active").hasClass("last"));
  if ($(".images img.active").hasClass("last") == true) {
    $(".nav i.active").removeClass("active");
    $(".images img.active").removeClass("active");
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else {
    $(".images img.active").removeClass("active").next().addClass("active");

    $(".nav i.active").removeClass("active").next().addClass("active");
  }

}

function goToLeft(){
  if ($(".images img.active").hasClass("first") == true) {
    $(".nav i.active").removeClass("active");
    $(".images img.active").removeClass("active");
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else {
    $(".images img.active").removeClass("active").prev().addClass("active");

    $(".nav i.active").removeClass("active").prev().addClass("active");
  }

}
