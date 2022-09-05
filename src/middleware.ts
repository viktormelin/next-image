import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { useSession } from 'next-auth/react';
import { server } from './config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const middleware = (request: NextRequest) => {
	const cookie = request.cookies.get('next-auth.session-token');

	if (!cookie) {
		return NextResponse.redirect(`${server}/`);
	}
};

export const config = {
	matcher: ['/user/:path*'],
};
