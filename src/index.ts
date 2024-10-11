import { Hono } from 'hono'

import crudRoute from './controller/crudController'
import { Bindings } from 'hono/types';

const app = new Hono<{ Bindings: Bindings }>()

app.route("/api/v1", crudRoute);

app.get("/", (c) => {
    return c.json({message: "URL workers"})
})

export default app