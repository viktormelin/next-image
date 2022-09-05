import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export default NextAuth({
// 	adapter: PrismaAdapter(prisma),
// 	providers: [
// 		GithubProvider({
// 			clientId: process.env.GITHUB_ID,
// 			clientSecret: process.env.GITHUB_SECRET,
// 		}),
// 	],
// 	// pages: {
// 	// 	signIn: '/auth/signin',
// 	// 	newUser: '/auth/home',
// 	// },
// });

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
};

export default NextAuth(authOptions);
