import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main id="content" className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="sr-only">
            Decorarts Eventos - Decoração em tecido tensionado
          </h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}
