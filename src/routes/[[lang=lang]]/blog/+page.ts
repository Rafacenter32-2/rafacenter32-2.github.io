/* eslint-disable @typescript-eslint/no-explicit-any */
/* cocô de IA aqui em baixo :(
 se voce tentar rescrever, ou só tentar ler esse codigo, e não conseguir
 aumente esse contador
 tempo_disperdiçado:1h 45min

 odeio o escrever codigo de lado do servidor quando se usa svelte kit 😣
*/
export async function load() {
    // 'eager' means: "Get the data NOW, don't make me wait"
    const files = import.meta.glob('$lib/posts/*.md', { eager: true });
    const rawfiles = import.meta.glob('$lib/posts/*.md', { query: '?raw',eager: true });
    // Extract just the titles and the link (slug)
    const posts = Object.entries(files).map(([path, file]) => {
        const dirtyplain = (rawfiles[path] as any).default
        const plain = dirtyplain
        .replace(/^---[\s\S]*?---/, '')
        .replace(/^---$/gm, '')
        .replace(/!\[.*\]\(.*\)/g, '')
        .replace(/\[(.*)\]\(.*\)/g, '$1')
        .replace(/[*_~`#]/g, '')
        .replace(/>+/g, '')
        .replace(/\n+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
        const preview = plain.length > 160 ? `${plain.substring(0,15)}...` : plain
        const slug = path.split('/').pop()?.replace('.md', '');
const metadata = (file as { metadata: { title: string, img:string } }).metadata;
        return {
            title: metadata.title,
            img:metadata.img,
            slug: slug,
            preview: preview
        };
    });

    return { posts };
}