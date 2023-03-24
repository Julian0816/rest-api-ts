import { Request, Response, Router } from "express"

const router = Router()

router.get('/test', (req:Request, res:Response) => {
    res.send({ data: 'App running and tested'})
})

export { router }