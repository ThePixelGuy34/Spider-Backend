const express = require("express")
const app = express();
const dotenv = require("dotenv");
const log = require("../utils/log/log.js")
dotenv.config();
// data

// download 
app.get('/api/v1/events/:gameId/download/:accountId', (req, res) => {
    //const { accountId } = req.params; will use later
    const events = require("../responses/events.json");
    events.player = {
        gameId: "Fortnite",
        accountId: "pixel",
        groupIdentity: {},
        pendingPayouts: [],
        pendingPenalties: {},
        teams: {},
        tokens: [],
        persistentScores: {
          Hype: 0
        },
        groupIdentity: {}
    }
    log.debug("Sending events data");
    res.json(200).send(events);
})

// player
app.get('/api/v1/events/:gameId/data/:accountId', (req, res) => {
    //const { accountId } = req.params; will use later
    const player = {
        gameId: "Fortnite",
        accountId: "pixel",
        tokens: [
            ""
        ],
        teams: {},
        pendingPayouts: [],
        pendingPenalties: {},
        persistentScores: {
          Hype: 0
        },
        groupIdentity: {}
    }
    log.debug("Sending player events data");
    res.json(200).send(player);
})

module.exports = app;
