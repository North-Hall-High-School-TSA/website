import AthensClassicCenter from "../assets/images-2.jpeg"
import GeorgiaNationalFair from "../assets/opening-day-sunset-11.jpg"

export default function Accomplishments() {
    const accomplishments = [
        {
            year: "2025",
            confrence: "State Leadership Conference",
            event: "Software Development",
            award: "6th Place – State",
            description: "Created an AI-powered app for tracking agricultural futures.",
            url: AthensClassicCenter
        },
        {
            year: "2024",
            confrence: "Technology Fair",
            event: "Manufacturing Prototype",
            award: "1st Place – State",
            description: "Constructed a candy storage and distribution prototype.",
            url: GeorgiaNationalFair
        },
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                    TSA Competition Accomplishments
                </h1>
                <p className="text-gray-700 mb-12 max-w-3xl">
                    We have participated in many Technology Student Association (TSA)
                    competitions over the years, consistently earning recognition at the regional and state levels.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {accomplishments.map((item, idx) => (
                        <div key={idx} className="border rounded-xl p-5 bg-gray-50">
                            <div
                                className="rounded-md mb-3 p-3 bg-cover bg-center bg-no-repeat text-white"
                                style={{
                                    backgroundImage: `url(${item.url})`,
                                }}
                            >
                                <div className="text-sm font-medium">{item.year}</div>
                                <h2 className="text-lg font-semibold">{item.confrence}</h2>
                                <h2 className="text-md">{item.event}</h2>
                                <div className="text-sm italic">{item.award}</div>
                            </div>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
