import Image from 'next/image'
import { Heart } from 'lucide-react'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-card">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label="Adicionar aos favoritos"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-brand-muted shadow-sm transition-colors hover:text-brand-red"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm leading-snug text-foreground line-clamp-2">
          {product.title}
        </h3>

        <div className="mt-1 flex flex-col gap-1">
          {product.oldPrice && (
            <span className="text-xs text-brand-muted line-through">
              {product.oldPrice}
            </span>
          )}

          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-2xl font-medium text-foreground">
              {product.price}
            </span>
            {product.pixDiscount && (
              <span className="text-sm font-medium text-brand-green">
                {product.pixDiscount}
              </span>
            )}
          </div>

          <p className="text-sm text-brand-muted">
            {product.installments}{' '}
            {product.altInstallments && (
              <span className="text-brand-green">{product.altInstallments}</span>
            )}
          </p>

          {product.creditBadge && (
            <span className="mt-1 w-fit rounded bg-brand-navy/10 px-1.5 py-0.5 text-xs text-brand-navy">
              {product.creditBadge}
            </span>
          )}

          {product.freeShipping && (
            <span className="mt-1 text-sm font-medium text-brand-green">
              Frete grátis
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
