const mongoose = require("mongoose");
const db = require('./keys').mongoURI;

const Business = require ('../models/Business');

const go = async () => {
    await mongoose
        .connect(db, { useNewUrlParser: true })
        // .then(() => console.log("Connected to MongoDB successfully"))
        // .catch(err => console.log(err));

    const HarperAndRye = new Business({
        name: "Harper & Rye",
        description: "Bi-level bar with a piano & a pool table offers a host of drinks including beer, cocktails & punch.",
        address: "1695 Polk St, San Francisco, CA 94109",
        longLat: [-122.421410, 37.794140],
        vibe: "Grey"
        days:
    })
    HarperAndRye.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
}

go();
