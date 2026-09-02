import { useCallback, useEffect, useState } from "react";

const moments = [
  { src: "/photos/moment-1.webp", alt: "A full room gathered around musicians under string lights" },
  { src: "/photos/moment-2.webp", alt: "A group leading worship together with guitar and violin" },
  { src: "/photos/moment-3.webp", alt: "A vocalist singing on a warmly lit stage" },
  { src: "/photos/moment-4.webp", alt: "A musician playing guitar with eyes closed" },
  { src: "/photos/moment-5.webp", alt: "A singer in a patterned dress performing with the band" },
  { src: "/photos/moment-6.webp", alt: "A full band performing on stage" },
];

export default function Moments() {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + moments.length) % moments.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <div className="mt-20">
      <h3 className="text-lg font-medium text-indigo-950 dark:text-indigo-200">
        Moments
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {moments.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setOpen(i)}
            className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-500"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-indigo-950/10 transition group-hover:bg-indigo-950/0" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-indigo-950/90 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-6 text-3xl leading-none text-paper/80 transition hover:text-paper"
          >
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 text-4xl text-paper/70 transition hover:text-paper sm:left-8"
          >
            &#8249;
          </button>
          <img
            src={moments[open].src}
            alt={moments[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-4 text-4xl text-paper/70 transition hover:text-paper sm:right-8"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
