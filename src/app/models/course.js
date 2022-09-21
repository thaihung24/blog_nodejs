const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
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

module.exports = mongoose.model('Course', Course);
