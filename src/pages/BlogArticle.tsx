import { useParams } from 'react-router-dom';
import blogPosts, { BlogPost } from '@/data/blogPosts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { VoltikButton } from '@/components/ui/voltik-button';
import { useEffect } from 'react';


const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id) as BlogPost | undefined;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    // si no encuentra el post, renderiza tu componente NotFound
    return <div>Artículo no encontrado.</div>;
  }

  return (
    <>
      <Header />
      {/* Añade un contenedor con padding top igual al de otras páginas */}
      <main className="pt-16 md:pt-20">

        {/* Hero o cabecera del artículo */}
        <section className="voltik-section hero-bg">
          <div className="voltik-container text-center">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">{post.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">{post.subtitle}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {post.date} • {post.readTime} • {post.category}
            </p>
          </div>
        </section>

        {/* Contenido del artículo */}
        <section className="voltik-section">
          <div className="voltik-container max-w-3xl mx-auto prose prose-neutral">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* CTA adaptado */}
            <div className="mt-8 flex justify-center">
              <VoltikButton
                variant="voltik"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a href={post.ctaLink} className="no-underline">
                  {post.ctaLabel}
                </a>
              </VoltikButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticle;