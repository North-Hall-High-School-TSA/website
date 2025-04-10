import GroupPhoto from "../assets/488238871_17876836491294014_1390559431757206079_n.jpg"

export default function About() {
    return (
        <div className="max-w-6xl h-full mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-8 gap-8">
            <div className="flex-1 flex flex-col h-full justify-center">
                <h1 className="text-5xl font-semibold mb-4">About Our Club</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    Description here
                </p>
            </div>
            <div className="flex-1 flex flex-col h-full justify-center">
                <img
                    src={GroupPhoto}
                    alt="Our club in action"
                    className="w-full rounded-2xl shadow-lg object-cover"
                />
            </div>
        </div>
    );
}
