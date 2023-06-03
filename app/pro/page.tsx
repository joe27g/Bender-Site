import { faArrowTrendUp, faFrog, faGem, faImage, faNewspaper, faServer, faStar, faUsersCog, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DASHBOARD_URL, PREFIX, WIKI_URL } from '../../constants';
import Link from 'next/link';
import { Metadata } from 'next';
import { CommandResult } from '../../types';
import superagent from 'superagent';


async function getCommands(): Promise<CommandResult | null> {
    const res = await superagent.get(`${process.env.LOCAL_API_URL}/commands_devs`); //TODO: remove devs from this route
    if (!res?.body?.commands) {
        return null;
    }
    return res.body.commands as CommandResult;
}

export const metadata: Metadata = {
    title: 'Bender Pro',
    description: 'Unlock dozens more features by purchasing Bender Pro!'
};

export default async function Pro() {
    const commands = await getCommands();
    let imageCommandList = <span>See the full list <Link href='/commands#blur'>here</Link>.</span>
    let memeCommandList = <span>See the full list <Link href='/commands#angery'>here</Link>.</span>
    if (commands && commands['image-tools']) {
        imageCommandList = <span className='space-x-1'>{commands['image-tools'].map(cmd =>
            <code key={cmd.name}>{PREFIX}{ cmd.name }</code>
        )}</span>
    }
    if (commands && commands.memes) {
        memeCommandList = <span className='space-x-1'>{commands.memes.map(cmd =>
            <code key={cmd.name}>{PREFIX}{ cmd.name }</code>
        )}</span>
    }
    
    return <div id='proWrapper' className='w-full m-5'>
        <div className='flex flex-col text-center items-center'>
            <h1 className='text-3xl'>
                <FontAwesomeIcon icon={faGem} className='text-3xl mr-3 text-sky-600 dark:text-sky-400' />
                <span>Bender Pro</span>
            </h1>
            <h2 className='text-lg text-zinc-700 dark:text-zinc-300'>Bender Pro enhances your server(s) with lots of new features, including: </h2>
            <div id='pro' className='flex flex-col md:flex-row mt-5 max-w-5xl max-md:space-y-10 md:space-x-10 text-left'>
                <div className='flex flex-col w-full space-y-5'>
                    <div>
                        <FontAwesomeIcon icon={faServer} className='text-xl mr-2 text-lime-600 dark:text-lime-400 w-5' />
                        <span>A separate instance of the bot with better performance and uptime. After you've linked your account, add it </span>
                        <Link href='/invite_premium' target='_blank'>here</Link>
                        <span>.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUsersCog} className='text-xl mr-2 text-rose-700 dark:text-rose-500 w-5' />
                        <code>{PREFIX}roleall</code>
                        <span> ~ Add, remove, or toggle roles for all server members at once.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUsersLine} className='text-xl mr-2 text-purple-600 dark:text-purple-400 w-5' />
                        <code>{PREFIX}nickall</code>
                        <span> ~ Set or reset nicknames of all server members, including custom name prefixes/suffixes.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} className='text-xl mr-2 text-black dark:text-yellow-400 w-5' />
                        <span>You can have up to 7 autoroles rather than just 1.</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faArrowTrendUp} className='text-xl mr-2 text-indigo-600 dark:text-indigo-400 w-5' />
                        <span>Higher limits on several features, such as the number of patterns allowed in </span>
                        <code>{PREFIX}filter</code>
                        <span> or number of tags you can create with </span>
                        <code>{PREFIX}tag</code>
                        <span>.</span>
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-5'>
                    <div className='w-full'>
                        <FontAwesomeIcon icon={faImage} className='text-xl mr-2 text-sky-600 dark:text-sky-400 w-5' />
                        <span>Image manipulation commands: </span>
                        { imageCommandList }
                    </div>
                    <div className='w-full'>
                        <FontAwesomeIcon icon={faFrog} className='text-xl mr-2 text-green-600 dark:text-green-400 w-5' />
                        <span>Meme creation commands: </span>
                        { memeCommandList }
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faNewspaper} className='text-xl mr-2 text-orange-600 dark:text-orange-400 w-5' />
                        <code>{PREFIX}news</code>
                        <span> ~ Show news for a game, or configure it to automatically be posted in a certain channel.</span>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div className='text-center'>
            <span>But that's not all! More information about Bender Pro features is available on </span>
            <Link href={`${WIKI_URL}/pro`}>the wiki</Link>
            <span>.</span>
            <br/>
            <br/>
            <span>More Bender Pro features are in development, and we're open to suggestions on what to add.</span>
            <br/>
            <span>If you have an idea for a new feature, feel free to type it in </span>
            <Link className='bg-[rgba(114,137,218,.1)] text-[#7289da]' href='https://discord.com/channels/353660669490626560/353669122510422017' target='_blank'>#suggestions</Link>
            <span> in </span>
            <Link href='/support'>Bender's Lair</Link>
            <span>.</span>
            <br/>
            <br/>
            <span>After purchasing and linking your Discord account on the </span>
            <Link href={DASHBOARD_URL} target='_blank'>dashboard</Link>
            <span>, you will also receive the </span>
            <span className='text-[#e8ff00]'>@Bender Pro</span>
            <span> role in Bender's Lair.</span>
        </div>
        <br/>
        <div className='text-center'>
            <span className='text-zinc-600 dark:text-zinc-400'>Stripe checkout coming soon</span>
            { /* TODO: Stripe integration */ }
        </div>
    </div>
}