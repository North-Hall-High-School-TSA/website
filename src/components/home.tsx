import Logo from "../assets/NHHS_SecondaryLogo04.png";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center max-w-6xl mx-auto justify-center bg-white px-4">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-gray-600 text-2xl font-semibold mb-2">North Hall High School</h2>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">TSA & Engineering Club</h1>
                    <p className="text-lg text-gray-700 max-w-md">
                        Join us as we explore engineering, compete in TSA events, and build a better future—together.
                    </p>
                    <div className="flex py-8">
                        <button className="bg-north-hall-green text-white px-8 py-3 rounded-md font-semibold hover:bg-north-hall-green-light">Learn More</button>
                        <button className=" px-8 py-3 rounded-md font-semibold border-2 ml-4 hover:bg-gray-100">Donate</button>

                    </div>
                </div>
                <div className="flex-shrink-0">
                    <img
                        className="w-90"
                        src={Logo}
                        alt="NHHS Logo"
                    />
                </div>
                
            </div>

        </div>
    );
}
