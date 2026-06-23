import { error, type HttpError } from "@sveltejs/kit";
export async function load({params}) {
    const filename:string = params.post
    const lang = params.lang ?? "pt"
    try {
        const post = await import(`$lib/posts/${lang}/${filename}.md`)
        return {content: post.default}
    } catch {
        const reverse_lang = (lang == "pt") ? "eng":"pt"
        try {
            await import(`$lib/posts/${reverse_lang}/${filename}.md`)
            throw error(501)
        } catch (e) {
            if ((e as HttpError).status === 501) throw e;
            throw error(404)
        }
    }
}