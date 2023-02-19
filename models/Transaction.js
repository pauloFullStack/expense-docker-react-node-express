const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Por favor, adicione algum texto']
    },
    amount: {
        type: Number,
        required: [true, 'Adicione um número positivo ou negativo']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Transaction', TransactionSchema);