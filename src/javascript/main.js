/* global $ */

$(document).ready(function () {
    /*
     * Tab animations
     */
    $(".menu .item").tab();
    
    /*
     * Shape animations
     */
    $(".flip-up").on("click", function () {
        $(".shape").shape("flip up");
    });
    
    $(".flip-down").on("click", function () {
        $(".shape").shape("flip down");
    });
    
    $(".flip-left").on("click", function () {
        $(".shape").shape("flip left");
    });
    
    $(".flip-right").on("click", function () {
        $(".shape").shape("flip right");
    });
    
    $(".flip-over").on("click", function () {
        $(".shape").shape("flip over");
    });
    
    $(".flip-back").on("click", function () {
        $(".shape").shape("flip back");
    });
    
    /*
     * Open basic modal
     */    
    $(".open-modal").on("click", function () {
        $('.ui.basic.modal').modal('show');
    });
    
    /*
     * Transitions
     */
    $(".animate-jiggle").on("click", function () {
        $(".sequenced.images .image")
          .transition({
            animation: "jiggle",
            duration: 500,
            interval: 200
        });
    });
});