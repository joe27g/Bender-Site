import { faArrowTrendUp, faBookBookmark, faClipboardList, faGem, faLink, faMessage, faScroll, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Group, NavLinkProps } from './types';

export const CONTACT_EMAIL = 'contact@benderbot.co';
export const DASHBOARD_URL = 'https://dashboard.benderbot.co';
export const STATUS_URL = 'https://status.benderbot.co';
export const WIKI_URL = 'https://wiki.benderbot.co';
export const OLD_SITE_PRO = 'https://old.benderbot.co/pro';
export const API_BASE_URL = 'https://api.benderbot.co'; // for client-side fetching

export const PREFIX = ';';
export const SUPPORT = 'https://discord.gg/99xaeGn';

const inviteLink = (id: string) => `https://discord.com/oauth2/authorize?client_id=${id}&scope=bot+applications.commands&permissions=1547037910`;

export const INVITE = inviteLink('300800171988484096');
export const INVITE_PRO = inviteLink('844692451062185995');
export const INVITE_BETA = inviteLink('319160231726809098');
export const INVITE_ALPHA = inviteLink('713530029904101457');

export const NAV_PAGES: NavLinkProps[] = [{
    name: 'Commands',
    href: '/commands',
    icon: faClipboardList
}, {
    name: 'Bender Pro',
    href: '/pro',
    icon: faGem
}, {
    name: 'Stats',
    href: '/stats',
    icon: faArrowTrendUp
}, {
    name: 'TOS',
    href: '/tos',
    icon: faScroll
}];

export const NAV_BUTTONS: NavLinkProps[] = [{
    name: 'Invite to your server',
    href: '/invite',
    icon: faLink
}, {
    name: 'Wiki',
    href: WIKI_URL,
    icon: faBookBookmark
}, {
    name: 'Support',
    href: '/support',
    icon: faMessage
}, {
    name: 'Dashboard',
    href: DASHBOARD_URL,
    icon: faUserCog
}];

export const COMMAND_GROUPS = ['infos','mod', 'misc', 'fun', 'text-tools', 'settings', 'util', 'nsfw', 'image-tools', 'memes', 'game-stats'] as const;
export const GROUP_NAMES: Record<Group, string> = {
    'infos': 'Information',
    'mod': 'Moderation',
    'misc': 'Miscellaneous',
    'fun': 'Fun',
    'text-tools': 'Text Tools',
    'settings': 'Settings',
    'util': 'Utility',
    'nsfw': 'NSFW',
    'image-tools': 'Image Tools',
    'memes': 'Memes',
    'game-stats': 'Game Stats'
}