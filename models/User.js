const mongoose = require('mongoose');

/** database schema for user account */
const UserSchema = new mongoose.Schema({
    local : {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    Google : {
        googleId: {
            type: String,
        },
        displayName: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;