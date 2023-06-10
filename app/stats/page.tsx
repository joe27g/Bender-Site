'use client';
import superagent from 'superagent';
import useSWR from 'swr';
import Separator from '../../components/separator';
import StatsBar from '../../components/statsBar';
import { API_BASE_URL } from '../../constants';
import type { BotStats } from '../../types';

function ago(date: number) {
    const min = 1000 * 60;
    const hr = min * 60;
    const day = hr * 24;
    const diff = Date.now() - date;

    if (diff >= day) {
        return `${Math.floor(diff / day)}d ago`;
    } else if (diff >= hr) {
        return `${Math.floor(diff / hr)}h ago`;
    } else if (diff >= min) {
        return `${Math.floor(diff / min)}h ago`;
    } else if (diff >= 3000) {
        return `${Math.floor(diff / 1000)}s ago`;
    }
    return 'just now';
}

type StatusProps = {
    status: number,
    lastUpdated: number
};
function Status({ status, lastUpdated }: StatusProps) {
    if (Date.now() - lastUpdated > 300000) {
        return <td className='py-2 px-4 text-red-600'>● Unknown</td>;
    }
    if (status === 0) {
        return <td className='py-2 px-4 text-green-600'>● Connected</td>;
    }
    if (status === 5) {
        return <td className='py-2 px-4 text-zinc-600 dark:text-zinc-400'>● Disconnected</td>;
    }
    return <td className='py-2 px-4 text-black dark:text-yellow-400'>● Connecting</td>;
}

type GuildsProps = {
    guilds: number,
    available: number,
    lastUpdated: number
};
function Guilds({ guilds, available, lastUpdated }: GuildsProps) {
    let availableStyled = <span className='text-green-600'>{ available }</span>
    if (Date.now() - lastUpdated > 300000) {
        availableStyled = <span className='text-red-600'>{ available }</span>;
    } else if (available < guilds) {
        availableStyled = <span className='text-black dark:text-yellow-400'>{ available }</span>;
    }
    return <td>{ availableStyled }<span className='text-zinc-600 dark:text-zinc-400'>/{ guilds }</span></td>;
}

type LastUpdatedProps = {
    lastUpdated: number
};
function LastUpdated({ lastUpdated }: LastUpdatedProps) {
    if (Date.now() - lastUpdated > 300000) {
        return <td className='py-2 px-4 text-red-600'>{ ago(lastUpdated) }</td>
    }
    return <td className='py-2 px-4'>{ ago(lastUpdated) }</td>
}

export default function Stats() {
    const { data } = useSWR('/stats', async url => {
        return superagent.get(`${API_BASE_URL}${url}`).then(res => {
            return res.body as BotStats;
        }).catch(err => {
            throw err;
        });
    }, { refreshInterval: 10000 });

    const shardData = data?.shardData ? Object.values(data.shardData) : [];

    return <div className='text-center w-full max-w-6xl mx-auto p-5'>
        <div className='my-3'>
            <h1 className='text-3xl text-black dark:text-white mb-3'>Overall Statistics</h1>
            <StatsBar refreshInterval={15000}/>
        </div>
        <Separator className='my-10'/>
        <div>
            <h1 className='text-3xl text-black dark:text-white'>Detailed Statistics</h1>
            <div className='mt-5'>
                <table className='table-auto mx-auto bg-zinc-200 dark:bg-zinc-800'>
                    <thead className='border-b-2 border-zinc-300 dark:border-zinc-700'>
                        <tr>
                            <td className='py-2 px-4'>Shard #</td>
                            <td className='py-2 px-4'>Status</td>
                            <td className='py-2 px-4'>Servers available</td>
                            <td className='py-2 px-4'>Last updated</td>
                        </tr>
                    </thead>
                    <tbody>{ shardData.length ?
                        shardData.map(sData => <tr key={sData.shard_id}>
                            <td className='py-2 px-4'>{ sData.shard_id + 1 }</td>
                            <Status
                                status={sData.status}
                                lastUpdated={sData.lastUpdated}
                            />
                            <Guilds
                                guilds={sData.guilds}
                                available={sData.guildsAvaliable}
                                lastUpdated={sData.lastUpdated}
                            />
                            <LastUpdated lastUpdated={sData.lastUpdated} />
                        </tr>
                        ) : <tr>
                            <td colSpan={4} className='py-2 text-zinc-600 dark:text-zinc-400'>No data available.</td>
                        </tr>
                    }</tbody>
                </table>
            </div>
        </div>
    </div>
}