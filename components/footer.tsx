import Link from 'next/link';

import User from './user';
import { UserProps } from '../types';
import { get } from 'superagent';
import { LOCAL_API_URL } from '../constants';

async function getDevs(): Promise<UserProps[]> {
    const res = await get(`${LOCAL_API_URL}/devs`);
    if (!res?.body) {
        return [];
    }
    if (!Array.isArray(res.body)) { // TODO: update backend to return array
        return Object.values(res.body);
    }
    return res.body as UserProps[];
}

export default async function Footer({ contactEmail }: { contactEmail: string }) {
    const devs = await getDevs();

    return <footer id='footer' className='flex flex-col md:flex-row items-center px-6 py-2 bg-zinc-400 dark:bg-zinc-800'>
        <div className='flex grow flex-col sm:flex-row'>
            <span className='leading-8 mr-3 text-zinc-800 dark:text-zinc-200'>Created and developed by</span>
            <span className='space-x-2'>
                { devs.map(user => <User {...user} key={user.id}/>) }
            </span>
        </div>
        <div className='flex shrink justify-end align-middle'>
            <Link href='/tos'>Privacy Policy</Link>
            <span className='mx-2 text-zinc-600 dark:text-zinc-400'>|</span>
            <Link href={`mailto:${contactEmail}`}>Contact Us</Link>
        </div>
    </footer>
}