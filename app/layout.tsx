import { ReactNode } from 'react';

import '../styles/globals.css';
import { CONTACT_EMAIL, NAV_BUTTONS, NAV_PAGES } from '../constants';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Bender',
    description: 'A high-quality Discord bot packed with features and over 180 commands.',
    icons: '/bender.png',
    themeColor: '#1e40af',
    viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html>
        <body className='bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200'>
            <div className='h-screen flex flex-col'>
                <Navbar pages={NAV_PAGES} buttons={NAV_BUTTONS} />
                <div id='content' className='flex grow'>
                    { children }
                </div>
                <Footer contactEmail={CONTACT_EMAIL} />
            </div>
        </body>
    </html>
}
