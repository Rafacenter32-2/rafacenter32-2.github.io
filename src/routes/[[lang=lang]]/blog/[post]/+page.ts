export async function load({params}) {
    const filename:string = params.post
    const lang = params.lang ?? "pt"
    const post = await import(`$lib/posts/${lang}/${filename}.md`)
    
    return {content: post.default}
}