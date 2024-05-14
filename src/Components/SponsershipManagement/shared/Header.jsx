import React, { Fragment } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className=' z-[100] bg-secondary h-[8rem] px-4 flex justify-between items-center' style={{position: 'sticky', top: 0}}>
            <div className='text-primary text-4xl font-bold'>Hello!.. Welcome Rasindu</div>
            <div className='flex items-center gap-2 mr-2 text-primary'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(open && 'bg-accent', 'p-1 rounded-sm inline-flex item-center hover:text-opacity-100 focus:outline-none active:bg-white')}
                            >
                                <HiOutlineBell fontSize={30} />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className='bg-background rounded-base shadow-md ring-1 ring-accent ring-opacity-5 px-2 py-2.5'>
                                        <strong className='text-text text-xl'>Notifications</strong>
                                        <div className='mt-2 py-1 text-base'>
                                            Message 01
                                        </div>
                                        <div className='mt-2 py-1 text-base'>
                                            Message 02
                                        </div>
                                        <div className='mt-2 py-1 text-base'>
                                            Message 03
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <div>
                    <div className='flex items-center'>
                        <span className='text-xl p-2'>Rasindu</span>
                        <Link to="/mt" className='p-1 rounded-sm inline-flex item-center hover:text-opacity-100 focus:outline-none active:bg-white'><CgProfile className='text-3xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}