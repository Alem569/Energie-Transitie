import { ButtonProfile } from '@/components/ui/button-profile';
import { ButtonSignout } from '@/components/ui/button-signout';
import { Header } from '@/components/ui/header';

// Hier moet de users worden geladen zodat het in de navbar kan worden weergegeven

export default function Welcome() {
    return (
        <nav>
            <div className="flex items-center justify-between px-4 py-2">
                <Header />
                <div className="flex items-center">
                    <ButtonProfile className="mr-6" />
                    <ButtonSignout />
                </div>
            </div>
        </nav>
    );
}
