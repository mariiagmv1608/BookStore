import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        imageUrl: {
            type:String,
            required: true
        },
        feedbacks: {
            type: [
                {
                    feedbackText: String,
                    estimate: {
                        type: Number,
                        min: 0,
                        max:5
                    }
                }
            ],
            default:[]
        }
    }
);

export default mongoose.model('book', BookSchema);