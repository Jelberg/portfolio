'use client';
import { HeroUIProvider } from '@heroui/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <div className="dark text-foreground bg-background">{children}</div>
        </HeroUIProvider>
    );
}
