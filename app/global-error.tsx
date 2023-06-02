'use client';

import Link from 'next/link';
import { ErrorPageProps } from '../types';

 
export default function GlobalError({ error, reset }: ErrorPageProps) {
    return <div>
        <h2>Something went wrong!</h2>
        <span>Failed to load the page. If this error persists, please contact the devs in the <Link href='/support'>support server</Link>.</span>
        <button onClick={reset}>Reload page</button>
        { error.digest ? <>
            <br/>
            <span>Error ID: { error.digest }</span>
        </> : <></> }
    </div>
}