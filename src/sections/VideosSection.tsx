const videoList: string[] = [
    'https://nanoderma-gerardo.s3.us-east-2.amazonaws.com/video-1.mp4',
    'https://nanoderma-gerardo.s3.us-east-2.amazonaws.com/video-2.mp4',
    'https://nanoderma-gerardo.s3.us-east-2.amazonaws.com/video-3.mp4',
];

export default function VideosSection() {
    return (
        <section className="p-6 bg-gray-800 flex flex-col gap-6 md:px-40">
            <h2 className="text-2xl font-semibold text-white">Videos</h2>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                {videoList.map(row => (
                    <video controls className="w-full h-full border border-gray-100 rounded">
                        <source src={row} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ))}
            </div>
        </section>
    );
}
