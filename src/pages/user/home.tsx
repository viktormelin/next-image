import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Router from 'next/router';
import { ReactNode, useEffect } from 'react';

const home: NextPage = () => {
	const { data: session, status } = useSession();

	console.log(session);

	if (status === 'loading') {
		return null;
	}

	return (
		<div>
			<button onClick={(event) => signOut()}>Sign Out</button>
			<p>Hello {session?.user?.name}</p>
		</div>
	);
};

export default home;
