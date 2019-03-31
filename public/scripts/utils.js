$("#to_top").click(() => {
    window.requestAnimationFrame(function toTop(time) {
        if(window.scrollY > 0) {
            window.scrollTo(0, window.scrollY/1.2);
            window.requestAnimationFrame(toTop);
        }
    });
});

function updateGamesGrid(data) {
    const game_card = Handlebars.templates["game_card"](data);
    $("#games-grid").html(game_card);
}

$("#search_form").submit(function (event) {
    event.preventDefault();

    let values = $(this).serialize();

    $.ajax("/api/search", {
        method: "POST",
        data: values
    })
    .done(function (data) {
        console.log(data);
        updateGamesGrid(data);
    })
    .fail(function (err) {
        console.log()
    });
});