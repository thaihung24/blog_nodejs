class NewsController {
    //[GET] news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('Show detail news');
    }
}

module.exports = new NewsController();
