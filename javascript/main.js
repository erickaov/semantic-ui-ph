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
});