const { Schema, model } = require('mongoose');

const bookSchema = new Schema ({
    title: {
        type: String,
        required: [true, "Set title for book"],
        unique: true,
        minLength: 1,
        maxLength: 20,
    },
    image: {
        type: File || String,
        default: "https://sciendo.com/product-not-found.png",
    },
    author: {
        type: String,
        default: "Unknown author",
    },
    date: {
        type: String,
        default: "No date"
    },
    description: {
        type: String,
        minLength: 20,
        maxLength: 255,
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
    },
    language: {
        type: String,
        required: true,
        enum: ["English", "Ukrainian"],
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('book', bookSchema);