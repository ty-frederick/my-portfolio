import Image from "next/image";

export default function PhotoCard({ src, alt }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="object-cover w-full h-auto"
      />
    </div>
  );
}