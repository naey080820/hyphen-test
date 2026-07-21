import Image from "next/image";
import "./yeonhee-art.css";

const problems = [
  {
    label: "Problem 1",
    problem: "Lack of a Visible Identity",
    solution: "1. Curated Performance Promotion",
  },
  {
    label: "Problem 2",
    problem: "No Platform for Cross-Disciplinary Collaboration",
    solution: "2. Open Rehearsal Day",
  },
  {
    label: "Problem 3",
    problem: "Threats to Mosaic Festival's Sustainability",
    solution: "3. Mosaic Festival Rebranding",
  },
];

const surveyInsights = [
  {
    title: "Low Sub-Brand Recognition",
    body: "Even among industry professionals, 60% are unaware of the Mosaic Festival — weak internal brand recognition even within the industry.",
  },
  {
    title: "Ambivalent Keywords",
    body: "Professionals' keywords reveal both strengths and identity confusion: experimental, multidisciplinary, fresh, but also ambiguous.",
  },
  {
    title: "Demand for Collaboration vs. Low Awareness",
    body: "73.5% of creators are willing to collaborate, yet 51.4% are unaware of Yeonhee Art Space itself.",
  },
];

const interviewInsights = [
  {
    title: 'Spatial Philosophy — the "Grey Box"',
    body: "The founder defines the space as a hybrid identity where a black box theater and a white box gallery coexist. This layered complexity can create an entry barrier for first-time visitors and creators.",
  },
  {
    title: "Artistic Vision & Revenue Structure",
    body: "Viewing theater's essence as process shapes the Mosaic Festival's selection criteria, which prioritize potential and individuality over polish.",
  },
  {
    title: "Crisis & Vision Forward",
    body: "The team is reconsidering the festival structure while looking toward self-sustaining models that reinvest earned revenue into discovering emerging artists.",
  },
];

const brandRows = [
  ["Name", "YEONHEE ART THEATER"],
  ["Brand Identity", "Flux"],
  ["Brand Slogan", "Cast Something New"],
  ["Brand Vision", "Building a self-sustaining ecosystem where creators connect, experiment across disciplines, and thrive together."],
];

const coreValues = [
  ["Open Line", "A visual language that keeps the system flexible and expandable."],
  ["Open Stage", "A platform where different artistic disciplines can meet."],
  ["Open Community", "A network for creators, audiences, and collaborators."],
];

const typography = [
  {
    label: "English Headline Font",
    specimen: "AnoStencil Regular",
    detail: "54pt, Leading 110%",
    body: "The stencil typeface embodies the concept of an open line through interrupted strokes.",
  },
  {
    label: "English Body Font",
    specimen: "Ano Regular",
    detail: "54pt, Leading 110%",
    body: "Derived from the headline style, the body face removes the stencil effect for improved readability.",
  },
  {
    label: "Korean Font",
    specimen: "현대예술극장",
    detail: "48pt, Leading 150%",
    body: "Minimal curves and straight strokes complement the linear geometry of the identity.",
  },
];

const colors = [
  ["Primary Color", "#ffffff", "#000000"],
  ["Secondary Color", "#898b8e", "#ffffff"],
  ["Tertiary Color", "#1200ff", "#ffffff"],
  ["Accent Pink", "#ff39dc", "#000000"],
  ["Accent Green", "#40ff00", "#000000"],
  ["Accent Yellow", "#ffe500", "#000000"],
];

const pictograms = [
  "Straight",
  "Right",
  "Straight & Right",
  "Restroom",
  "Disabled",
  "Go in",
  "Go out",
  "Exit",
  "Information",
  "No Smoking",
  "Cafe",
  "Alcohol",
  "Ticket Booth",
  "Waiting Room",
  "No Camera",
  "Elevator",
  "No Parking",
  "Stairs",
  "Food Not Allowed",
  "No Sound",
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="ya-section-title">
      <p>{title}</p>
      <p>Project 5</p>
    </div>
  );
}

export default function YeonheeArtPage() {
  return (
    <main className="yeonhee-art-page">
      <section className="ya-section ya-hero" aria-labelledby="yeonhee-background">
        <Image
          className="ya-hero-bg"
          src="/yeonhee-art/theater.png"
          alt=""
          width={1024}
          height={1024}
          priority
        />

        <div className="ya-hero-content">
          <div className="ya-hero-labels">
            <p id="yeonhee-background">Background</p>
            <p>Problem & Solution</p>
          </div>

          <div className="ya-hero-grid">
            <div className="ya-background-copy">
              <p>
                Yeonhee Art Space was founded as an alternative to the standardized theater culture of Daehangno — a
                flexible, experimental space where performances could take new forms.
              </p>
              <p>
                However, the lack of a cohesive brand identity made it difficult for the theater to communicate its
                distinct character. Planned productions, rental performances, and the Mosaic Festival were presented
                without a clear system.
              </p>
              <p>
                This project redefines the brand identity around flexibility, coexistence, and interdisciplinary
                connection, clarifying the theater&apos;s vision while strengthening the sustainability of the Mosaic
                Festival.
              </p>
            </div>

            <div className="ya-problem-map" aria-label="Problem and solution diagram">
              {problems.map((item) => (
                <article className="ya-problem-card" key={item.label}>
                  <span>Solution</span>
                  <strong>{item.solution}</strong>
                  <i aria-hidden="true" />
                  <span>{item.label}</span>
                  <em>{item.problem}</em>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ya-section ya-research" aria-labelledby="yeonhee-research">
        <div className="ya-research-grid">
          <div className="ya-research-left">
            <div className="ya-small-title" id="yeonhee-research">
              Qualitative Research - Survey
            </div>
            <Image src="/yeonhee-art/overview-card.png" alt="Survey result card" width={1024} height={768} />

            <div className="ya-small-title">Qualitative Research - Interview</div>
            <div className="ya-date-row">
              <span>Date/Method</span>
              <p>Apr 7, 2026, approx. 2-hour in-person interview with the founder of Yeonhee Art Space</p>
            </div>
            <Image src="/yeonhee-art/workshop.png" alt="Workshop interview scene" width={2420} height={1280} />
          </div>

          <div className="ya-research-right">
            <div className="ya-research-intro">
              <span>Affinity</span>
              <span>Research Summary</span>
              <p>
                Research revealed a gap between the space&apos;s experimental value and the way it is currently
                perceived. The identity therefore needed to make the brand easier to recognize, enter, and collaborate
                with.
              </p>
            </div>

            <div className="ya-insight-list">
              {surveyInsights.map((item) => (
                <article key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <div className="ya-insight-list ya-founder-list">
              <p className="ya-small-title">Insight</p>
              {interviewInsights.map((item) => (
                <article key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ya-section ya-brand" aria-labelledby="yeonhee-brand-system">
        <div className="ya-brand-content">
          <div className="ya-brand-top">
            <div>
              <SectionTitle title="Brand Identity" />
              <div className="ya-brand-table" id="yeonhee-brand-system">
                {brandRows.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ya-logotype-block">
              <SectionTitle title="Logotype & Signature" />
              <div className="ya-logotype-grid">
                <article>
                  <h2>Logotype</h2>
                  <p>
                    The Korean and English logotypes express the brand&apos;s open structure through clear cuts and
                    modular spacing.
                  </p>
                  <strong>현대예술극장</strong>
                </article>
                <article>
                  <h2>Signature</h2>
                  <p>The symbol and logotype can be combined flexibly across signage, print, and digital touchpoints.</p>
                  <strong>YEONHEE ART THEATER</strong>
                </article>
              </div>
            </div>
          </div>

          <div className="ya-brand-middle">
            <div>
              <SectionTitle title="Brand Core Value" />
              <div className="ya-value-grid">
                {coreValues.map(([title, body]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="ya-motif-grid">
              <article>
                <h3>Shape. Perspective Box</h3>
                <p>
                  The identity visualizes Yeonhee Art Space as a stage where perspectives overlap and new scenes are
                  cast.
                </p>
                <span aria-hidden="true" />
              </article>
              <article>
                <h3>Style. Open Line</h3>
                <p>None of the motif&apos;s lines are ever fully closed, leaving space for interpretation and growth.</p>
                <span aria-hidden="true" />
              </article>
            </div>
          </div>

          <div className="ya-brand-bottom">
            <div>
              <SectionTitle title="Typography" />
              <div className="ya-type-grid">
                {typography.map((item) => (
                  <article key={item.label}>
                    <h3>{item.label}</h3>
                    <p>{item.body}</p>
                    <strong>{item.specimen}</strong>
                    <span>{item.detail}</span>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Color" />
              <div className="ya-color-grid">
                {colors.map(([name, color, textColor]) => (
                  <div style={{ backgroundColor: color, color: textColor }} key={name}>
                    <span>{name}</span>
                    <strong>{color}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ya-section ya-applications" aria-labelledby="yeonhee-applications">
        <h2 id="yeonhee-applications" className="ya-visually-hidden">
          Application
        </h2>
        <div className="ya-application-stack">
          <Image src="/yeonhee-art/billboard-wide.png" alt="Outdoor billboard application" width={1024} height={683} />
          <Image src="/yeonhee-art/stage-slide.png" alt="Mosaic Festival screen application" width={1920} height={1080} />
          <div className="ya-application-pair">
            <Image src="/yeonhee-art/billboard-station.png" alt="Station billboard mockup" width={1920} height={1080} />
            <Image src="/yeonhee-art/billboard-wall.png" alt="Wall display mockup" width={1920} height={1080} />
          </div>
        </div>
      </section>

      <section className="ya-section ya-signage" aria-labelledby="yeonhee-signage">
        <div className="ya-signage-layout">
          <div>
            <SectionTitle title="Pictogram & Signage" />
            <div className="ya-pictogram-grid" id="yeonhee-signage">
              {pictograms.map((item) => (
                <figure key={item}>
                  <span aria-hidden="true" />
                  <figcaption>{item}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="ya-signage-images">
            <Image src="/yeonhee-art/signage-board.png" alt="Signage board system" width={2319} height={1944} />
            <Image src="/yeonhee-art/restroom.png" alt="Restroom signage mockup" width={1122} height={1402} />
            <Image src="/yeonhee-art/signage-wall.png" alt="Wall signage mockup" width={1122} height={1402} />
            <Image src="/yeonhee-art/signage-stairs.png" alt="Stairway signage mockup" width={1122} height={1402} />
          </div>
        </div>
      </section>

      <section className="ya-section ya-goods" aria-labelledby="yeonhee-goods">
        <h2 id="yeonhee-goods" className="ya-visually-hidden">
          Goods & Digital
        </h2>
        <div className="ya-goods-grid">
          <Image src="/yeonhee-art/collateral.png" alt="Brand collateral and goods applications" width={1920} height={1080} />
          <Image src="/yeonhee-art/phone.png" alt="Mobile ticketing application mockup" width={1656} height={1856} />
        </div>
      </section>
    </main>
  );
}
