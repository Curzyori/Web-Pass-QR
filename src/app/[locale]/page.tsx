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
    tagline: locale === "id" ? "Akses QR Instan ke Web & Aplikasi" : "Instant QR Access to Web & Apps",
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
        title: locale === "id" ? "Deteksi QR Cepat" : "Fast QR Detection",
        description: locale === "id"
          ? "Menggunakan logika pemindaian yang dioptimalkan untuk umpan balik instan dengan akurasi tinggi."
          : "Uses optimized scanning logic for instant feedback with high accuracy.",
        icon: Scan,
      },
      {
        title: locale === "id" ? "Mode Web" : "Web Mode",
        description: locale === "id"
          ? "Membuka URL yang terdeteksi di webview aman bawaan."
          : "Opens detected URLs in a built-in secure webview.",
        icon: Globe,
      },
      {
        title: locale === "id" ? "Mode Aplikasi" : "App Mode",
        description: locale === "id"
          ? "Navigasi langsung ke aplikasi eksternal melalui tautan yang terdeteksi."
          : "Navigates directly to external apps via detected links.",
        icon: AppWindow,
      },
      {
        title: locale === "id" ? "Privasi Utama" : "Privacy First",
        description: locale === "id"
          ? "Tanpa pelacakan data, pemrosesan sepenuhnya lokal."
          : "No data tracking, completely local processing.",
        icon: Lock,
      },
      {
        title: locale === "id" ? "Mode Gelap" : "Dark Mode",
        description: locale === "id"
          ? "Dukungan tema gelap dan terang secara sistem."
          : "System-wide dark and light theme support.",
        icon: Palette,
      },
      {
        title: locale === "id" ? "Multi-Bahasa" : "Multi-Language",
        description: locale === "id"
          ? "Mendukung Bahasa Inggris dan Indonesia."
          : "Supports English and Indonesian.",
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
    licenseName: "Apache-2.0",
    licenseUrl: "https://github.com/Curzyori/pass-qr/blob/main/LICENSE",
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
