/* cocô de IA aqui em baixo :(
 se voce tentar rescrever, ou só tentar ler esse codigo, e não conseguir
 aumente esse contador
 tempo_disperdiçado:1.5h

 odeio o escrever codigo de lado do servidor quando se usa svelte kit 😣
*/
export async function load() {
    // 'eager' means: "Get the data NOW, don't make me wait"
    const files = import.meta.glob('$lib/posts/*.md', { eager: true });

    // Extract just the titles and the link (slug)
    const posts = Object.entries(files).map(([path, file]) => {
        const slug = path.split('/').pop()?.replace('.md', '');
const metadata = (file as { metadata: { title: string } }).metadata;
        return {
            title: metadata.title,
            slug: slug
        };
    });

    return { posts };
}