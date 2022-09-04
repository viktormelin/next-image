import { useSession, signIn, signOut } from 'next-auth/react';
import { MouseEventHandler } from 'react';
import styles from '../styles/Home.module.css';

const Index = () => {
	const { data: session } = useSession();

	const signOutClick: MouseEventHandler<HTMLButtonElement> = () => {
		signOut();
	};

	if (session) {
		<div className={styles.login}>
			<p>Signed in as {session.user?.email}</p>
			<button onClick={signOutClick}>Sign Out</button>
		</div>;
	}
	return (
		<div className={styles.login}>
			<p>Login</p>
		</div>
	);
};

export default Index;
