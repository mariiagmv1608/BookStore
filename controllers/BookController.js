import BookModel from '../models/Book.js';

export const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.find().exec();
        res.json(books);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to get books',
        });
    }
};

export const getOneBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await BookModel.findOne(
            {
                _id: bookId
            })
        res.json(book);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to get the book',
        });
    }
};

export const addFeedback = async (req, res) => {
        try {
            const bookId = req.params.id;

            await BookModel.updateOne(
                {
                    _id: bookId,
                },
                {
                    $push: { "feedbacks": {
                            feedbackText: req.body.feedbackText,
                            estimate: req.body.estimate,
                        } }
                }
            );
            res.json({
                success: true,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Failed to add a feedback',
            });
        }
    }

export const createBook = async (req, res) => {
    try {
        const doc = new BookModel({
            title: req.body.title,
            price: req.body.price,
            author:req.body.author,
            genre:req.body.genre,
            info: req.body.info,
            imageUrl: req.body.imageUrl,
            feedbacks: req.body.feedbacks
        });

        const book = await doc.save();

        res.json(book);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create a book',
        });
    }
};