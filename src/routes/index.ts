import { Router } from "express";
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 * Funcion que devuelve el nombre del archivo sin la extension
 * @param fileName 
 * @returns 
 */
const cleanFileName = (fileName: string) => {
    return fileName.split('.').shift()
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    if (fileName != "index.ts") {
        const file = cleanFileName(fileName)
        import(`./${file}`).then((moduleRouter) => {
            console.log("🚀 ~ file: index.ts:22 ~ import ~ file:", file)
            router.use(`/${file}`, moduleRouter.router)
        })
    }
})


export { router };