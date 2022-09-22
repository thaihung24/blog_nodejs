const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, minLength: 1, requires: true },
        description: { type: String, minLength: 1, maxLength: 255 },
        img: { type: String, minLength: 1, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, minLength: 1, maxLength: 255, requires: true },
        level: { type: String, minLength: 1, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deleteAt: true,
});

module.exports = mongoose.model('Course', Course);
