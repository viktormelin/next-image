import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { ReactNode, useEffect } from 'react';

const home: NextPage = () => {
	const { data: session, status } = useSession();
	const loading = status === 'loading';

	if (typeof window !== 'undefined' && loading) return null;

	return (
		<div>
			<p>Hello {session?.user?.name}</p>
		</div>
	);
};

export default home;
