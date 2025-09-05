import Link from "next/link";
import PhotoCard from "@/components/PhotoCard";

const images = [
  { src: "/images/car.jpg", alt:"blank"},
  { src: "/images/hiking.jpg", alt: "Blank"},
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
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
        <li>Staying active in the gym</li>
        <li>Experiencing new cultures and food through travel</li>
      </ul>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <PhotoCard key={index} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
    </div>
  );
}