$(function(){
    $.ajax({
        type: "GET",
        url:"https://pokeapi.co/api/v2/pokemon/?limit=151",
        dataType:"json",
        success: function(){
            $(data).find("name")
        }
    })

})