function animateToTop() {
    window.requestAnimationFrame(function toTop(time) {
        if(window.scrollY > 0) {
            window.scrollTo(0, window.scrollY/1.2);
            window.requestAnimationFrame(toTop);
        }
    });
}

$("#to_top").click(animateToTop);

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
    })
    .fail(function (err) {
        console.error(err.stack);
    });
}

$("#search_form").submit(function (event) {
    event.preventDefault();
    sessionStorage.setItem("query", $(this).serialize());
    sessionStorage.setItem("page",1);
    search();
});

function onLoad() {
    sessionStorage.setItem("query", "title=&category=all");
    sessionStorage.setItem("page",1);
    search();
}

$(onLoad);

window.onscroll = onScroll;

function onScroll() {
    var rect = document.getElementById("search_bar").getBoundingClientRect();
    if(rect.top === 0) {
        $("#search_bar .text-input").css("background-color", "rgba(22, 32, 43, 0.9)");
        $("#search_bar .dropdown").css("background-color", "rgba(22, 32, 43, 0.9)");
    } else {
        $("#search_bar .text-input").css("background-color", "rgba(22, 32, 43, 0.3)");
        $("#search_bar .dropdown").css("background-color", "rgba(22, 32, 43, 0.3)");
    }
}