'use client';
 
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarProps } from '../types';
import { Disclosure } from '@headlessui/react';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ pages, buttons }: NavbarProps) {
    return <Disclosure as='nav' className='bg-blue-800 flex flex-row shrink pr-6 xl:pl-6 text-lg font-semibold'>{({ open }) => <>
        <div className='flex shrink align-left justify-between'>
            <div className='flex items-center'>
                <div className='mr-4 flex xl:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-blue-900 inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'>
                        <div className='sr-only'>Open main menu</div>
                        {open ? (
                            <FontAwesomeIcon icon={faX} className='text-2xl w-6' />
                        ) : (
                            <FontAwesomeIcon icon={faBars} className='text-2xl w-6' />
                        )}
                    </Disclosure.Button>
                </div>
                <div className='flex-shrink-0 mt-1 mr-2'>
                    <Link
                        href='/'
                        className='hover:drop-shadow-[0_3px_8px_rgba(255,255,255,0.3)] transition-all'
                    >
                        <Image src='/bender.png' height={50} width={50} alt='' className='inline-block' />
                        <span className='ml-2 align-middle text-2xl font-normal text-white font-[FuturamaBold,sans-serif]'>Bender</span>
                    </Link>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-5 flex items-baseline space-x-2'>
                        {pages.map((item, index) => {
                            const isActive = useSelectedLayoutSegment() === item.href.substring(1);
                            return <Link
                                href={item.href}
                                key={index}
                                className={`navlink inline-block px-3 py-2 rounded-md transition-all ${isActive ? 'bg-blue-900 text-white' : 'text-zinc-300 hover:bg-blue-700 hover:text-white'}`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <FontAwesomeIcon icon={item.icon} className='mr-2' />
                                <span>{item.name}</span>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='grow justify-end align-middle hidden xl:flex'>
            <div className='flex-shrink-0 mt-1.5 space-x-2'>
                {buttons.map((item, index) => <Link
                    href={item.href}
                    key={index}
                    target='_blank'
                    className='button inline-block px-3 py-2 rounded-md transition-all text-zinc-300 bg-blue-700 hover:bg-blue-600 hover:text-white'
                >
                    <FontAwesomeIcon icon={item.icon} className='inline-block mr-2' />
                    <span>{item.name}</span>
                </Link>)}
            </div>
        </div>
        <Disclosure.Panel className='fixed top-14 xl:hidden bg-blue-800'>
            <div className='flex flex-col md:hidden p-3 text-left'>{pages.map((item, index) => {
                const isActive = useSelectedLayoutSegment() === item.href.substring(1);
                return <Disclosure.Button key={index}>
                    <Link
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-left font-medium transition-all ${isActive ? 'dark:bg-blue-900 text-white' : 'text-gray-300 hover:bg-blue-700 hover:text-white'}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <FontAwesomeIcon icon={item.icon} className='mr-2 w-5' />
                        <span>{item.name}</span>
                    </Link>
                </Disclosure.Button>
            })}</div>
            <div className='flex flex-col space-y-2 p-2 xl:hidden'>
                {buttons.map((item, index) => <Disclosure.Button key={index}>
                    <Link
                        href={item.href}
                        key={index}
                        target='_blank'
                        className='button inline-block px-3 py-2 rounded-md transition-all text-zinc-300 bg-blue-700 hover:bg-blue-600 hover:text-white'
                    >
                        <FontAwesomeIcon icon={item.icon} className='inline-block mr-2' />
                        <span>{item.name}</span>
                    </Link>
                </Disclosure.Button>)}
            </div>
        </Disclosure.Panel>
    </>}</Disclosure>
}