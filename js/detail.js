$(function () {
  $("#goodsBanner >span").on("click", function () {
    $(".video").show();
  }),
    $(".close").on("click", function () {
      $(".video").css({ display: "none" }), $("#cart").hide();
    }),
    $(window).scroll(function () {
      $(document).scrollTop() > 80 + $("#fast-nav").height()
        ? ($("#goodsBanner").removeClass("relative"),
          $("#goodsBanner").addClass("fixed"))
        : ($("#goodsBanner").removeClass("fixed"),
          $("#goodsBanner").addClass("relative")),
        $("#goods-detail").offset().top <
        $(document.body).height() + $(document).scrollTop()
          ? ($("#goodsBanner").removeClass("fixed"),
            $("#goodsBanner").addClass("relative"),
            $(".aside").fadeIn())
          : $(".aside").fadeOut(),
        $(document).scrollTop() >= $("#goods-detail").offset().top
          ? $("#choice").slideDown("slow")
          : $("#choice").slideUp("slow");
    }),
    $(".backTop").click(() => {
      $("body,html").animate({ scrollTop: 0 }, 600);
    });
});
