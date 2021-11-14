import Url from "../models/url.js"
import shortid from "shortid"

export const postUrl = async(req, res) => {
    const url = req.body
    // console.log(url)
    
    try{
        const existedUrl = await Url.findOne({originalURL : url.originalURL})
        if(existedUrl){
            return res.json(existedUrl)
        } else{
            const hashURL = shortid.generate()
            const shortURL = `http://localhost:3900/${hashURL}`
            url.shortURL = shortURL
            url.hashURL = hashURL
            const urlData = new Url(url)
            // console.log(urlData)
            const result = await urlData.save()
            return res.json(result)
        }
    } catch(err){
        // console.log(err)
        return res.json(err)
    }

}

export const getUrl = async(req, res) => {
    const id = req.params.id
    try{
        const result = await Url.findOne({hashURL : id})
        result.count++
        result.save()
        console.log(result)
        return res.redirect(result.originalURL)
    } catch(err){
        return res.json(err)
    }
}