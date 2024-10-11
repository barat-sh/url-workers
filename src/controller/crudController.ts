import { Hono } from "hono";
import { createShortUrl, getShortUrl } from "../service/crudService";

export type Bindings = {
    KV: KVNamespace
}

const crudRoute = new Hono<{ Bindings: Bindings }>();

crudRoute.post("/shorturl", createShortUrl);
crudRoute.get("/shorturl/:id", getShortUrl);

export default crudRoute;