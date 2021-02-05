import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="font-bold text-2xl">[Web Developer]</p>
        <p>
          (This site is made by {' '}<a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>

      <section>
        <h2 className="text-2xl">Blog</h2>
        <ul className="list-disc">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-green-600">
                <Date dateString={date} />
              </small>
            </li>
          
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
