import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a web developer with a strong background in JavaScript, C#, Node.js, .NET, Vue.js, React, Nuxt.js, and Next.js. My expertise lies in creating visually appealing and functional websites and applications. I stay updated with the latest technologies and best practices to ensure I deliver scalable and efficient solutions. With a keen eye for detail and strong problem-solving skills, I bring a collaborative approach to every project I work on. I'm passionate about creating engaging web experiences and thrive in the dynamic world of web development.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}