import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="mt-16 w-full border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between">
        <Image
          src="/images/logo-decorarts.png"
          alt="Decorarts Eventos"
          width={200}
          height={84}
          className="h-auto w-40"
        />
        <p className="text-sm text-brand-muted">
          criado por:{' '}
          <a
            href="https://api.whatsapp.com/send/?phone=5511983023617"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red hover:underline"
          >
            ArtSanches Design
          </a>
        </p>
      </div>
    </footer>
  )
}
