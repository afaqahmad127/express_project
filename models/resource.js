// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// connect to database
let mongoUrl = 'mongodb+srv://moiz1234:moiz1234@cluster0.mcqbb.mongodb.net/resourcesdb';
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Create Model
const Schema = mongoose.Schema;

const Resourses = new Schema({
    name: {
        type: String
    },
    fileinfo: {
        type: String
    },
    delivery: {
        type: String

    },
    set_name: {
        type: String
    },
    bid_strategy: {
        type: String
    },
    budget: {
        type: String
    },
    results: {
        type: String
    },
    impressions: {
        type: String
    },
    cost_per_result: {
        type: String
    }, add_to_cart: {
        type: String
    },
    purchases: {
        type: String
    }, amount_spent: {
        type: String
    },
    purchase_con_val: {
        type: String
    },
    purchase_roas: {
        type: String
    },
    unique_link_click: {
        type: String
    },
    cpc: {
        type: String
    },
    company_name: {
        type: String
    },
    ship_date: {
        type: String
    },
    status: {
        type: String
    },

    type: {
        type: String
    },

});
// Export Model
Resourses.plugin(passportLocalMongoose);

module.exports = mongoose.model('resourcestable', Resourses);
