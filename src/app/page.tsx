'use client';

import React from 'react';
import { useState } from 'react';
import BoxComponent from './features/Box.component';
import { Image as HeroImage } from '@heroui/react';
import Image from 'next/image';

import ArrowIcon from './assets/ArrowIcon';

export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div>
            <main className="mx-auto max-w-[70rem] px-4 md:px-8 flex flex-col gap-4 justify-center">
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-3">
                        <BoxComponent
                            className="flex gap-5 mx-auto"
                            key={1}
                            onMouseEnter={() => setHoveredIndex(1)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                className="rounded-tl-2xl rounded-br-2xl"
                                src={'/img/photo.jpg'}
                                alt="Jessica Elberg"
                                width={180}
                                height={180}
                            />
                            <div className="flex flex-col gap-4 justify-between">
                                <h4 className="uppercase font-mono text-gray-300 text-sm tracking-[0.5em] ">
                                    FullStack Developer
                                </h4>
                                <p className="text-4xl font-bold">
                                    Jessica Elberg.
                                </p>
                                <p className="text-gray-300 mt-4 overflow-auto text-balance max-w-2xl">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorum, voluptate.
                                </p>
                                <div className="flex flex-row justify-end">
                                    <ArrowIcon hover={hoveredIndex === 1} />
                                </div>
                            </div>
                        </BoxComponent>
                    </div>
                    <div className="col-span-4">
                        <BoxComponent
                            className="flex gap-5 w-full h-full"
                            key={2}
                            onMouseEnter={() => setHoveredIndex(2)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            01
                        </BoxComponent>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <BoxComponent className="flex gap-5 w-full h-full">
                            02
                        </BoxComponent>
                    </div>
                    <div className="col-span-2 row-span-2">
                        <BoxComponent
                            className="flex flex-col gap-5 w-full h-full  items-center"
                            key={4}
                            onMouseEnter={() => setHoveredIndex(4)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                className="rounded-tl-2xl rounded-br-2xl drop-shadow-lime-50 drop-shadow-xl"
                                src={'/img/works.png'}
                                alt="Projects"
                                width={180}
                                height={180}
                            />
                            <div className="flex gap-5">
                                <div>
                                    <h3 className="font-light text-gray-500 text-sm tracking-[0.5em] uppercase">
                                        Showcase
                                    </h3>
                                    <h2 className="text-2xl text-primary font-bold uppercase">
                                        Proyects
                                    </h2>
                                </div>
                                <ArrowIcon hover={hoveredIndex === 4} />
                            </div>
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
