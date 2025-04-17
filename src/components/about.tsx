import GroupPhoto from "../assets/488238871_17876836491294014_1390559431757206079_n.jpg"

export default function About() {
    return (
        <div className="max-w-6xl h-full mx-auto flex flex-col md:flex-row items-center justify-center px-12 md:px-0">
            <div className="flex-1 flex flex-col h-full justify-center animate-fade-in">
                <h1 className="text-5xl font-bold mb-6 text-gray-800">About Our Club</h1>
                <p className="text-lg leading-relaxed text-gray-600 italic tracking-wide pr-8 md:py-0 py-2">
                Our chapter desires to bring out the best from those who are willing to step up to the task. We challenge our engineers with not only competitions, but to also better our community. We aim to grow ourselves while also helping others achieve great success! Go Trojans TSA!
                </p>
            </div>
            <div className="flex-1 flex flex-col h-full justify-center animate-fade-in">
                <div className="overflow-hidden rounded-lg shadow-xl border border-gray-200">
                    <img
                        src={GroupPhoto}
                        alt="Our club in action"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}
