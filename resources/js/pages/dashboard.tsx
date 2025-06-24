import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Locations } from '@/components/ui/locations';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ role }: { role: string }) {
    console.log('Role prop:', role);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-5 rounded-xl p-4 overflow-x-auto">
            <div className="role-display">Role: {role}</div>
                <div className="grid auto-rows-min gap-10 md:grid-cols-3">
                    <div
                        onClick={() => window.location.href="/overview/amsterdam-noord"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/80 shadow-lg dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Amsterdam Noord" />
                    </div>
                    <div
                        onClick={() => window.location.href="/overview/waddinxveen"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/80 shadow-lg dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Waddinxveen" />
                    </div>
                    <div
                        onClick={() => window.location.href="/overview/gouda"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/80 shadow-lg dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Rotterdam West" />
                    </div>
                    <div
                        onClick={() => window.location.href="/overview/gouda"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/80 shadow-lg dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Gouda" />
                    </div>  
                </div>
            </div>
        </AppLayout>
    );
}
