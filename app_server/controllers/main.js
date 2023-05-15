/* GET homepage*/
const index = (req, res) => {
    res.render('index', {title: 'Travls Getaways'});
};
module.exports = {
    index
};