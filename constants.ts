import { faBookBookmark, faClipboardList, faGem, faLink, faMessage, faScroll, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Group, NavLinkProps } from './types';

export const CONTACT_EMAIL = 'contact@benderbot.co';
export const DASHBOARD_URL = 'https://dashboard.benderbot.co';
export const STATUS_URL = 'https://status.benderbot.co';
export const WIKI_URL = 'https://wiki.benderbot.co';
export const LOCAL_API_URL = 'https://api.benderbot.co'; // TODO: change for prod
export const API_BASE_URL = 'https://api.benderbot.co';

export const PREFIX = ';';

export const NAV_PAGES: NavLinkProps[] = [{
    name: 'Commands',
    href: '/commands',
    icon: faClipboardList
}, {
    name: 'Bender Pro',
    href: '/pro',
    icon: faGem
}, {
    name: 'Wiki',
    href: WIKI_URL,
    icon: faBookBookmark
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