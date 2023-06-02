import { ReactNode } from 'react';
import SimpleMarkdown from 'simple-markdown';

import { PREFIX } from '../constants';
import { CommandData } from '../types';
import Separator from './separator';

function parseMD(text: string): ReactNode {
    text = text.replace(/\[p\]/g, PREFIX);
    const syntaxTree = SimpleMarkdown.defaultBlockParse(text);
    return SimpleMarkdown.defaultReactOutput(syntaxTree);
}

export default function Command({ cmd }: { cmd: CommandData }) {
    return <div className='command bg-zinc-300 dark:bg-zinc-800 m-2 p-3 rounded-xl text-left'>
        <code>{PREFIX}{ cmd.name }</code>
        <span> - </span>
        <span className='description'>
            { parseMD(cmd.description) }
        </span>
        { (cmd.details || cmd.format || cmd.aliases || cmd.examples) ? 
            <Separator className='my-1'/> : <></>
        }
        { cmd.details ? <div className='usage details mb-2'>
            { parseMD(cmd.details) }
        </div> : <></> }
        { cmd.format ? <div className='usage format'>
            <strong>Usage: </strong>
            <code>{PREFIX}{ cmd.name } { cmd.format }</code>
        </div> : <></> }
        { cmd.aliases ? <div className='usage aliases'>
            <strong>Aliases: </strong>
            <span className='space-x-2'>{cmd.aliases.map(alias =>
                <code>{PREFIX}{ alias }</code>
            )}</span>
        </div> : <></> }
        { cmd.examples ? <div className='usage examples'>
            <strong>Examples: </strong>
            <span className='space-x-2'>{cmd.examples.map(example =>
                <code>{PREFIX}{ example }</code>
            )}</span>
        </div> : <></> }
    </div>;
}