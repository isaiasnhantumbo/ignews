import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Julho de 2021</time>
            <strong>Creating one awesome post with prismic</strong>
            <p>Prismisc is a great way to create a post with your jamStacks.</p>
          </a>
          <a>
            <time>12 de Julho de 2021</time>
            <strong>Creating one awesome post with prismic</strong>
            <p>Prismisc is a great way to create a post with your jamStacks.</p>
          </a>
          <a>
            <time>12 de Julho de 2021</time>
            <strong>Creating one awesome post with prismic</strong>
            <p>Prismisc is a great way to create a post with your jamStacks.</p>
          </a>
        </div>
      </main>
    </>
  );
}
