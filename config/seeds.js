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
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "14:00",
        endTime: "17:00",
        menu: {
            "2": [
                "French Fries",
                "Boulevard Tank 7 Saison",
                "Manny’s Pale Al"
            ],
            "6": [
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
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "16:00",
        endTime: "20:00",
        menu: {
            "1": [
                "Jello Shots"
            ],
            "3": [
                "Sapporo"
            ],
            "4": [
                "Wine"
            ],
            "8": [
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
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "16:00",
        endTime: "20:00",
        menu: {
            "4": [
                "Old Fashioned",
                "Summer Lover",
                "Democrat"
            ],
            "6": [
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
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "16:00",
        endTime: "20:00",
        menu: {
            "8": [
                "Moscow Mule",
            ],
            "10": [
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
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "7": [
                "Select California Wine"
            ],
            "8": [
                "Select Sparkling Wine"
            ],
            "10": [
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
    const ScarletLounge = new Business({
        name: "Scarlet Lounge",
        address: "408 Clement St. San Francisco, CA 94118",
        longLat: [-122.476310, 37.782410],
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "5" : [
                "Select Cocktail"
            ]
        },
        imageUrl: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/23031150_290635674778785_7322929934004221257_n.jpg?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=e44c719f3e5b7383b010224b26a7370d&oe=5CC744FA"
    })
    const LastCallBar = new Business({
        name: "Last Call Bar",
        address: "3988 18th St. San Francisco, CA 94114",
        longLat: [-122.435500, 37.760860],
        days: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        startTime: "12:00",
        endTime: "19:00",
        menu: {
            "3": [
                "Well Drinks"
            ]
        },
        imageUrl: "https://s3-media4.fl.yelpcdn.com/bphoto/-uXts-n88mGfQy8zOmbPEg/o.jpg"
    })
    const ThePinkElephantAlibi = new Business({
        name: "The Pink Elephant Alibi",
        address: "142 Minna St. San Francisco, CA 94105",
        longLat: [-122.400490, 37.786819],
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        startTime: "16:00",
        endTime: "19:00",
        menu: {
            "5": [
                "Well Drinks",
                "Champagne"
            ],
            "7": [
                "House Wine"
            ]
        },
        imageUrl: "https://static.wixstatic.com/media/3f8fbf_3dfa49356f8d432eb8c431a558bd667b~mv2.jpg"
    })
    const LastDropTavern = new Business({
        name: "Last Drop Tavern",
        address: "550 Powell St San Francisco, CA 94108" ,
        longLat: [-122.408560, 37.790000],
        days: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        startTime: "16:00",
        endTime: "19:00",
        menu: {
            "4": [
                "Hand Cut Fries"
            ],
            "5": [
                "Guac and Chips",
                "Mojito",
                "Old Fashioned",
                "Margarita",
                "Manhattan",
                "Sangria",
                "Well Cocktails",
                "Draft Beers",
                "Wine By The Glass"
            ],
            "7": [
                "Spinach and Artichoke Dip",
                "Bacon Deviled Eggs"
            ],
            "8": [
                "Buffalo Wings"
            ],
            "9": [
                "Baja Fish Tacos"
            ],
            "10": [
                "Salt and Pepper Calamari"
            ],
            "11": [
                "Bourbon BBQ Ribs"
            ]
        },
        imageUrl: "https://s3-media3.fl.yelpcdn.com/bphoto/PLhUITXN7zM64KoBm00MBw/o.jpg"
    })
    const FiresideBar = new Business({
        name: "Fireside Bar",
        address: "603 Irving St San Francisco, CA 94122",
        longLat: [-122.489990, 37.762980],
        days: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        startTime: "13:00",
        endTime: "19:00",
        imageUrl: "https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/72979621425d4068bdadc79c4a441f30.jpg"
    })
    const Belga = new Business({
        name: "Belga",
        address: "2000 Union St. San Francisco",
        days: ["Mon", "Tues", "Weds", "Thurs"],
        longLat: [-122.430479, 37.797735],
        startTime: "15:00",
        endTime: "18:00",
        menu: {
            "2": [
                "Oysters"
            ],
            "5": [
                "Guac and Chips",
                "Mojito",
                "Old Fashioned",
                "Margarita",
                "Manhattan",
                "Sangria",
                "Well Cocktails",
                "Draft Beers",
                "Wine By The Glass"
            ],
            "5": [
                "Beer",
                "Bubbles",
                "Rose"
            ],
            "7": [
                "Gin and Tonic"
            ]
        },
        imageUrl: "http://violetfog.com/wp-content/uploads/2015/11/melissademataphoto-cyneats-belga-sf-7440.jpg"
    })
    const ComstockSaloon = new Business({
        name: "Comstock Saloon",
        address: "155 Columbus Ave, San Francisco, CA 94133",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.405643, 37.796964],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "8": [
                "Shots",
                "Small Beer",
                "Scofflaw"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/27HMeujtUKjHyPX661NrX2vgsL4=/0x0:5472x3648/1200x0/filters:focal(0x0:5472x3648):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10178401/Comstock_interior.jpg"
    })
    const Maybecks = new Business({
        name: "Maybeck's",
        longLat: [- 122.441138, 37.799485],
        address: "3213 Scott St. San Francisco",
        days: ["Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        startTime: "16:30",
        endTime: "18:00",
        menu: {
            "7": [
                "Bar Bites",
                "Well Drinks",
                "Half Dozen Oysters"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/0zJ09_dyzdi8-ZJHMiom84bbmRQ=/0x0:2000x1333/1870x1403/filters:focal(840x506:1160x826):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62460434/SpaghettiBros_PChang-9274.0.0.0.0.0.jpg"
    })
    const FifthArrow = new Business({
        name: "Fifth Arrow",
        address: "430 Mason St. San Francisco",
        longLat: [-122.409875, 37.787682],
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "5": [
                "Wine",
                "Beer"
            ],
            "10": [
                "Pizza"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/by_qCdZlMKJZG4FlUBMnj9EFjow=/0x0:2000x1333/1200x480/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/59913695/FifthArrow_PChang_8982.0.jpg"
    })
    const PiriPica = new Business({
        name: "Piri Pica",
        address: "590 Valencia St. San Francisco, CA 94110",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.420480, 37.750198],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "1": [
                "Wings"
            ],
            "3": [
                "Beer"
            ],
            "5": [
                "Wines",
                "Chile Cheese Fries"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/TwX2hOpJw3Y47OoXX99rebILkEc=/0x0:960x960/1200x800/filters:focal(307x160:459x312)/cdn.vox-cdn.com/uploads/chorus_image/image/60960781/37760077_2243852772511911_3756154268508225536_n_2.0.jpg"
    })
    const TheSaratoga = new Business({
        name: "The Saratoga",
        address: "1000 Larkin St. San Francisco",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.418212, 37.787261],
        startTime: "17:00",
        endTime: "18:00",
        menu: {
            "5": [
                "Craft Cocktails",
                "Bar Snacks"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/lQ-RQmyLGQZnuKbzcUfy28RWClI=/0x0:2000x1333/1200x0/filters:focal(0x0:2000x1333):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7415955/TheSaratoga_PChang-0628.0.jpg"
    })
    const ThePigAndWhistle = new Business({
        name: "The Pig & Whistle",
        address: "2801 Geary Blvd. San Francisco, CA 94118",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        longLat: [-122.449165, 37.782045],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "3": [
                "Pint"
            ]
        },
        imageUrl: "http://www.pig-and-whistle.com/img/s_image3.png"
    })
    const ScopoDivino = new Business({
        name: "Scopo Divino",
        address: "2800 California St. San Francisco, CA 94115",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sun"],
        longLat: [-122.440791, 37.788147],
        startTime: "15:00",
        endTime: "18:00",
        menu: {
            "1": [
                "Oysters"
            ]
        },
        imageUrl: "https://s3-media4.fl.yelpcdn.com/bphoto/8yHXVQCsi8SCv5ZMwBQUKg/o.jpg"
    })
    const SocialKitchenAndBrewery = new Business({
        name: "Social Kitchen & Brewery",
        address: "1326 9th Ave, San Francisco, CA 94122",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        longLat: [-122.466066, 37.763504],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "5": [
                "House Cut Fries"
            ],
            "6": [
                "Select House Beers",
                "Garlic Parmesan Fries",
                "Truffle Mac & Cheese"
            ],
            "7": [
                "Crispy Brussel Sprouts",
                "Social Wings"
            ],
            "9": [
                "Arancini Risotto Balls"
            ],
            "10": [
                "Cauliflower Tempura Bites"
            ]
        },
        imageUrl: "https://s3-media4.fl.yelpcdn.com/bphoto/qN4CxT-Byt0pWzDpM-gq6Q/o.jpg"
    })
    const barvale = new Business({
        name: "barvale",
        address: "661 Divisadero, San Francisco, CA 94117",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.438298, 37.775751],
        startTime: "15:30",
        endTime: "18:30",
        menu: {
            "6": [
                "Drinks On Tap",
                "Tapas"
            ]
        },
        imageUrl: "https://s3-media3.fl.yelpcdn.com/bphoto/-RHUp5OxbSgRqs4BJvqQ6g/o.jpg"
    })
    const ChaChaCha = new Business({
        name: "Cha Cha Cha",
        address: "1801 Haight St. San Francisco, CA 94117",
        days: ["Mon", "Tues", "Weds", "Thurs"],
        longLat: [-122.452030, 37.769120],
        startTime: "16:30",
        endTime: "19:30",
        menu: {
            "4": [
                "Draft Beer"
            ],
            "6": [
                "Fried New Potatoes",
                "Sangria Glass"
            ],
            "8": [
                "Fried Calamari"
            ], 
            "9": [
                "BBQ, Chicken, or Pork Quesadilla",
                "Marinated Chicken Wings"
            ],
            "16": [
                "Sangria 1/2 Pitcher"
            ],
            "28": [
                "Sangria Pitcher"
            ]
        },
        imageUrl: "https://s3-media3.fl.yelpcdn.com/bphoto/PhQlJyK4_SCoRs4P7-6vzQ/o.jpg"
    })
    const TheBlarneyStone = new Business({
        name: "The Blarney Stone",
        address: "5625 Geary Blvd. San Francisco, CA 94121",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.479980, 37.780000],
        startTime: "14:00",
        endTime: "19:00",
        menu: {
            "3": [
                "High Life"
            ],
            "4": [
                "Well Drinks"
            ],
            "8": [
                "Fried Calamari"
            ],
            "5": [
                "Domestic Drafts"
            ],
            "8": [
                "Jack Daniels",
                "Single Barrel"
            ]
        },
        imageUrl: "https://s3-media2.fl.yelpcdn.com/bphoto/woFrzcjmI7vBI3smuW1yog/o.jpg"
    })
    const TheHearth = new Business({
        name: "The Hearth",
        address: "5625 Geary Blvd, San Francisco, CA 94121",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.476180, 37.780550],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "5": [
                "Jagers",
                "Jameson",
                "1800 Silver"
            ]
        },
        imageUrl: "https://s3-media3.fl.yelpcdn.com/bphoto/J6khLpqfAF_-USZUZU7Muw/o.jpg"
    })
    const Lusk = new Business({
        name: "25 Lusk",
        address: "25 Lusk St, San Francisco, CA 9410",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        longLat: [-122.394323, 37.778429],
        startTime: "17:00",
        endTime: "19:00",
        menu: {
            "4": [
                "Select Beer"
            ],
            "5": [
                "Select Wine"
            ],
            "6": [
                "Well Drinks"
            ]
        },
        imageUrl: "https://assets3.thrillist.com/v1/image/1887078/size/tl-horizontal_main_2x.jpg"
    })
    const BarCrudo = new Business({
        name: "Bar Crudo",
        address: "1501, 655 Divisadero St, San Francisco, CA 94117",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
        longLat: [-122.438240, 37.776852],
        startTime: "17:00",
        endTime: "18:30",
        menu: {
            "1": [
                "Oysters",
                "Herb and Jalapeño Marinated Mussels"
            ],
            "4": [
                "Beer"
            ],
            "6": [
                "Wine",
                "Seafood Chowder"
            ]
        },
        imageUrl: "https://d37219swed47g7.cloudfront.net/media/images/reviews/bar-crudo/banners/1512399791.15.jpg"
    })
    const Rooh = new Business({
        name: "Rooh",
        address: "333 Brannan St, San Francisco, CA 94107",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.392365, 37.780880],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "5": [
                "Beer"
            ],
            "8": [
                "Wine"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/g_yjNkAzGRZUmszGGmbvUIN3dPg=/0x0:2000x1333/1570x1178/filters:focal(840x506:1160x826):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62460440/ROOH_PChang_5289.0.0.0.0.jpg"
    })
    const Starbelly = new Business({
        name: "Starbelly",
        address: "3583 16th St, San Francisco, CA 94114",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sun"],
        longLat: [-122.432563, 37.764140],
        startTime: "15:30",
        endTime: "18:00",
        menu: {
            "6": [
                "Salumi Plate",
                "Cheese Plate",
                "Liver Plate"
            ],
            "8": [
                "Honey Basil Fried Chicken Wings"
            ],
            "7": [
                "Manhattan",
                "Patio Punch",
                "Shot",
                "1/2 Beer"
            ],
            "20": [
                "Full Meal",
                "Burger",
                "Fries",
                "Happy Hour Cocktail"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/pkgJxPWu_kFsJeNeLMCve9LPbww=/0x0:2736x1824/1570x1178/filters:focal(1150x694:1586x1130):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62460446/Disco_Nap_2.0.0.jpg"
    })
    const TikiHaven = new Business({
        name: "Tiki Haven",
        address: "1334 Noriega St, San Francisco, CA 94122",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.478184, 37.754295],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "9": [
                "Tiki Cocktails",
                "Classics"
            ],
            "18": [
                "Fire Bowl"
            ]
        },
        imageUrl: "http://tikihavensf.com/wordpress/wp-content/uploads/2014/08/1.jpg"
    })
    const BlackCat = new Business({
        name: "Black Cat",
        address: "400 Eddy St, San Francisco, CA 94109",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.414413, 37.783787],
        startTime: "17:30",
        endTime: "19:00",
        menu: {
            "2": [
                "Oysters"
            ],
            "5": [
                "Duck Fat Fries"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/7kVdN0e6vdPgW1qZKWbsigAzteU=/0x0:2000x1600/1620x1215/filters:focal(840x640:1160x960):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62460435/BlackCat_PChang-1772.0.0.0.jpg"
    })
    const PetitMarlowe = new Business({
        name: "Petit Marlowe",
        address: "234 Townsend St, San Francisco, CA 94107",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        longLat: [-122.393753, 37.778176],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "25": [
                "Bottles of Rose"
            ]
        },
        imageUrl: "https://cdn.vox-cdn.com/thumbor/SdmaOxRtwQYz_kE_BNfNpO3brZ8=/0x0:3285x2190/1620x1215/filters:focal(1380x833:1904x1357):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62460439/Petit_Marlowe___by_Aubrie_Pick.0.0.jpg"
    })
    const PalmHouse = new Business({
        name: "Palm House",
        address: "2032 Union St.",
        days: ["Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.432485, 37.797555],
        startTime: "17:00",
        endTime: "18:30",
        menu: {
            "4": [
                "Fries"
            ],
            "5": [
                "Sweet Potato Fries",
                "Beers"
            ],
            "6": [
                "Guacamole",
                "Slushies"
            ],
            "7": [
                "Select Cocktails"
            ]
        },
        imageUrl: "https://infatuation.imgix.net/media/images/reviews/palm-house/banners/1531494089.36.jpg?auto=format&h=840&w=1336"
    })
    const ElTechodeLolinda = new Business({
        name: "El Techo de Lolinda",
        address: "2516 Mission St, San Francisco, CA 94110",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.419281, 37.756618],
        startTime: "16:00",
        endTime: "18:00",
        menu: {
            "4": [
                "Beers"
            ],
            "5": [
                "Guacamole",
                "Empanadas"
            ],
            "7": [
                "Margaritas"
            ],
            "11": [
                "Rose Flight"
            ]
        },
        imageUrl: "https://s3-media4.fl.yelpcdn.com/bphoto/YZZvDAXqRriZ4eWS6KIg1g/o.jpg"
    })
    const ICHISushi = new Business({
        name: "ICHI Sushi",
        address: "3369 Mission St, San Francisco, CA 94110",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
        longLat: [-122.421598, 37.742717],
        startTime: "17:30",
        endTime: "19:00",
        menu: {
            "3": [
                "Skewers"
            ],
            "4": [
                "Sapporo"
            ],
            "6": [
                "Snacks",
                "Sake",
                "Wine"
            ]
        },
        imageUrl: "https://infatuation.imgix.net/media/images/reviews/ichi-sushi-ni-bar/banners/1491346528.87.jpg?auto=format&h=840&w=1336"
    })
    const ParkChalet = new Business({
        name: "Park Chalet",
        address: "1000 Great Hwy, San Francisco, CA 94121",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.510222, 37.769750],
        startTime: "15:00",
        endTime: "18:00",
        menu: {
            "4": [
                "Pints of Ale"
            ],
            "7": [
                "Cocktails"
            ],
            "7": [
                "Crispy Fried Chicken Wings",
                "Calamari"
            ],
            "10": [
                "Burger-and-a-Beer"
            ]
        },
        imageUrl: "https://25va3qc1hw-flywheel.netdna-ssl.com/wp-content/uploads/2011/03/park_chalet.jpg"
    })
    const Serpentine = new Business({
        name: "Serpentine",
        address: "2495 3rd Street, San Francisco, CA 94107",
        days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        longLat: [-122.388158, 37.758059],
        startTime: "17:00",
        endTime: "19:00",
        menu: {
            "5": [
                "Beer",
                "Wine",
                "2495 Sour",
                "Whiskey Smash",
                "Beso de Bruja"
            ]
        },
        imageUrl: "https://static1.squarespace.com/static/5987e4cf8419c22ddf34724e/5ab41191575d1f0b79ae5ccc/5ab44b52575d1f48a5ac6237/1539789241449/slide1.jpg"
    })
    HarperAndRye.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Maybecks.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    EZ5.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TheOffice.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    NativesBar.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Laureate.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ScarletLounge.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    LastCallBar.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ThePinkElephantAlibi.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    LastDropTavern.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    FiresideBar.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Belga.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ComstockSaloon.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    FifthArrow.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    PiriPica.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TheSaratoga.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ThePigAndWhistle.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ScopoDivino.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    SocialKitchenAndBrewery.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    barvale.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ChaChaCha.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TheBlarneyStone.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TheHearth.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Lusk.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    BarCrudo.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Rooh.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Starbelly.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    TikiHaven.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    BlackCat.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    PetitMarlowe.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    PalmHouse.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ElTechodeLolinda.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ICHISushi.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    Serpentine.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
    ParkChalet.save().then(() => console.log("It worked!")).catch(() => console.log("It failed!"));
}

go();
