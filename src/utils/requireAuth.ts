import { getSession, GetSessionParams } from "next-auth/react";
import { Session } from "next-auth";

export const requireAuth = async (
	context: GetSessionParams | undefined,
	cb: ({ session }: Session) => { props: { session: unknown } }
) => {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: "/signin",
			},
		};
	}

	return cb(session);
};
