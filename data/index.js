const users = [
    {
        id: 1,
        username: "Kvothe",
        name: "Dylan",
        lastName: "Erdini",
        email: "erdini@correo.com"
    },
    {
        id: 2,
        username: "Deismok",
        name: "Martin",
        lastName: "Codina",
        email: "codina@gmail.com"
    },
    {
        id: 3,
        username: "Fercho",
        name: "Fernando",
        lastName: "Avila",
        email: "avila@gmail.com"
    }
]

const topics = [
    {
        id: 1,
        userId: 1,
        title: "Games you would like to see on Steam",
        description: "Please post the game(s) you would like to see made available on Steam here."
    },
    {
        id: 2,
        userId: 3,
        title: "Are the old CODs on steam safe to play?",
        description: "I have been seing quite a few videos of the old cod being a security risk. Whats your opiniond of it? I dont plan on playing the online modes, only campaing. Is it still not safe to play campaing mode?"
    },
    {
        id: 3,
        userId: 2,
        title: "Is there a way to not update Cyberpunk and still be able to play it?",
        description: "I haven't finished my first playthrough and I want to play the update with Phantom Liberty"
    }
]

const comments = [
    {
        id: 1,
        topicID: 1,
        userID: 3,
        comment: "Red Dead Redemption 1, Halo Infinite"
    },
    {
        id: 2,
        topicID: 2,
        userID: 2,
        comment: "Campaign mode it's safe"
    },
    {
        id: 3,
        topicID: 3,
        userID: 2,
        comment: "You can disable auto update for specific games. In your library right click it and go to properties."
    }

]

module.exports = [
    users,
    topics,
    comments
]