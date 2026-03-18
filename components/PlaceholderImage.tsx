export function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="ring-accent surface-card relative aspect-[16/9] w-full overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,102,53,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(67,104,153,0.2),_transparent_32%),linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(244,236,224,0.84))]" />
      <div className="absolute inset-x-6 bottom-6 top-6 rounded-[1.6rem] border border-white/40 bg-white/25" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <span className="max-w-sm text-sm font-medium tracking-[0.08em] text-slate-700 uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
