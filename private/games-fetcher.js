function get_games() {
    let game_list = [{
        img: "https://steamcdn-a.akamaihd.net/steam/apps/814380/header.jpg?t=1553652567",
        date: "01/01/2022",
        title: "Sekiro: Shadows Die Twice",
        categories: ["Singleplayer", "Multiplayer"]
    },{
        img: "https://steamcdn-a.akamaihd.net/steam/apps/531510/header.jpg?t=1551877705",
        date: "01/01/2022",
        title: "Just Shapes & Beats",
        categories: ["Singleplayer", "Multiplayer"]
    }];

    let data = {
        games: game_list
    };

    return data;
}

module.exports = get_games;