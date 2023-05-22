// var fs = require('fs');

// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// /* GET travel view */
// const travel = (req, res) => {
//     res.render('travel', { title: 'Travlr Getaways', trips });
//    };

//    module.exports = {
//     travel
//    };

var fs = require('fs');
var newsInfo = JSON.parse(fs.readFileSync('./data/newsInfo.json',
'utf8'));

const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways news' });
   };
   module.exports = {
    news
   };