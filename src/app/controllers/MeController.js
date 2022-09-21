const Course = require('../models/course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../until/mongoose');
class MeController {
    //[GET] me/store/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
