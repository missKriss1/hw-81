import express from "express";

const linksRouter = express.Router();

import Link from "../modules/Link";
import {ILinkWithoutId} from "../types";

linksRouter.get('/:shortUrl', async (req, res, next) => {
    if(!req.params.shortUrl){
        res.status(404).send("fill in the field ShortUrl");
    }
    try{
        const link = await Link.findOne({shortUrl: req.params.shortUrl});
        if(link){
            return res.status(301).redirect(link.originalUrl);
        }else{
            res.status(404).send("Not Found");
        }
    }catch(e){
        next(e)
    }
})

linksRouter.post('/', async (req, res, next) => {

    const newLink : ILinkWithoutId = {
        originalUrl: req.body.originalUrl,
        shortUrl: crypto.randomUUID().substring(0,6)
    }
    try{
        const link = new Link(newLink);
        await link.save();
        res.send(link);
    }catch(e){
        next(e);
    }
})

export default linksRouter;