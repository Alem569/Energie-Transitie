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
                <div className="locations-container">
                    <div className="grid auto-rows-min gap-10 md:grid-cols-3">
                        {locations.map((location, index) => (
                            <div
                                onClick={() => window.location.href=`/overview/${location.name}`}
                                className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/80 shadow-lg dark:border-sidebar-border transition-transform duration-300 ease-in-out hover:scale-102"
                            >
                                <Locations locationData={location} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
