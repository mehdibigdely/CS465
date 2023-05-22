/* GET homepage*/
const index = (req, res) => {
    res.render('index', {title: 'Travls Getaways *** T'});
};
module.exports = {
    index
};