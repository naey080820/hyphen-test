import Image from "next/image";
import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main className="figma-home-page">
      <div className="figma-home-canvas">
        <header className="figma-home-header" aria-label="Primary navigation">
          <Link className="figma-home-logo" href="/">
            Naey
          </Link>
          <nav className="figma-home-nav">
            <span>About</span>
            <Link href="/square">Square</Link>
            <Link href="/yeonhee-art">YeonheeArt</Link>
          </nav>
          <div className="figma-home-icons" aria-hidden="true">
            <Image src="/icons/contact.svg" alt="" width={24} height={20} priority />
            <Image src="/icons/send.svg" alt="" width={24} height={24} priority />
          </div>
        </header>

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
