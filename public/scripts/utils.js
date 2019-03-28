$("#to_top").click(() => {
    window.scrollTo(0,0);
});

$("#search_form").submit(function (event) {
    event.preventDefault();

    let values = $(this).serialize();
    console.log(data);

    $.ajax("/api/search", {
        method: "POST",
        data: values
    })
    .done(function (data) {
        console.log(data);
    });
});