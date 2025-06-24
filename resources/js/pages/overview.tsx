import { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

export default function Overview() {
    const [title, setTitle] = useState('Overview');
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const pathname = window.location.pathname;
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length > 1) {
            const citySlug = segments[segments.length - 1];
            const cityName = citySlug
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            setTitle(cityName);
        }

        let chartInstance: Chart | null = null;
        if (chartRef.current) {
            chartInstance = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'],
                    datasets: [
                        {
                            label: 'Sales',
                            data: [12, 19, 3, 5, 2],
                            backgroundColor: 'rgb(245, 158, 11)',
                            borderRadius: 5,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        // Cleanup on unmount.
        return () => {
            chartInstance?.destroy();
        };
    }, []);

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: title,
            href: window.location.pathname,
        }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="flex h-full flex-1 flex-col gap-5 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-6 md:grid-cols-2">
                        <div className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/80 shadow-lg dark:border-sidebar-border">
                            <canvas ref={chartRef} className="absolute inset-0 w-full h-full p-4" />
                        </div>
                    </div>
                </div>
        </AppLayout>
    );
}