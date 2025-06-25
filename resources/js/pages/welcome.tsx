export default function Welcome() {
    return (
        <div className="relative h-screen w-full">
            <img src="/energy.png" alt="Energy" className="absolute inset-0 z-0 h-full w-full object-cover brightness-90" />
            <div className="font-medium absolute top-3/5 left-18 z-10 space-y-4 text-7xl text-white">
                <h1>Bespaar slim</h1>
                <h1>
                    Leef <span className="font-extrabold text-green-600">groen</span>
                </h1>
                <a href="/login">
                    <button className="btn btn cursor-pointer rounded-xl mt-0 w-full border-none bg-white p-7 text-3xl text-black">Login/register</button>
                </a>
            </div>
        </div>
    );
}
