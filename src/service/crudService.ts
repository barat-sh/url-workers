import { env } from "hono/adapter";
import { generateShortUrl } from "../store/shortUrlAlgo";

export const createShortUrl = async (c: any) => {
    const {longURL} = await c.req.json();

    const shortURLId = generateShortUrl()
    try{
        console.log(c.env.MY_KV_NAMESPACE)
        await c.env.MY_KV_NAMESPACE.put(shortURLId, longURL)
    }catch(err){
        return c.json({message: "Error while Shortening...", err})
    }
    return c.json({longURLlongUrl: longURL, shortURL: `https://barat.tech/${shortURLId}`})
    ;
}

export const getShortUrl = async (c:any) => {
    const id = c.req.param('id');
    console.log(id)
    try{
        const longURL = await c.env.MY_KV_NAMESPACE.get(id);
        return c.json({longURL: longURL})
    }catch(err){
        c.json({message: "Error while getting long Url", err})
        return c.status(404)
    }
}