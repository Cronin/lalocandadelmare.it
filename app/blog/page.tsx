import { siteConfig } from '@/site.config';
import type { Metadata } from 'next';
import { blogPosts } from './[slug]/page';

export const metadata: Metadata = {
  title: 'Blog e Guide | Consigli sull\'Elettricità',
  description: 'Guide pratiche, consigli e informazioni utili sugli impianti elettrici, la sicurezza elettrica e le novità del settore a Padova.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="mb-8">
            <a href="/" className="text-blue-200 hover:text-white">← Torna alla Home</a>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog e Guide</h1>
          <p className="text-xl text-blue-100">
            Consigli pratici e informazioni utili sugli impianti elettrici
          </p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('it-IT')}</span>
                    <a href={`/blog/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-800">
                      Leggi →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hai Bisogno di un Elettricista?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Chiamaci ora per un intervento rapido o un preventivo gratuito
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-full text-xl transition-all duration-200 shadow-xl transform hover:scale-105"
          >
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
