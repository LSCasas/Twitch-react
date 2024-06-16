
import clsx from "clsx";

export default function Card({ image, title, viewes, doubleWidth, tag1, tag2 }) {
  return (
    <article className={clsx('flex flex-col gap-2', {
      'col-span-2': doubleWidth, 
      'border-2 border-red-500': title === 'IRL',
    })}>
      <img src={image} alt="" className="rounded-lg aspect-w-16 aspect-h-9" />
      <footer className="grid gap-2 grid-cols-12">
        <p className="col-span-12 text-base font-semibold text-left">{title}</p>
        <p className="col-span-12 text-sm text-slate-400 text-left">{viewes}</p>
        <div className="col-span-12 flex gap-2">
          {tag1 && (
            <button className="px-2 py-1 rounded-full bg-zinc-800 text-sm text-zinc-400 font-sans font-medium">{tag1}</button>
          )}
          {tag2 && (
            <button className="px-2 py-1 rounded-full bg-zinc-800 text-sm text-zinc-400 font-sans font-medium">{tag2}</button>
          )}
        </div>
      </footer>
    </article>
  );
}

