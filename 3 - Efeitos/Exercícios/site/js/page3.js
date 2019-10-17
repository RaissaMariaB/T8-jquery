$(function () {
    
    function configurateHover() {
        $(".card-title").off("mouseEnter").on("mouseenter",
            function () {
                $(this).css("color", "yellow")
            }
        )

        $(".card-title").off("mouseLeave").on("mouseleave",
            function () {
                $(this).css("color", "black")
            })

    }

    configurateHover()
    
    $(".btntoggle").click(function () {
        $(".card1").fadeToggle(3000)
        $(".card2").fadeToggle(5000)
        $(".card3").fadeToggle(7000)
    })
    
    $(".btncopia").click(function () {
        let copia = $(".div-origin").html()

        $(".div-origin").after('<div class="row">' + copia + "</div>")

        configurateHover()

    })

})


