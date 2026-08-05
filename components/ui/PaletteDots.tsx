type PaletteDotsProps = {
  colors: string[];
  label?: string;
  darkBorder?: boolean;
};

export function PaletteDots({
  colors,
  label = "Палитра проекта",
  darkBorder = false
}: PaletteDotsProps) {
  return (
    <div className="flex items-center gap-2" aria-label={label}>
      {colors.map((color) => (
        <span
          key={color}
          className={`block size-4 rounded-full border ${
            darkBorder ? "border-main/20" : "border-paper/20"
          }`}
          style={{ backgroundColor: color }}
          title={color}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
