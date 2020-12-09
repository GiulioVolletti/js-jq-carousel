console.log("hello world");

$(document).ready(
  function(){
    var next = $(".next");
    var prev = $(".prev");

    next.click(
      function (){
        // console.log(next);
        goToRigth();

      }
    )

    prev.click(
      function (){
        // console.log(prev);
        goToLeft();

      }
    )

    $(document).keydown(
      function(){
        if (event.which == 39) {
          goToRigth();
        } else if (event.which == 37) {
          goToLeft();
        }
      // console.log(event.which);
    })
    $(".nav i").click(
      function (){
        $(".images img.active").removeClass("active");
        $(".nav i").removeClass("active");
        $(this).addClass("active");
        var circleIndex = $(this).index();

        $(".images > img").eq(circleIndex).addClass("active");
        var here = $(this);
        console.log(here);
        console.log($(".nav i"));

        // for (var i = 0; i < $(".nav i").length; i++) {
        //   if ($(".nav i")[i] == here[0]) {
        //         // $(".images > img").index().eq([i]).addClass("active");
        //     // $(".images img:nth-child(" + [i] + 1 + ")").addClass("active");
        //
        //     // console.log( $(".images img:nth-child(" + [i] + ")").addClass(" active"));
        //
        //
        //   }
        //   // console.log($(".nav i")[i] == here[0]);
        //   // $(".images img")[i].addClass("active");
        // }
      }
    )
  }
)

// var arrayIcon = $(".nav i");
// for (var i = 0; i < arrayIcon.length; i++) {
//
// }
// -------------------- function ---------- //
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
