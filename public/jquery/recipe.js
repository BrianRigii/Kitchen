$(document).ready(function(){
    $("#cook").click(function(){
        $("#recipe").removeClass("hide")
        $("#leing").addClass("hide")

    })
    $("#ing").click(function(){
        $("#leing").removeClass("hide")
        $("#recipe").addClass("hide")
    })
})