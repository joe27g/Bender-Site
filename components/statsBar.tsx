'use client';

import Link from 'next/link';
import superagent from 'superagent';
import useSWR from 'swr';
import { API_BASE_URL, STATUS_URL } from '../constants';
import { BotStats } from '../types';
import Statistic from './statistic';

type StatsBarProps = {
    descriptive?: boolean,
    refreshInterval?: number
}
export default function StatsBar({ descriptive, refreshInterval = 0 }: StatsBarProps) {
    const { data } = useSWR('/stats', async url => {
        return superagent.get(`${API_BASE_URL}${url}`).then(res => {
            return res.body as BotStats;
        }).catch(err => {
            throw err;
        });
    }, { refreshInterval });

    return <div id='quickStats' className='mx-5 mb-2 lg:mb-0'>
        { descriptive ? 'Currently powering ' : <></>}
        <Statistic num={data?.totalGuilds} label='servers' />
        { descriptive ? 'with' : '|'}
        <Statistic num={data?.totalUsers} label='users' />
        { data?.sharded ? <span>
            { descriptive ? 'on' : '|'}
            <Statistic num={data?.shardCount} label='shards' />
        </span> : <></>}
        <span>| &nbsp;</span>
        {descriptive ? <>For details see the <Link href='/stats'>stats page</Link> or the </> : 'For info on past uptime, see the '}
        <Link href={STATUS_URL}>status website</Link>.
    </div>
}