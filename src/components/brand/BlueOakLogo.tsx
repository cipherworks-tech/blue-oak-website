interface BlueOakLogoProps {
  className?: string;
}

/**
 * Blue Oak Revenue Infrastructure — approved master logo.
 * Source: blue-oak-logo-transparent.png (locked asset, do not modify).
 * Aspect ratio is preserved via h-* + w-auto in className; never crop/stretch.
 */
export default function BlueOakLogo({ className = "" }: BlueOakLogoProps) {
  return (
    <img
      src="/blue-oak-logo-transparent.png"
      alt="Blue Oak Revenue Infrastructure"
      className={`w-auto object-contain ${className}`}
    />
  );
}
