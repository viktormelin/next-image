import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next Images</title>
				<meta name='description' content='Next Images, or something..' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.login}>
				<p>Login</p>
			</div>
		</div>
	);
};

export default Home;
