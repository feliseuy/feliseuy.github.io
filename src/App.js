import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100">
      <div className="text-center p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Felise Uy
        </h1>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <Instagram size={36} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Linkedin size={36} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <Facebook size={36} />
          </a>
        </div>
      </div>
    </div>
  );
}
