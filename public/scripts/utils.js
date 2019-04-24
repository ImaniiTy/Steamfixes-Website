function animateToTop() {
    window.requestAnimationFrame(function toTop(time) {
        if(window.scrollY > 0) {
            window.scrollTo(0, window.scrollY/1.2);
            window.requestAnimationFrame(toTop);
        }
    });
}

function toggleDetails(sender) {
    const details = $("#details_wrapper");
    
    if(sender){
        $("#details .title").html(sender.data("title"));
    }

    const detailsDisplay = details.css("display");
    details.css("display", detailsDisplay == "block" ? "none" : "block");
}

function onLoad() {
    sessionStorage.setItem("query", "title=&category=all");
    sessionStorage.setItem("page",1);
    search();
}

function onScroll() {
    var rect = document.getElementById("search_bar").getBoundingClientRect();
    if(rect.top === 0) {
        $("#search_form ").css("background-color", "rgba(19, 26, 33, 0.9)");
        $("#search_bar .text-input").css("border-color", "rgba(48, 70, 96, 0.9)");
        $("#search_bar .dropdown").css("border-color", "rgba(48, 70, 96, 0.9)");
        $("#search_bar .primary-button").css("border-color", "rgba(48, 70, 96, 0.9)");
    } else {
        $("#search_form ").css("background-color", "transparent");
        $("#search_bar .text-input").css("border-color", "rgb(30, 46, 65)");
        $("#search_bar .dropdown").css("border-color", "rgb(30, 46, 65)");
        $("#search_bar .primary-button").css("border-color", "rgb(30, 46, 65)");
    }
}

function pageHandler(sender) {
    sessionStorage.setItem("page",sender.value);
    search();
}

function updateGamesGrid(data) {
    const game_card = Handlebars.templates["game_card"](data);
    $("#games-grid").html(game_card);
}

function updatePagination(limit) {
    const total = sessionStorage.getItem("total");
    let pagesSize = Math.ceil(total/limit);
    let pages = [];
    for (let i = 0; i < pagesSize; i++) {
        pages.push({value: i + 1});
    }
    const current = parseInt(sessionStorage.getItem("page"));
    const previous = current - 1 > 0 ? current - 1 : false;
    const next = current + 1 <= pagesSize ? current + 1 : false;
    const html = Handlebars.templates["pagination"]({pages: pages, previous: previous, next: next});

    $("#pagination").html(html);
}

function search() {
    const query = sessionStorage.getItem("query");
    const page = sessionStorage.getItem("page");
    $.ajax("/api/search", {
        method: "POST",
        data: query + `&page=${page}`
    })
    .done(function (data) {
        console.log(data);
        sessionStorage.setItem("total", data.total)
        updateGamesGrid(data);
        updatePagination(18);
        animateToTop();

        $(".post-link").click(function (event) {
            toggleDetails($(this));
        });
    })
    .fail(function (err) {
        console.error(err.stack);
    });
}

$("#details_wrapper").click(function (event) {
    toggleDetails();
}).children().click(function (event) {
    return false;
});

$("#details .close_btn").click(function (event) {
    toggleDetails();
});

$("#search_form").submit(function (event) {
    event.preventDefault();
    sessionStorage.setItem("query", $(this).serialize());
    sessionStorage.setItem("page",1);
    search();
});

$("#to_top").click(animateToTop);

$(onLoad);

window.onscroll = onScroll;