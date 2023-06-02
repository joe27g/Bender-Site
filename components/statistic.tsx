import { StatisticProps } from '../types';

function stringifyNum(num?: number | null) {
    if (typeof num !== 'number') {
        return '??';
    }
    return num.toLocaleString();
}

export default function Statistic({ num, label }: StatisticProps) {
    return <span className='h-7 align-middle m-2 inline-block text-white'>
        <strong className='bg-blue-800 h-full inline-block px-2 rounded-l-md'>{ stringifyNum(num) }</strong>
        <span className='bg-[#028] h-full inline-block px-2 rounded-r-md'> { label }</span>
    </span>
}