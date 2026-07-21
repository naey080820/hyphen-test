import Image from "next/image";

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Adobe InDesign",
  "Adobe After Effects",
  "Adobe Premiere Pro",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Naey home">
          Naey
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#introduction">Introduction</a>
          <a href="/square">Square</a>
          <a href="/yeonhee-art">YeonheeArt</a>
        </nav>
        <div className="header-icons" aria-label="Contact links">
          <Image src="/icons/contact.svg" alt="" width={24} height={20} priority />
          <Image src="/icons/send.svg" alt="" width={24} height={24} priority />
        </div>
      </header>

      <section className="intro" id="introduction">
        <h1>Introduction</h1>
        <div className="intro-details">
          <p>
            김나연
            <br />
            —
            <br />
            Nayeon Kim
          </p>
          <div>
            <h2>Education</h2>
            <p>
              Hongik University, Seoul Campus
              <br />
              BFA in Visual Communication Design
              <br />
              2024 – 2026
            </p>
          </div>
          <ul aria-label="Design tools">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="statement" id="about">
        <p>
          안녕하세요.
          <br />
          브랜드의 방향을 시각적으로 제안하는 브랜딩 디자이너입니다.
          <br />
          브랜드마다 가진 고유한 가치와 이야기를 발견하고, 이를 일관된 아이덴티티로 구축하는 작업에 관심이 있습니다.
          리서치와 컨셉 도출부터 로고, 그래픽 시스템, 패키지, 디지털 콘텐츠까지 브랜드 경험 전반을 디자인합니다.
          <br />
          좋은 브랜딩은 브랜드와 사람 사이의 관계를 만드는 일이라고 생각합니다. 앞으로도 브랜드가 가진 본질을 깊이 이해하고,
          오래 기억되는 디자인을 만들기 위해 꾸준히 배우고 성장하겠습니다.
        </p>
      </section>

      <section className="philosophy" id="square">
        <article>
          <h2>Design Philosophy</h2>
          <p>
            브랜딩은 브랜드를 꾸미는 작업이 아니라, 브랜드의 본질을 발견하고 사람들에게 일관된 경험으로 전달하는 과정이라고 생각합니다.
            <br />
            저는 충분한 리서치와 질문을 통해 브랜드가 가진 이야기를 이해하고, 전략적인 사고와 시각적 표현을 연결하는 디자인을
            지향합니다. 시간이 지나도 브랜드다운 모습을 유지할 수 있는 아이덴티티를 만드는 것이 목표입니다.
          </p>
        </article>
        <article>
          <h2>About me</h2>
          <p>
            새로운 브랜드를 관찰하는 것을 좋아합니다. 길을 걷다 발견한 작은 카페의 로고부터 전시 공간의 사인 시스템,
            패키지의 재질과 타이포그래피까지 일상 속 모든 브랜드 경험을 관심 있게 바라봅니다.
            <br />
            다양한 분야에서 영감을 얻고, 이를 새로운 아이디어로 연결하는 과정을 즐깁니다. 디자인은 결국 사람을 이해하는 일이라고
            믿으며, 항상 더 나은 경험을 만들기 위해 고민합니다.
          </p>
        </article>
      </section>

      <section className="availability" id="yeonhee-art">
        <div>
          <h2>CURRENTLY</h2>
          <p>Taking on select projects for 2026</p>
          <h2>FOCUS</h2>
          <p>Identity systems, typography, editorial layout</p>
          <h2>BASED</h2>
          <p>Seoul, KR — remote friendly</p>
        </div>
      </section>

      <footer>
        <p>Seoul, KR — 37.5665° N, 126.9780° E</p>
        <p className="footer-links">Instagram&nbsp;&nbsp;Are.na&nbsp;&nbsp;LinkedIn</p>
        <p>© 2026 Eden Han Studio</p>
      </footer>
    </main>
  );
}
