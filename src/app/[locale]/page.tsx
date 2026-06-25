import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/messages";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Scan, Globe, AppWindow, Lock, Palette, Languages } from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = getMessages();

  const navProps = {
    locale,
    messages,
    logo: "/logo.png",
    githubRepo: "Curzyori/pass-qr",
    stars: 0,
    brandColor: "blue" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "PassQR",
    tagline: "Akses QR Instan ke Web & Aplikasi",
    brandColor: "blue" as const,
    ctaPrimary: messages.hero.ctaPrimary,
    ctaSecondary: messages.hero.ctaSecondary,
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/pass-qr/releases/latest",
  };

  const featuresProps = {
    title: messages.features.title,
    features: [
      {
        title: "Fast QR Detection",
        description: "Uses optimized scanning logic for instant feedback with high accuracy",
        icon: Scan,
      },
      {
        title: "Web Mode",
        description: "Opens detected URLs in a built-in secure webview",
        icon: Globe,
      },
      {
        title: "App Mode",
        description: "Navigates directly to external apps via detected links",
        icon: AppWindow,
      },
      {
        title: "Privacy First",
        description: "No data tracking, completely local processing",
        icon: Lock,
      },
      {
        title: "Dark Mode",
        description: "System-wide dark and light theme support",
        icon: Palette,
      },
      {
        title: "Multi-Language",
        description: "Supports English and Indonesian",
        icon: Languages,
      },
    ],
    brandColor: "blue" as const,
  };

  const installationProps = {
    title: messages.installation.title,
    subtitle: messages.installation.subtitle,
    code: "git clone https://github.com/Curzyori/pass-qr.git\ncd pass-qr\n./gradlew assembleDebug",
    brandColor: "blue" as const,
  };

  const downloadProps = {
    title: messages.download.title,
    latestVersion: "v3.0.0",
    versionLabel: messages.download.latestVersion,
    files: [{ name: "PassQR-V3.0.0.apk", url: "https://github.com/Curzyori/pass-qr/releases/download/v3.0.0/PassQR-V3.0.0.apk" }],
    sourceCodeLabel: messages.download.sourceCode,
    sourceUrl: "https://github.com/Curzyori/pass-qr",
    githubRepo: navProps.githubRepo,
    brandColor: "blue" as const,
  };

  const previewProps = {
    images: [
      { src: "/images/web.gif", alt: "Web Interface Demo", caption: "Web Interface Demo" },
      { src: "/images/app.gif", alt: "Mobile App Demo", caption: "Mobile App Demo" },
    ],
  };

  const footerProps = {
    copyright: messages.footer.copyright,
    githubRepo: navProps.githubRepo,
  };

  return (
    <NextIntlClientProvider>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      <Footer {...footerProps} />
    </NextIntlClientProvider>
  );
}
