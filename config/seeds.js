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
        vibe: "Grey",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: 14,
        endTime: 17,
        menu: {
            2: [
                "French Fries",
                "Boulevard Tank 7 Saison",
                "Manny’s Pale Al"
            ],
            6: [
               "Brit & Kel",
               "Tom & Christie",
               "Banshee Pinot Noir"
            ]
        },
        imageUrl: "http://web.harperandrye.com/wp-content/uploads/2014/10/harper-rye-bg-photos-2_5.jpg"
    })
    const EZ5 = new Business ({
        name: "EZ5",
        description: "We at EZ5 believe that happy hour is crucial to healthy, everyday living. That's why we offer happy hour from 4pm to 8pm five days a week, Monday through Friday.",
        address: "684 Commercial St, San Francisco, CA 94111",
        longLat: [-122.401430, 37.794430],
        vibe: "Red",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: 16,
        endTime: 20,
        menu: {
            1: [
                "Jello Shots"
            ],
            3: [
                "Sapporo"
            ],
            4: [
                "Wine"
            ],
            8: [
                "Bottled Beer",
                "Selected Shots"
            ]
        },
        imageUrl: "https://static1.squarespace.com/static/577f4dba15d5dbbc19b90e5c/57acc075b3db2b02052cd01e/57acc075b3db2b02052cd020/1470939267557/Barshot2.JPG"
    })
    const TheOffice = new Business({
        name: "The Office",
        description: "The Office boldly combines class and sophistication in a laid-back atmosphere.",
        address: "194 Church St, Churchill, San Francisco, CA 94114",
        longLat: [-122.429180, 37.767940],
        vibe: "Grey",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: 16,
        endTime: 20,
        menu: {
            4: [
                "Old Fashioned",
                "Summer Lover",
                "Democrat"
            ],
            6: [
                "BLANC de BLANCS BRUT",
                "Charles Armand"
            ]
        },
        imageUrl: "https://s3-media2.fl.yelpcdn.com/bphoto/nBn4bODcYt-kKrUcrhPXAw/o.jpg"
    })


    HarperAndRye.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    EZ5.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TheOffice.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
}

go();
