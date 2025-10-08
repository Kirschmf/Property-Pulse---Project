import connectDB from '@/config/database';
import User from '@/models/User';

import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
        },
    }
})],
    callbacks: {
        //invoked on successfull signin
        async signIn({ profile }) {
            await connectDB();
            const userExists = await User.findOne({ email: profile.email })
            if (!userExists) {
                //truncate user name if its too long
                const username = profile.name.slice(0, 20);

                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
 
                });
            }
            return true;
        },
        //modifies the session object
        async session({session}) {
            // 1. get the user from the db
            const user = await User.findOne({ email: session.user.email })
            // 2. assign user id to the session
            session.user.id = user._id.toString();
            // 3. return that session
            return session;
        }
    }
}