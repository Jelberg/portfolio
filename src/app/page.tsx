'use client';

import BoxComponent from './features/Box.component';
import { Image } from '@heroui/react';
import { MoreIcon } from './assets/MoreIcon';

export default function Home() {
    return (
        <div>
            <main className="mx-auto max-w-[70rem] px-4 md:px-8 flex flex-col gap-4 justify-center">
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-3">
                        <BoxComponent className="flex gap-5 mx-auto">
                            <Image
                                className="rounded-tl-2xl rounded-br-2xl"
                                src={'img/photo.jpg'}
                                alt="Jessica Elberg"
                                width={200}
                            />
                            <div className="flex flex-col gap-4 justify-between">
                                <h4 className="uppercase font-light text-gray-500 text-sm tracking-[0.5em]">
                                    FullStack Developer
                                </h4>
                                <h2 className="text-4xl font-bold">
                                    Jessica Elberg.
                                </h2>
                                <p className="text-gray-300 mt-4 overflow-auto text-balance max-w-2xl">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum, voluptate.
                                </p>
                                <div className="flex flex-row justify-end">
                                    <MoreIcon className="text-gray-500 hover:text-white transition-all duration-300" />
                                </div>
                            </div>
                        </BoxComponent>
                    </div>
                    <div className="col-span-4">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            01
                        </BoxComponent>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            02
                        </BoxComponent>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            03
                        </BoxComponent>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="col-span-2 row-span-3">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            04
                        </BoxComponent>
                    </div>
                    <div className="col-span-3 row-span-3">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            05
                        </BoxComponent>
                    </div>
                    <div className="col-span-2 row-span-3">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            06
                        </BoxComponent>
                    </div>
                </div>
            </main>
        </div>
    );
}
