import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { VoltikButton } from '@/components/ui/voltik-button'
import { Link } from 'react-router-dom';
import blogPosts, { BlogPost } from '@/features/blog/data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  useEffect(() => {
  document.title = 'Voltik · Blog de electricidad';
  return () => {
    // Opcional: restablece el título por defecto al abandonar la página
    document.title = 'Voltik · Instaladores eléctricos en Córdoba';
  };
}, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="voltik-section hero-bg">
          <div className="voltik-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog de electricidad Voltik
            </h1>
            <p className="lead">
              Consejos, guías y noticias sobre instalaciones eléctricas, placas solares, domótica y mucho más.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-muted/30">
          <div className="voltik-container">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary min-w-[200px]"
                >
                  <option value="all">Todas las categorías</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Results count */}
              <p className="text-sm text-muted-foreground mb-8">
                {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="voltik-section pt-5 pb-5">
            <div className="voltik-container">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Artículos destacados
              </h2>
              
              <div className="voltik-grid-2 mb-16">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="voltik-card group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        Destacado
                      </span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`} className="block hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <VoltikButton variant="outline" size="sm" className="group" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Leer más
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </VoltikButton>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <section className="voltik-section bg-muted/30 pt-5 pb-5">
            <div className="voltik-container">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Todos los artículos
              </h2>
              
              <div className="voltik-grid-3">
                {regularPosts.map((post) => (
                  <article key={post.id} className="voltik-card group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`} className="block hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4 flex-wrap">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-xs text-muted-foreground">+{post.tags.length - 2}</span>
                      )}
                    </div>
                    
                    <VoltikButton variant="ghost" size="sm" className="w-full group justify-between" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Leer artículo
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </VoltikButton>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <section className="voltik-section">
            <div className="voltik-container text-center">
              <div className="max-w-md mx-auto">
                <Search size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-4">No se encontraron artículos</h3>
                <p className="text-muted-foreground mb-6">
                  Intenta con otros términos de búsqueda o explora todas las categorías.
                </p>
                <VoltikButton 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                >
                  Ver todos los artículos
                </VoltikButton>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="voltik-section bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="voltik-container text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Te ha resultado útil?
              </h3>
              <p className="lead mb-8">
                Si necesitas asesoramiento personalizado sobre tu instalación eléctrica, 
                no dudes en contactarnos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <VoltikButton variant="voltik" size="lg" asChild>
                  <a href="/#contacto">Consulta gratuita</a>
                </VoltikButton>
                {/*
                <VoltikButton variant="outline" size="lg" asChild>
                  <a href="https://wa.me/34957000000" target="_blank" rel="noopener noreferrer">
                    WhatsApp directo
                  </a>
                </VoltikButton>
                */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Blog
