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

export default function Dashboard({ role, locations }: { role: string, locations: any[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-5 rounded-xl p-4 overflow-x-auto">
                <div className="role-display">Role: {role}</div>
                
                {/* Display locations */}
                <div className="locations-container">
                    <h2>All Locations</h2>
                    {locations.map((location, index) => (
                        <p key={index} className="location-item">
                            {location.name} - User ID: {location.userid}
                        </p>
                    ))}
                </div>
                <div className="grid auto-rows-min gap-40 md:grid-cols-4">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="grid auto-rows-min gap-10 md:grid-cols-3">
                    <div
                        onClick={() => window.location.href="/overview/amsterdam-noord"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Amsterdam Noord" />
                    </div>
                    <div
                        onClick={() => window.location.href="/overview/waddinxveen"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Waddinxveen" />
                    </div>
                    <div
                        onClick={() => window.location.href="/overview/gouda"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Rotterdam West" />
                    </div>
                    <div
                        onClick={() => window.location.href="/overview/gouda"}
                        className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                    >
                        <Locations locationName="Gouda" />
                    </div>  
                </div>
            </div>
        </AppLayout>
    );
}
