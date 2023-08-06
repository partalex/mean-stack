import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let News = new Schema({
    id: {
        type: Number
    },
    caption: {
        type: String
    },
    comments: {
        type: Array
        //type: [{text: String}]
    }
})

export default mongoose.model("NewsModel", News, 'news')