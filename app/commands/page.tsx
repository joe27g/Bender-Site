import { LOCAL_API_URL } from '../../constants';
import { Metadata } from 'next';
import { CommandResult } from '../../types';
import { get } from 'superagent';
import CommandList from '../../components/commandList';


async function getCommands(): Promise<CommandResult | null> {
    const res = await get(`${LOCAL_API_URL}/commands_devs`); //TODO: remove devs from this route
    if (!res?.body?.commands) {
        return null;
    }
    return res.body.commands as CommandResult;
}

export const metadata: Metadata = {
    title: 'Bender: Commands',
    description: 'A list of Bender\'s 180+ commands with usage details and examples.'
};

export default async function CommandsWrapper() {
    const commands = await getCommands();
    if (!commands || Object.keys(commands).length === 0) {
        return <div>Failed to fetch command list.</div>
    }
    
    return <div id='commandsWrapper' className='w-full m-5'>
        <CommandList commands={commands} />
    </div>
}