import { Metadata } from 'next';
import Separator from '../../components/separator';
import Link from 'next/link';
import { CONTACT_EMAIL, DASHBOARD_URL, PREFIX } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faScroll } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Bender TOS',
    description: 'Terms of Service and privacy policy for using Bender.'
};

export default function TOS() {
    return <div id='tosWrapper' className='w-full m-5'>
        <div className='w-full max-w-7xl mx-auto'>
            <div id='cookies' className='tos-section'>
                <h1 className='text-3xl text-black dark:text-white'>Cookies on this website</h1>
                <h3 className='text-xl text-zinc-600 dark:text-zinc-400'>Some cookies are created by third parties when you visit this website. These include:</h3>
                <br/>
                <h2 className='text-2xl text-black dark:text-white'>Cloudflare</h2>
                <span className='text-zinc-600 dark:text-zinc-400'>This website (benderbot.co) and Discord (discord.com) use Cloudflare (cloudflare.com) to serve pages and assets, respectively. As a result, cookies from Cloudflare are created when these assets are served. These cookies include, but are not necessarily limited to, an ID for your request that is used to help serve content more effectively. For more information, please see <Link href='https://www.cloudflare.com/privacypolicy/' target='_blank'>Cloudflare's privacy policy</Link>.</span>
                <br/>
                <br/>
                <h2 className='text-2xl text-black dark:text-white'>Dashboard</h2>
                <span>Upon visiting <Link href={DASHBOARD_URL}>the dashboard</Link>, cookies are created when you log in with Discord/PayPal. This is necessary for the dashboard to function, and the cookies created are tokens that are used to obtain information from the Discord and PayPal APIs. This information is only used temporarily to authenticate users and is deleted automatically when you log out.</span>
            </div>
            <br/>
            <div className='flex flex-row bg-amber-500 text-black py-4 pr-8 rounded-xl items-center'>
                <div className='flex px-5'>
                    <FontAwesomeIcon icon={faCookieBite} className='text-4xl' />
                </div>
                <span className='font-semibold'>By continuing to use this website, you agree to the collection of the data listed above. If you would not like any or all of this data to be collected, you may either disable cookies in your browser altogether, block the cookies from specific service(s) listed above, or clear your cookies and stop using this website. Note: If you disable or block cookies, this website may not work correctly.</span>
            </div>
        </div>
        <Separator className='my-8'/>
        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='text-3xl text-black dark:text-white my-2'>Terms of Service</h1>
            <h3 className='text-zinc-600 dark:text-zinc-400'>The following applies to usage of the Bender Discord bot: (referred to as "Bender".) The term "server" refers to a Discord guild and "server staff" refers to a guild's owner, administrators, and/or moderators.</h3>
            <br/>
            <br/>
            <div id='user_content' className='tos-section'>
                <h2 className='text-xl text-black dark:text-white'>User content</h2>
                <ul className='list-disc ml-5'>
                    <li>Bender's developers are not responsible for user content uploaded or distributed via Bender.</li>
                    <li>If you see any content stored or distributed via Bender that is illegal or against Discord's TOS, report it to staff of the <Link href='/support'>support server</Link> and report the user(s)/server(s) to Discord directly.</li>
                    <li>Intentionally exploiting issues in Bender, such as DoS (denial of service) attacks, are not permitted for any reason except helping the developers fix said exploits.</li>
                    <li>Misuse of Bender, as defined in these terms, may result in you being blacklisted from using the bot and/or your content being deleted.</li>
                </ul>
            </div>
            <br/>
            <br/>
            <div id='availability' className='tos-section'>
                <h2 className='text-xl text-black dark:text-white'>Availability</h2>
                <ul className='list-disc ml-5'>
                    <li>Bender is provided as-is. Its uptime is not guaranteed and availability may be changed at any time.</li>
                    <li>Premium features are not guaranteed as listed on this site; they may be changed or disabled if necessary, with a 30-day (or longer) prior notice being posted in the <Link href='/support'>support server</Link>.</li>
                    <li>Your permission to use Bender may be changed or revoked at any time if these terms are breached. Blocked users may or may not be notified depending on context.</li>
                </ul>
            </div>
            <br/>
            <br/>
            <div id='temp_data' className='tos-section'>
                <h2 className='text-xl text-black dark:text-white'>Temporary data collection</h2>
                <h3 className='text-zinc-600 dark:text-zinc-400'>Bender temporarily collects data including, but not limited to:</h3>
                <ul className='list-disc mt-2 ml-5'>
                    <li>Names and IDs of guilds it has been added to. This is stored in a temporary log file and is only accessible by Bender's developers.</li>
                    <li>Error logs, which may include information about commands and arguments used (but no user or guild data.) This is also stored in a log file for developer use.</li>
                    <li>Edited and deleted messages, which are kept in volatile memory for up to a day. These are accessible to different users depending on the permissions set by server staff.</li>
                </ul>
            </div>
            <br/>
            <br/>
            <div id='perm_data' className='tos-section'>
                <h2 className='text-xl text-black dark:text-white'>Permanent data collection</h2>
                <h3 className='text-zinc-600 dark:text-zinc-400'>Bender collects the following information permanently in a database:</h3>
                <ul className='list-disc mt-2 ml-5'>
                    <li>Username and nickname history, used for the <code>{PREFIX}names</code> command. <u>You can opt-out of this collection using <code>{PREFIX}names disable</code> in a DM to Bender.</u></li>
                    <li>Reminders, which can only be seen by the user that created them</li>
                    <li>After purchasing Bender Pro, data from PayPal is collected and used to validate subscriptions. This includes: <ul className='list-disc ml-5'>
                        <li>Name and email, used only for displaying to the user to indicate which PayPal account is linked</li>
                        <li>Unique PayPal ID, used to identify the user and link them to the subscription they purchased</li>
                        <li>Transaction ID and timestamp, used to determine the length of the subscription</li>
                        <li>Plan information, including the number of servers selected, length of the subscription, and amount paid.</li>
                    </ul></li>
                </ul>
                <div className='mt-2 text-black dark:text-white'>All of the information above can be deleted immediately at any time using the <code>{PREFIX}gdpr</code> command. Use <code>{PREFIX}help gdpr</code> in a DM to Bender to see all categories of user info that can be deleted.</div>
                <div className='text-zinc-600 dark:text-zinc-400'>If you cannot delete your information via this command, send one of the developers a DM on Discord or email <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>.</div>
                <br/>
                <br/>
                <div className='text-lg text-black dark:text-white'>If moderation logging is enabled in the server, the following is also collected in the database:</div>
                <ul className='list-disc ml-5'>
                    <li>Details about when and by whom users were muted, kicked, banned, etc. This does not include usernames or discriminators, only IDs.</li>
                    <li>Since these features are customizable, you'll need to contact the staff of your server to know exactly what is being collected.</li>
                </ul>
                <br/>
                <br/>
                <div className='text-lg text-black dark:text-white'>These may also be collected, if enabled in the server, but are stored only in log channels and <u>not</u> in a database.</div>
                <ul className='list-disc ml-5'>
                    <li>Logs of deleted messages with contents, authors, and IDs, and timestamps</li>
                    <li>Logs of edited messages with old and new contents, authors, and IDs, and timestamps</li>
                    <li>Logs of commands used with message contents, authors, IDs, and timestamps</li>
                    <li>Separate logs of moderation commands used, e.g. Moderator, user, reason and timestamp when using <code>{PREFIX}warn</code></li>
                </ul>
            </div>
            <br/>
            <br/>
            <div className='flex flex-row bg-red-600 text-white py-4 pr-8 rounded-xl items-center'>
                <div className='flex px-5'>
                    <FontAwesomeIcon icon={faScroll} className='text-4xl' />
                </div>
                <span className='font-semibold'>By using Bender or joining a server containing Bender, you agree to be subject to data collection including, but not limited to, the above. Collecting this data is necessary for all features to function and/or for debugging. It is the responsibility of the server staff to inform you what optional data is collected, but if they do not, assume all optional data is collected.</span>
            </div>
        </div>
    </div>
}
