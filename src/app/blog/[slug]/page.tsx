type BlogPostPageType = {
    params: {
        slug: string;
    }
}

export default function BlogPostPage({params}: BlogPostPageType) {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
        </main>
    )
}