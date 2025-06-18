import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="relative min-h-svh bg-cover bg-center flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 w-[437px] max-w-full">
                <div className="flex flex-col items-center gap-4">
                    <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
                        <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                            <AppLogoIcon className="size-9 fill-current text-[var(--foreground)]" />
                        </div>
                        <span className="sr-only">{title}</span>
                    </Link>

                    <div className="space-y-2 text-center">
                        <h1 className="text-2xl font-semibold text-black">Inloggen</h1>
                        {description && (
                            <p className="text-sm text-muted-foreground">{description}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
