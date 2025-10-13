import { useParams } from 'react-router-dom';
import blogPosts, { BlogPost } from '@/features/blog/data/blogPosts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { VoltikButton } from '@/components/ui/voltik-button';
import { useEffect } from 'react';
import Seo from '@/app/seo/Seo'


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
      <Seo
        title={`${post.title} · Voltik · Servicios de eficiencia energética`}
        description={post.excerpt}
        image={post.image}
        type="article"
        articlePublishedTime={new Date(post.date).toISOString()}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: new Date(post.date).toISOString(),
          author: {
            '@type': 'Organization',
            name: 'Voltik · Servicios de eficiencia energética',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Voltik · Servicios de eficiencia energética',
            logo: {
              '@type': 'ImageObject',
              url: '/voltik-logo-web.svg',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://voltik.es',
          },
        }}
      />
      <Header />
      {/* Añade un contenedor con padding top igual al de otras páginas */}
      <main className="pt-16 md:pt-20">

        {/* Hero o cabecera del artículo */}
        <section className="voltik-section hero-bg">
          <div className="voltik-container text-center max-w-5xl">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">{post.subtitle}</p>
            <p className="text-sm text-muted-foreground">
              {post.date} • {post.readTime} • {Array.isArray(post.category) ? post.category.join(' • ') : post.category}
            </p>
          </div>
        </section>

        {/* Imagen del artículo */}
        <section className="py-8">
          <div className="voltik-container max-w-5xl mx-auto">
            <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Contenido del artículo */}
        <section className="voltik-section">
          <div className="voltik-container max-w-3xl mx-auto prose prose-neutral">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* CTA adaptado */}
            <div className="mt-8 flex justify-center">
              <VoltikButton variant="voltik" size="lg" className="w-full sm:w-auto h-auto py-3 sm:py-4 px-4 sm:px-6 whitespace-normal break-words text-center text-base sm:text-lg" 
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
