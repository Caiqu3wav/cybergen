import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
             authorize: async (credentials) => {
                if (!credentials) return null;

                const { email, password } = credentials;
                
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
              email, password,
            });
  
            if (response.data && response.data.user) {
                return response.data.user;
            }

                return null;
          } catch (error) {
            console.error('Failed to authorize', error);
            throw new Error('Credenciais inválidas');
          }
        },
      }),
    ],
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/signout",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nome = user.name;
        token.email = user.email;
      }
      return token;
    }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };