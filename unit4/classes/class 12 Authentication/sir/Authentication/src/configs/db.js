const mongoose = require("mongoose");

// module.exports = () => {
//     return mongoose.connect("mongodb+srv://nihal1234:nihal1234@nihalcluster.p9poj.mongodb.net/web15?retryWrites=true&w=majority");
// };

module.exports = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/");
};


// module.exports = () => {
//     return mongoose.connect("mongodb+srv://deepak123:13549Aa@cluster0.aqkfd.mongodb.net/web15?retryWrites=true&w=majority");
// };








// mongodb+srv://<username>:<password>@cluster0.zpm0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority