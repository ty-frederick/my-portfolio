import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-3xl mx-auto bg-white">
      <Link href="/" className="text-slate-600 hover:underline mb-4 block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get to Know Me</h1>

      <p className="text-base sm:text-lg text-slate-700 mb-6">
        Outside of engineering and coding, I enjoy a variety of hobbies that keep me balanced and inspired. Some of my interests include:
      </p>

      <ul className="list-disc list-inside text-base sm:text-lg text-slate-700 mb-6 space-y-2">
        <li>Hiking and camping with friends</li>
        <li>Learning about cars</li>
        <li>Staying active at the gym</li>
        <li>Traveling to experience new cultures and foods</li>
      </ul>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img src="/images/hiking.jpg" alt="Hiking" className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-60" />
        <img src="/images/soccer.jpg" alt="Soccer" className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-60" />
        <img src="/images/cooking.jpg" alt="Cooking" className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-60" />
        <img src="/images/project.jpg" alt="DIY Project" className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-60" />
      </div>
    </div>
  );
}