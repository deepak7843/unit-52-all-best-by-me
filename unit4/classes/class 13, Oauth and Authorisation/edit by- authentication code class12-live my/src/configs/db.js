const mongoose= require ("mongoose")

// module.exports = () => {
//     return mongoose.connect("mongodb://127.0.0.1:27017/deepak")
// }


module.exports = () => {
    return mongoose.connect("mongodb+srv://new:new@cluster0.tgwg5.mongodb.net/new?retryWrites=true&w=majority");
};