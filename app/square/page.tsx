import Image from "next/image";
import Link from "next/link";
import "./square.css";

const gallery: Array<[string, string, number, number]> = [
  ["/square/brand-stationery.jpg", "Stationery and packaging system", 4096, 2730],
  ["/square/box-detail.jpg", "Square product packaging", 4096, 2746],
  ["/square/paper.jpg", "Square printed materials", 4096, 2731],
  ["/square/labels.jpg", "Square information cards", 4096, 2731],
  ["/square/display.jpg", "Square retail display", 4096, 2731],
  ["/square/room.jpg", "A Vault Bookstore space", 2197, 3296],
];

export default function SquarePage() {
  return (
    <main className="square-page">
      <header className="square-header">
        <Link className="square-home-link" href="/" aria-label="Back to main page">
          <span aria-hidden="true">⌂</span>
        </Link>
        <span>Square</span>
        <span>Project 2</span>
      </header>

      <section className="square-intro">
        <div className="square-copy">
          <p className="eyebrow">A New Brand Identity</p>
          <h1>Square</h1>
          <p>
            With the concept of a safe, we designed a bookstore space where a new book-sharing experience is formed.
            Using the basic system of shared bookstores, readers in one bookstore are invited to encounter small,
            independent bookstores with different concepts.
          </p>
        </div>
        <div className="square-symbol" aria-hidden="true">
          <span>S</span><span>Q</span><span>U</span><span>A</span><span>R</span><span>E</span>
        </div>
        <p className="intro-flow">
          Square offers a special shared experience through the medium of a safe and a bookmark. Readers circulate
          through shelves, reviews, and personal stories—then return to the books again.
        </p>
      </section>

      <section className="vault-section">
        <div className="vault-title">
          <p className="eyebrow">Concept</p>
          <h2>‘A Vault Bookstore’</h2>
          <p>
            Each bookshelf is reimagined as a vault—a place for storing what is most valuable. Opening a shelf becomes
            an act of discovering the treasures of books, knowledge, and personal stories.
          </p>
        </div>
        <div className="vault-visual">
          <Image src="/square/room.jpg" alt="Interior detail of A Vault Bookstore" width={2197} height={3296} />
          <span className="vault-button">Enter the Bookstore</span>
        </div>
      </section>

      <section className="shelf-section">
        <Image className="shelf-hero" src="/square/hero.jpg" alt="Square shelving concept" width={1920} height={1202} />
        <div className="shelf-copy">
          <p className="eyebrow">BOOK SHELF number: Q01</p>
          <h2>Six shelves,<br />one shared square.</h2>
          <p>
            Square consists of six bookshelves—S, Q, U, A, R, and E. Each contains twelve individually curated
            shelves, numbered 1–12.
          </p>
        </div>
        <Image className="shelf-plan" src="/square/blueprint.jpg" alt="Square bookstore floor plan" width={1024} height={820} />
      </section>

      <section className="square-gallery" aria-label="Square project gallery">
        {gallery.map(([src, alt, width, height]) => (
          <figure key={src}>
            <Image src={src} alt={alt} width={width} height={height} />
          </figure>
        ))}
      </section>
    </main>
  );
}
