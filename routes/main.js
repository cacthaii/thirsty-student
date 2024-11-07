// Create a new router
const express = require("express");
const router = express.Router();

// Data Definitions
var shopData = {shopName: "Matcha Pichu",
                productCategories:["Beer", "Wine", "Spirits", "Hot Drinks", "Soft Drinks"],
                shopLocations:["Brixton", "Hackney", "Shoreditch", "Stratford"]};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

// Search page
router.get('/search_result', function (req, res) {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// Registration Page
router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
// On successful registry display the following
router.post("/registered", (req,res) => { 
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will now send an email to '+ req.body.email +'. Please check your inbox shortly. ');   
});


// Other pages
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
});

router.get("/locations", (req, res) => {
    res.render("locations.ejs", shopData)
});

// Export the router object so index.js can access it
module.exports = router;
