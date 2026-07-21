import Image from "next/image";
import Link from "next/link";
import "./yeonhee-art.css";

export default function YeonheeArtPage() {
  return (
    <main className="yeonhee-art-page">
      <div className="yeonhee-art-canvas">
        <Image
          className="yeonhee-art-design"
          src="/yeonhee-art/yeonhee-art-figma-page.png"
          alt="Yeonhee Art Space branding project page implemented from Figma"
          width={1441}
          height={10830}
          priority
        />
        <Link className="yeonhee-home-link" href="/" aria-label="Back to main page">
          <span>Home</span>
        </Link>
      </div>
    </main>
  );
}
