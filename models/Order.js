import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        sum: {
            type: Number,
            required: true,
        }
    }
);

export default mongoose.model('order', OrderSchema);