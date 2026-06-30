import Image from "next/image";
import { Download } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  logo: string;
  name: string;
  tagline: string;
  brandColor: "blue" | "purple";
  ctaPrimary: string;
  ctaSecondary: string;
  githubRepo: string;
  downloadUrl: string;
}

const brandStyles = {
  blue: {
    gradient: "from-blue-600 to-blue-400",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  purple: {
    gradient: "from-purple-600 to-purple-400",
    button: "bg-purple-600 hover:bg-purple-700",
  },
};

export function Hero({
  logo,
  name,
  tagline,
  brandColor,
  ctaPrimary,
  ctaSecondary,
  githubRepo,
  downloadUrl,
}: HeroProps) {
  const styles = brandStyles[brandColor];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4">
      <div className="text-center max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src={logo}
            alt={`${name} Logo`}
            width={128}
            height={128}
            className="h-32 w-32 object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
          {name}
        </h1>

        {/* Tagline */}
        <p className="text-xl text-foreground/70 mb-8">{tagline}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className={styles.button}
          >
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              {ctaPrimary}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
          >
            <a
              href={`https://github.com/${githubRepo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-5 w-5" />
              {ctaSecondary}
            </a>
          </Button>
        </div>

        {/* Gradient decoration */}
        <div className={`mt-16 h-1 w-32 mx-auto rounded-full bg-gradient-to-r ${styles.gradient}`} />
      </div>
    </section>
  );
}
