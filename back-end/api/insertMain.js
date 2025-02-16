import {artistArray} from "../../front-ent/src/assets/database/artists.js"
import {songsArray} from "../../front-ent/src/assets/database/songs.js"
import { db } from "./connect.js"

const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj}
    delete newArtistObj.id

    return newArtistObj
})

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = {...currentSongObj}
    delete newSongObj.id

    return newSongObj
})

const responseArtists = await db.collection('artists').insertMany(newArtistArray)
const responseSongs = await db.collection('songs').insertMany(newSongsArray)
