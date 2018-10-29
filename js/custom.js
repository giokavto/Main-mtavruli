// ==========================
(function() {
    // Init
    var inner = document.querySelectorAll(".page__image.pi");

    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },

      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },

      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  

  
    
  
    var counter = 0;
    var updateRate = 5;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.forEach(element => {
        element.style = "";
      });
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
  
    var update = function(event) {
      mouse.updatePosition(event);
      inner.forEach(element => {
        updateTransformStyle(
          (mouse.y / element.offsetHeight / 2).toFixed(4),
          (mouse.x / element.offsetWidth / 2).toFixed(4)
        );
      })
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "translateX(" + y  * -100 + "px) translateY(" + x * 100 + "px)";
      inner.forEach(element => {
        element.style.transitionDuration = "350ms";
        element.style.transform = style;
      })
    };
  
    
  
    document.onmouseenter = onMouseEnterHandler;
    document.onmouseleave = onMouseLeaveHandler;
    document.onmousemove = onMouseMoveHandler;
  })();




let html = document.querySelector('html');
$(document).ready(function() {

    if(html.clientWidth > 576){
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
        });
    }   
});


// burger
$(document).ready(function() {

    // Menu script
    $("#burger").click(function() {
        $(".anim").toggleClass("active");
    });
    $(".menu__item").click(function() {
        $(".anim").toggleClass("active");
    });
//bottom
 $("#bottom").click(function() {
        $(".anim-bottom").toggleClass("active");
    });
    $(".resourse-down").click(function() {
        $(".anim-bottom").toggleClass("active");
    });

    //Scroll to ID
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0){return;}
        e.preventDefault();
        //var pos = $id.offset().top - 60;
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos});
    });
});

