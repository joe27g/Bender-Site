import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Bender Stats',
    description: 'Real-time statistics on the status of Bender.'
};

export default function StatsWrapper({ children }: { children: ReactNode }) {
    return children;
}