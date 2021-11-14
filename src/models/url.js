import mongoose from 'mongoose'

const urlSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    originalURL : {
        type : String,
        required : true
    },
    shortURL : {
        type : String,
        required :true
    },
    hashURL : {
        type : String,
        required : true
    },
    count : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : String,
        default : new Date().toLocaleString()
    }
})

const Url = mongoose.model('Url', urlSchema)

export default Url