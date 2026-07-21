import Image from "next/image";
import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main className="figma-home-page">
      <div className="figma-home-canvas">
        <Image
          className="figma-home-design"
          src="/home/main-figma-page.png"
          alt="Nayeon Kim portfolio main page"
          width={1440}
          height={2082}
          priority
        />

        <Link className="figma-home-hotspot figma-home-square" href="/square" aria-label="Open Square project">
          <span>Square</span>
        </Link>

        <Link className="figma-home-hotspot figma-home-yeonhee" href="/yeonhee-art" aria-label="Open Yeonhee Art project">
          <span>Yeonhee Art</span>
        </Link>
      </div>
    </main>
  );
}
