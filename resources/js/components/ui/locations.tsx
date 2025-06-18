import { useId } from 'react';

interface LocationsProps {
    locationName?: string;
}

export function Locations({ locationName }: LocationsProps) {
    const patternId = useId();

    return (
        <div className={"flex"} id={patternId}>
            <div className="flex-1 p-4  rounded-lg shadow">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{locationName || 'Location Name'}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Adress bedrijf.</p>
            </div>
        </div>
    );
}
