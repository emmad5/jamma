const mongoose = require("mongoose");
const db = require('./keys').mongoURI;

const Business = require ('../models/Business');

const go = async () => {
    await mongoose
        .connect(db, { useNewUrlParser: true })
        // .then(() => console.log("Connected to MongoDB successfully"))
        // .catch(err => console.log(err));

    const b1 = new Business({
        name: "seed1",
        description: "description1",
        address: "123 Battery St.",
        vibe: "Red"
    })
    b1.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
}

go();
