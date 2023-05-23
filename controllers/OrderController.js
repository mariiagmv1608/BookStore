import OrderModel from '../models/Order.js';

export const createOrder = async (req, res) => {
    try {
        const doc = new OrderModel({
            user: req.userId,
            sum: req.body.sum
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create an order',
        });
    }
};

export const getOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await OrderModel.findOne(
            {
                _id: orderId
            }).populate('user')
        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to get the order',
        });
    }
};