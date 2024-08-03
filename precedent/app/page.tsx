import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="w-full max-w-4xl px-5 xl:px-0">
      <h2 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
        Simplify your AI data workflow with <span className="text-primary">Nuovo</span>
      </h2>
      <p className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
         style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
        Streamline data generation, labeling and curation with our AI-powered image retrieval.
      </p>
      <div className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
           style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        <Link href="/retrieval" className="rounded-full px-8 py-3 text-sm font-medium bg-black text-white hover:bg-black/80 transition-colors">
          Get Started
        </Link>
        <Link href="/demo" className="rounded-full px-8 py-3 text-sm font-medium bg-white text-black border border-gray-200 hover:bg-gray-100 transition-colors">
          View Demo
        </Link>
      </div>
    </section>
  );
}
