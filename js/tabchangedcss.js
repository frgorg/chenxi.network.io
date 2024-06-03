$("#nav .tab").on("click", function () {
    var position = $(this).position();
    var width = $(this).width();
    $(".slide1").css({ opacity: 1, top: position.top, height: $(this).height(), left: "15%" });
});

$("#nav .tab").on("mouseover", function () {
    var position = $(this).position();
    $(".slide2").css({ opacity: 1, top: position.top, height: $(this).height(), left: "15%" }).addClass("squeeze");
});

$("#nav .tab").on("mouseout", function () {
    $(".slide2").css({ opacity: 0 }).removeClass("squeeze");
});

var currentHeight = $("#nav .tab.active").height();
var current = $("#nav .tab.active").position();
$(".slide1").css({ top: current.top, height: currentHeight, left: "15%" });