export function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="aspect-[16/9] w-full rounded-2xl border bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <span className="text-sm text-slate-600">{label} (Image Placeholder)</span>
    </div>
  );
}
