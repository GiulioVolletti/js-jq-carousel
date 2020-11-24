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
  $(".images img.active").removeClass("active").next().addClass("active");

  $(".nav i.active").removeClass("active").next().addClass("active");

}

function goToLeft(){
  $(".images img.active").removeClass("active").prev().addClass("active");

  $(".nav i.active").removeClass("active").prev().addClass("active");
}
