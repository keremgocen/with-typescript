import Link from 'next/link'
import Layout from '../components/Layout'
import SignIn from './signin'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <SignIn />
  </Layout>
)

export default IndexPage
