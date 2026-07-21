import Image from "next/image";
import Link from "next/link";
import "./square.css";

export default function SquarePage() {
  return (
    <main className="square-page">
      <div className="square-canvas">
        <Image
          className="square-design"
          src="/square/square-figma-page.png"
          alt="Square branding project page implemented from Figma"
          width={1440}
          height={5132}
          priority
        />

        <Link className="square-hotspot square-home-hotspot" href="/" aria-label="Back to main page">
          <span>Home</span>
        </Link>

        <Link className="square-hotspot square-yeonhee-hotspot" href="/yeonhee-art" aria-label="Open Yeonhee page">
          <span>Yeonhee</span>
        </Link>
      </div>
    </main>
  );
}
