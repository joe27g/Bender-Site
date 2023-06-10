import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { COMMAND_GROUPS } from './constants'
import Error from 'next/error'

export type NavLinkProps = {
    name: string,
    href: string,
    icon: IconDefinition
}

export type NavbarProps = {
    pages: NavLinkProps[],
    buttons: NavLinkProps[]
}

export type UserProps = {
    username: string,
    discriminator: string,
    id: string,
    avatar: string | null
}

export type StatisticProps = {
    num?: number,
    label: string
}

export type BotStats = {
    sharded: boolean,
    totalGuilds: number,
    totalUsers: number,
    shardCount: number,
    shardData?: Record<number, ShardData>
}

export type ShardData = {
    shard_id: number,
    status: number,
    ping: number,
    roundtrip: number | null,
    lastUpdated: number,
    guilds: number,
    guildsAvaliable: number // TODO: fix typo on backend
}

export type APIResult = {
    stats?: BotStats,
    sponsors?: UserProps[],
    devs?: UserProps[] | Record<string, UserProps> // TODO: change with backend
}

export type Group = typeof COMMAND_GROUPS[number]

export type CommandResult = Record<Group, CommandData[]>
export type CommandData = {
    name: string,
    aliases?: string[],
    group: Group,
    format?: string,
    examples?: string[],
    description: string,
    customAllowed: boolean,
    details?: string
}

export type ErrorPageProps = {
    error: ProdError,
    reset: () => void
}
export type ProdError = Error & { digest?: string };