import { faBookBookmark, faClipboardList, faHammer, faIcons, faImage, faList, faLock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import superagent from 'superagent';
import { WIKI_URL } from '../constants';
import { APIResult } from '../types';
import User from '../components/user';
import Separator from '../components/separator';
import StatsBar from '../components/statsBar';

async function getStatsAndSponsors(): Promise<APIResult> {
    const res = await superagent.get(`${process.env.LOCAL_API_URL}/stats_sponsors_devs`);
    if (!res?.body) {
        return {};
    }
    return res.body as APIResult;
}

export default async function LandingPage() {
    const data = await getStatsAndSponsors();

    return <div id='landingPage' className='w-full'>
        <div id='landing' className='flex flex-col text-center items-center'>
            <div className='flex flex-row shrink items-center my-3'>
                <div className='my-2 mx-6 hidden lg:block'>
                    <Image id='bender_art' src='/bender-painting.png' alt='bender painting' width={200} height={300} className='rounded-lg' />
                </div>
                <div id='feature_overview' className='text-left mx-4'>
                    <h1 className='text-3xl'>What does Bender do for my server?</h1>
                    <h2 className='text-lg text-zinc-600 dark:text-zinc-400'>
                        Bender is a high-quality bot packed with many features (over 180 commands!) To name a few:
                    </h2>
                    <div className='mt-3 space-y-1'>
                        <div>
                            <span className='text-black dark:text-yellow-300'>
                                <FontAwesomeIcon icon={faStar} className='text-xl mr-1' />
                                <strong className='mr-2'>Popular!</strong>
                            </span>
                            <span>Keep out alt accounts using the minimum account age feature! See details <Link href='/commands#minage'>here</Link>.</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClipboardList} className='text-xl mr-2 text-purple-600 dark:text-purple-400 w-5' />
                            <span>A robust custom commands system that lets you create your own commands and auto-responders!</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHammer} className='text-xl mr-2 text-orange-600 dark:text-orange-400 w-5' />
                            <span>Moderation and automod commands to keep your server clear of trolls and spammers.</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLock} className='text-xl mr-2 text-green-600 dark:text-green-400 w-5' />
                            <span>Configurable permissions system so you can choose the exact level of access you want for each command.</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faIcons} className='text-xl mr-2 text-rose-700 dark:text-rose-500 w-5' />
                            <span>Fun commands to help spice up the chat and keep your members entertained.</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faImage} className='text-xl mr-2 text-sky-600 dark:text-sky-400 w-5' />
                            <span>Image editing commands & meme creation commands (available with <Link href='/pro'>Bender Pro</Link>.)</span>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <FontAwesomeIcon icon={faBookBookmark} className='text-xl mr-2 text-black dark:text-white w-5' />
                        <span>For more info about Bender's features, see <Link href={WIKI_URL} target='_blank'>the wiki</Link>.</span>
                    </div>
                    <div className='mt-1'>
                        <FontAwesomeIcon icon={faList} className='text-xl mr-2 text-black dark:text-white w-5' />
                        <span>For a full list of commands with details and examples, see the <Link href='/commands'>commands page</Link>.</span>
                    </div>
                </div>
            </div>
            <Separator />
            <StatsBar descriptive refreshInterval={60000}/>
            <Separator />
            <div id='sponsors' className='my-4'>
                <h1 className='text-3xl'>Sponsors</h1>
                <h2 className='text-xl text-zinc-600 dark:text-zinc-400'>Special thanks to our sponsors, who have made Bender possible by donating!</h2>
                <div className='mt-5 space-x-2'>
                    { data?.sponsors?.map(user => <User {...user} key={user.id}/>) }
                </div>
            </div>
        </div>
    </div>
}
