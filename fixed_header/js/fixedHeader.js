(function(){

  var fixed = {};

  fixed = function(){

    var fix = $("#fixHeader");
    var fixPos = $(fix).offset().top; //固定ヘッダーの座標を取得
    var fixStop = $(".fixStop:last");
    var fixStopPos = $(fixStop).offset().top; //ストップ位置の座標を取得

    $(window).scroll(function(){

      var scrollPos = $(this).scrollTop(); //スクロール量取得

      console.log(scrollPos);
      console.log(fixStopPos);

      if( scrollPos >= fixPos ){ //固定ヘッダーの処理

        $(fix).removeAttr("style");

        $(fix).css({ //各スタイル付与
          "position":"fixed",
          "width": $(fix).parent(".marginTop2perseInt").innerWidth(),
          "top": 0,
          // "left": 2 + "%",
          "border-bottom": "solid 2px #999"
        });

        //固定ヘッダーにfixedを付与した際に、
        //その分のエレメントの高さが消失するので、エレメントにpaddingを付与
        $(fix).parent(".marginTop2perseInt").css({

          "padding-top": $(fix).outerHeight()

          });

          //ストップ位置の処理
          if(fixStopPos <= scrollPos + $(fix).outerHeight()){

            $(fix).removeAttr("style");

            $(fix).css({
              "position":"absolute",
              "top": fixStopPos - $(fix).outerHeight() + "px",
              "width": $(fix).parent(".marginTop2perseInt").innerWidth()
            })

          };

      }else if(fixPos >= scrollPos){ //固定ヘッダーを元の位置に戻す

        $(fix).removeAttr("style");

        $(fix).parent(".marginTop2perseInt").removeAttr("style");

        };
    });

  };

  window.fixed = fixed;

})();