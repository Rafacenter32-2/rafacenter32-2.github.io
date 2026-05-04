export async function load({params}) {
    const filename:string = params.post
    const post = await import(`$lib/posts/${filename}.md`)
    return {content: post.default}
}