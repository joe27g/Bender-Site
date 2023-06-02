import Image from 'next/image';
import { UserProps } from '../types';

function getAvatar({ id, avatar, discriminator }: UserProps, size = 32) {
    if (avatar) {
        return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${avatar.startsWith('a_') ? 'gif' : 'png'}?size=${size}`;
    }
    return `https://cdn.discordapp.com/embed/avatars/${discriminator % 5}.png`;
}

export default function User(user: UserProps) {
    return <span className='user bg-zinc-200 dark:bg-[#111] h-[36px] rounded-full p-[2px] inline-flex flex-row'>
        <Image src={getAvatar(user)} alt={`${user.username}'s avatar`} width={32} height={32} className='rounded-full' />
        <span className='user-tag inline-block py-1 px-2'>
            <span>{user.username}</span>
            <span className='text-zinc-600 dark:text-zinc-400'>#{user.discriminator}</span>
        </span>
    </span>
}