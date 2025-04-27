'use client';
import React from 'react';
export default function BoxComponent({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const baseClasses = `border-t-1 border-b-1 border-[#2e2e2e] rounded-2xl bg-linear-to-tr from-[#1c1c1c] from-10% to-[#111111] to-90% p-5 ${className}`;
    return <div className={`${baseClasses}`}>{children}</div>;
}
