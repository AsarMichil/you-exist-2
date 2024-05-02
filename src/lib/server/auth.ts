// import { dev } from '$app/environment';
// import { Lucia, TimeSpan } from 'lucia';
// import { PlanetScaleAdapter } from '@lucia-auth/adapter-mysql';
// import { connection, db } from '$lib/server/db';
// import type { DatabaseUserAttributes } from './db/types';
// import { alphabet, generateRandomString } from 'oslo/crypto';
// import { createDate } from 'oslo';
// const adapter = new PlanetScaleAdapter(connection, {
// 	user: 'user',
// 	session: 'user_session'
// });

// export const lucia = new Lucia(adapter, {
// 	sessionCookie: {
// 		attributes: {
// 			// set to `true` when using HTTPS
// 			secure: !dev
// 		}
// 	},
// 	getUserAttributes: (attributes) => {
// 		return {
// 			// attributes has the type of DatabaseUserAttributes
// 			username: attributes.username,
// 			email: attributes.email,
// 			email_verified: attributes.email_verified
// 		};
// 	}
// });

// declare module 'lucia' {
// 	interface Register {
// 		Lucia: typeof lucia;
// 		DatabaseUserAttributes: DatabaseUserAttributes;
// 	}
// }

// export type Auth = typeof lucia;

// // code for connection with lucia auth
// // const connection = connect();

// // const adapter = new PlanetScaleAdapter(connection, {
// // 	user: "user",
// // 	session: "user_session"
// // });
// export async function generateEmailVerificationCode(
// 	userId: string,
// 	email: string
// ): Promise<string> {
// 	db.deleteAllVerificationCodes(userId);
// 	const code = generateRandomString(5, alphabet('0-9'));
// 	db.insertVerificationCode({
// 		user_id: userId,
// 		email,
// 		code,
// 		expires_at: createDate(new TimeSpan(5, 'm')).toISOString().slice(0, 19).replace('T', ' ') // 5 minutes
// 	});
// 	return code;
// }
