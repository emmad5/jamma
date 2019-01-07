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
        address: "1695 Polk St. San Francisco, CA 94109",
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
        address: "684 Commercial St. San Francisco, CA 94111",
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
        address: "194 Church St. Churchill. San Francisco, CA 94114",
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
    const NativesBar = new Business({
        name: "NativesBar",
        address: "5320 Geary Blvd. San Francisco, CA 94121",
        longLat: [-122.476640, 37.780840],
        vibe: "Grey",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: 16,
        endTime: 20,
        menu: {
            8: [
                "Moscow Mule",
            ],
            10: [
                "Rose Manhattan",
                "Old Fashion"
            ]
        },
        imageUrl: "https://msafirikenya.co.ke/media/com_jbusinessdirectory/pictures/companies/0/16142870_633767650165117_1009241198412778187_n-1490772534.jpg"
    })
    const Laureate = new Business({
        name: "Laureate",
        address: "444 Presidio Ave. San Francisco, CA 94115",
        longLat: [-122.446579, 37.787590],
        vibe: "Grey",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: 16,
        endTime: 18,
        menu: {
            7: [
                "Select California Wine"
            ],
            8: [
                "Select Sparkling Wine"
            ],
            10: [
                "Paloma",
                "Mojito",
                "Margarita",
                "Martini",
                "Negroni",
                "Old Fashioned"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/YGVG2Y1Cx-70Dcj9eteds2sbMUk=/0x0:2000x1333/1200x0/filters:focal(0x0:2000x1333):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12054911/Laureate_PChang_1318.jpg"
    })
    HarperAndRye.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    EZ5.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TheOffice.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    NativesBar.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Laureate.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
}

go();
