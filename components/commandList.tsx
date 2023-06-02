'use client';
import { useState } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import { GROUP_NAMES } from '../constants';
import { CommandResult, Group } from '../types';
import Separator from './separator';
import Command from './command';


export default function CommandList({ commands }: { commands: CommandResult }) {
    const [currentGroup, setCurrentGroup] = useState<Group>();
    const groups = Object.keys(commands) as Group[];
    const groupCommands = currentGroup ? commands[currentGroup] : null;
    
    return <>
        <div className='flex flex-col text-center items-center'>
            <div className='tab-container text-center space-x-2 space-y-2'>
                {groups.map(groupName => groupName === currentGroup ? <button
                    className='px-3 py-1 border-2 rounded-lg bg-blue-800 hover:bg-blue-700 border-blue-600 hover:border-blue-500 transition-colors'
                >
                    {GROUP_NAMES[groupName]}
                </button> : <button
                    className='px-3 py-1 border-2 rounded-lg bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 border-zinc-400 hover:border-zinc-500 dark:border-zinc-600 dark:hover:border-zinc-500 transition-colors'
                    onClick={() => setCurrentGroup(groupName)}
                >
                    {GROUP_NAMES[groupName]}
                </button>)}
            </div>
            <Separator className='my-2'/>
            <div className='w-full max-w-7xl'>
                { groupCommands ? <ResponsiveMasonry columnsCountBreakPoints={{69: 1, 750: 2}}>
                    <Masonry>{ groupCommands.map(cmd =>
                        <Command cmd={cmd}/>
                    )}</Masonry>
                </ResponsiveMasonry> :
                currentGroup ? <span className='text-zinc-600 dark:text-zinc-400'>No commands in this category.</span> :
                <span className='text-zinc-600 dark:text-zinc-400'>Nothing to see here... Select a category to begin.</span> }
            </div>
        </div>
    </>
}