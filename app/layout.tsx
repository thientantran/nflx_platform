import SessionProvider from "@/components/SessionProvider";
import type { Metadata } from 'next';
import { getServerSession } from "next-auth";
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'NFLX',
  description: 'Generated by Tan Ton Ten',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  console.log('getserversession', session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
