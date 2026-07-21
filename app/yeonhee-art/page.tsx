import Image from "next/image";
import "./yeonhee-art.css";

export default function YeonheeArtPage() {
  return (
    <main className="yeonhee-art-page">
      <Image
        className="yeonhee-art-design"
        src="/yeonhee-art/yeonhee-art-figma-page.png"
        alt="Yeonhee Art Space branding project page implemented from Figma"
        width={1441}
        height={10830}
        priority
      />
    </main>
  );
}
