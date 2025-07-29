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
          {/* si usas markup plano, reemplaza dangerouslySetInnerHTML por componentes propios */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>

      {/* CTA al final del artículo */}
      <section className="voltik-section">
        <div className="voltik-container text-center">
          <VoltikButton variant="voltik" size="lg" asChild>
            <a href={post.ctaLink}>{post.ctaLabel}</a>
          </VoltikButton>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogArticle;