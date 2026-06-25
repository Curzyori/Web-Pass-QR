import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Scan, Globe, AppWindow, Lock, Palette, Languages } from "lucide-react";

async function getGitHubStars(repo: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch {
    return 0;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/pass-qr");

  const navProps = {
    locale,
    logo: "/logo.png",
    githubRepo: "Curzyori/pass-qr",
    stars,
    brandColor: "blue" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "PassQR",
    tagline: "Akses QR Instan ke Web & Aplikasi",
    brandColor: "blue" as const,
    ctaPrimary: locale === "id" ? "Unduh APK" : "Download APK",
    ctaSecondary: locale === "id" ? "Lihat di GitHub" : "View on GitHub",
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/pass-qr/releases/tag/V3.0.0",
  };

  const featuresProps = {
    title: locale === "id" ? "Fitur" : "Features",
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
    title: locale === "id" ? "Instalasi" : "Installation",
    subtitle: locale === "id" ? "Build dari Source" : "Build from Source",
    code: "git clone https://github.com/Curzyori/pass-qr.git\ncd pass-qr\n./gradlew assembleDebug",
    brandColor: "blue" as const,
  };

  const downloadProps = {
    title: locale === "id" ? "Unduh" : "Download",
    latestVersion: "v3.0.0",
    versionLabel: locale === "id" ? "Versi Terbaru" : "Latest Version",
    files: [{ name: "PassQR-v3.0.0.apk", url: "https://github.com/Curzyori/pass-qr/releases/download/V3.0.0/PassQR-v3.0.0.apk" }],
    sourceCodeLabel: "Source Code",
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
    copyright: "© 2026 Curzyori",
    githubRepo: navProps.githubRepo,
  };

  return (
    <>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      <Footer {...footerProps} />
    </>
  );
}
