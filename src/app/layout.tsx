import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bebas-neue'
});

export const metadata: Metadata = {
    title: "Jessica's Dev Portfolio",

    description: ''
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${inter.className}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
