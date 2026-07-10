import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDirectory = path.join(root, "src/css/generated")

const sharedFiles = [
    "src/css/index.css",
    "src/css/App.css",
    "src/css/Navbar.css",
    "src/css/Footer.css",
]

const homeFiles = [
    ...sharedFiles,
    "src/css/home/base.css",
    "src/css/home/about.css",
    "src/css/home/statistics.css",
    "src/css/home/services.css",
    "src/css/home/advantages.css",
    "src/css/home/process-video.css",
    "src/css/home/projects.css",
    "src/css/home/video-testimonials.css",
    "src/css/home/construction-process.css",
    "src/css/home/assurance.css",
    "src/css/home/team.css",
    "src/css/home/contact.css",
    "src/css/home/responsive.css",
]

const serviceFiles = [
    ...sharedFiles,
    "src/css/pages/InnerPage.css",
    "src/css/home/process-video.css",
    "src/css/home/contact.css",
    "src/css/home/responsive.css",
]

async function createBundle(outputName, files) {
    const sections = await Promise.all(
        files.map(async (file) => {
            const css = await readFile(path.join(root, file), "utf8")
            return `/* ${file} */\n${css.trim()}\n`
        }),
    )

    await writeFile(path.join(outputDirectory, outputName), sections.join("\n"), "utf8")
}

await mkdir(outputDirectory, { recursive: true })
await Promise.all([
    createBundle("home.css", homeFiles),
    createBundle("services.css", serviceFiles),
])
