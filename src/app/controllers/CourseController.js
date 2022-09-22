const Course = require('../models/course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../until/mongoose');
class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        // console.log("slug",req.params.slug)
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);

        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[Put] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //[Delete] /course/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
