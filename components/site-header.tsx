import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-8">
        <a href="/" aria-label="Decorarts Eventos - Página inicial">
          <Image
            src="/images/logo-decorarts.png"
            alt="Decorarts Eventos"
            width={260}
            height={110}
            priority
            className="h-auto w-52 md:w-64"
          />
        </a>
      </div>
    </header>
  )
}
