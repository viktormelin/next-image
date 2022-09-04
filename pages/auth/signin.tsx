import { GetServerSideProps } from 'next';
import { getProviders, signIn, useSession, getSession } from 'next-auth/react';
import Router from 'next/router';
import styles from '../../styles/Signin.module.css';

const signin = ({ providers }: any) => {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <p>Loading user..</p>;
	}

	if (status === 'unauthenticated') {
		return (
			<div className={styles.container}>
				{Object.values(providers).map((provider: any) => (
					<div key={provider.name}>
						<button
							onClick={(event) => signIn(provider.id, { callbackUrl: '/home' })}
						>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		);
	}

	return Router.push('/home');
};

export default signin;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const providers = await getProviders();
	return {
		props: { providers },
	};
};
