import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return <Layout >
      <Link href='/chart'>Chart</Link>
      <Link href='/form'>Form</Link>
      <Link href='/table'>Table</Link>
    </Layout>
}
