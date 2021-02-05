import Head from 'next/head'
import Link from 'next/link'

const name = 'Csaba Verebélyi'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto font-mono w-3/6">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="text-center">
        {home ? (
          <>
            <img
              className="rounded-full h-24 w-24 m-5 inline-block"
              src="/images/profile.jpg"
              alt={name}
            />
            <h1 className="text-4xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img className="rounded-full h-24 w-24 m-5 inline-block" src="/images/profile.jpg" alt={name} />
              </a>
            </Link>
            <h2 className="text-2xl">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-10">
          <Link href="/">
            <a className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
