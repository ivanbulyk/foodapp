import Head from 'next/head'
import Image from 'next/image'
import { Featured } from '../components/Featured'
import { ProductList } from '../components/ProductList'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Delivery App</title>
        <meta name="description" content="Motivated by www.eliftech.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Featured />
        <ProductList productList={productList}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products")
  return {
      props: {
          productList: res.data
      }
  }
}