export default function Welcome() {
    return (
        <div className="relative h-screen w-full">
            <img src="/energy.png" alt="Energy" className="absolute inset-0 z-0 h-full w-full object-cover brightness-90" />
            <div
                className="
                    font-medium absolute z-10 space-y-5 text-4xl md:text-7xl text-white
                    left-1/2 top-1/2 md:left-14 md:top-[60%]
                    transform md:-translate-x-0 md:-translate-y-0 -translate-x-1/2 -translate-y-1/2
                    w-11/12 max-w-3xl md:px-0 text-center md:text-left
                "
            >
                <h1>Bespaar slim</h1>
                <h1>
                    Leef <span className="font-extrabold text-green-600">groen</span>
                </h1>
                <a href="/login">
                    <button className="btn cursor-pointer rounded-xl p-12 md:w-auto border-none bg-white py-4 md:py-7 text-xl md:text-3xl text-black">
                        Login/register
                    </button>
                </a>
            </div>
        </div>
    );
}