import { Hono } from 'hono'

import crudRoute from './controller/crudController'
import { Bindings } from 'hono/types';
import { cors } from 'hono/cors';

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
}));

app.route("/api/v1", crudRoute);

app.get("/", (c) => {
    return c.json({message: "URL workers"})
})

export default app