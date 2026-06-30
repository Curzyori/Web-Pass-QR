import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, CheckCircle, Settings, AlertCircle, FileText, Download, Scan, Globe } from "lucide-react";

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

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/pass-qr");
  const isIndo = locale === "id";

  const navProps = {
    locale,
    logo: "/logo.png",
    name: "PassQR",
    githubRepo: "Curzyori/pass-qr",
    stars,
    brandColor: "blue" as const,
  };

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:font-medium focus:shadow-lg"
      >
        {isIndo ? "Lewati ke konten utama" : "Skip to main content"}
      </a>

      <Navbar {...navProps} />
      <main id="main-content" className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">
            {isIndo ? "Dokumentasi PassQR" : "PassQR Documentation"}
          </h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
              {isIndo ? "Pendahuluan" : "Introduction"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo
                ? "PassQR adalah pemindai QR yang cepat dan ramah privasi yang dirancang untuk pengalaman Android modern. Tidak hanya memindai kode; tetapi menjembatani kesenjangan antara kode fisik dan web digital secara instan."
                : "PassQR is a fast, privacy-friendly QR scanner designed for the modern Android experience. It doesn't just scan codes; it bridges the gap between physical codes and the digital web instantly."}
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              {isIndo
                ? "Dengan PassQR, Anda dapat dengan cepat memindai kode QR apa pun dan membuka URL di webview aman atau langsung menavigasi ke aplikasi terkait jika terdeteksi."
                : "With PassQR, you can quickly scan any QR code and either open the URL in a secure webview or navigate directly to the associated app if one is detected."}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-500" />
              {isIndo ? "Fitur" : "Features"}
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Deteksi QR Cepat" : "Fast QR Detection"}</strong> —
                  {isIndo ? " Menggunakan logika pemindaian yang dioptimalkan untuk umpan balik instan dengan akurasi tinggi." : " Uses optimized scanning logic for instant feedback with high accuracy."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Mode Web" : "Web Mode"}</strong> —
                  {isIndo ? " Membuka URL yang terdeteksi di webview aman bawaan." : " Opens detected URLs in a built-in secure webview."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Mode Aplikasi" : "App Mode"}</strong> —
                  {isIndo ? " Navigasi langsung ke aplikasi eksternal melalui tautan yang terdeteksi." : " Navigates directly to external apps via detected links."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Privasi Utama" : "Privacy First"}</strong> —
                  {isIndo ? " Tanpa pelacakan data, pemrosesan sepenuhnya lokal." : " No data tracking, completely local processing."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Mode Gelap" : "Dark Mode"}</strong> —
                  {isIndo ? " Dukungan tema gelap dan terang secara sistem." : " System-wide dark and light theme support."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Multi-Bahasa" : "Multi-Language"}</strong> —
                  {isIndo ? " Mendukung Bahasa Inggris dan Indonesia." : " Supports English and Indonesian."}
                </span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6 text-blue-500" />
              {isIndo ? "Instalasi" : "Installation"}
            </h2>
            <p className="text-foreground/70 mb-4">
              {isIndo
                ? "Unduh APK versi terbaru langsung dari halaman rilis GitHub:"
                : "Download the latest APK from the GitHub releases page:"}
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/pass-qr/releases" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  https://github.com/Curzyori/pass-qr/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">{isIndo ? "Build dari Source" : "Build from Source"}</h3>
            <div className="bg-secondary/50 rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
{`# Clone the repository
git clone https://github.com/Curzyori/pass-qr.git
cd pass-qr

# Build the APK
./gradlew assembleDebug`}
              </pre>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-500" />
              {isIndo ? "Spesifikasi Teknologi" : "Tech Stack"}
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>{isIndo ? "Platform" : "Platform"}:</strong> Android</li>
              <li><strong>{isIndo ? "Bahasa" : "Language"}:</strong> Kotlin &amp; Java</li>
              <li><strong>{isIndo ? "Framework UI" : "UI Framework"}:</strong> Jetpack Compose with Material Design 3</li>
              <li><strong>{isIndo ? "Mesin Pemindaian" : "Scanning Engine"}:</strong> Shouzhong/Scanner + ZXing Core</li>
              <li><strong>{isIndo ? "Arsitektur" : "Architecture"}:</strong> Single-Activity, Compose Navigation</li>
              <li><strong>License:</strong> Apache-2.0</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Scan className="h-6 w-6 text-blue-500" />
              {isIndo ? "Cara Kerja" : "How It Works"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo
                ? "PassQR menggunakan kamera perangkat untuk mendeteksi dan mendekode kode QR secara real-time. Setelah kode terdeteksi, aplikasi menganalisis kontennya untuk menentukan tindakan yang sesuai:"
                : "PassQR uses the device camera to detect and decode QR codes in real-time. Once a code is detected, it analyzes the content to determine the appropriate action:"}
            </p>
            <ul className="list-disc list-inside text-foreground/70 mt-4 space-y-2">
              <li>
                <strong>{isIndo ? "Kode URL" : "URL codes"}</strong> —
                {isIndo ? " Dibuka di webview aman bawaan (Mode Web)" : " Opens in the built-in secure webview (Web Mode)"}
              </li>
              <li>
                <strong>{isIndo ? "Tautan Aplikasi" : "App links"}</strong> —
                {isIndo ? " Navigasi langsung ke aplikasi terkait (Mode Aplikasi)" : " Navigates directly to the associated app (App Mode)"}
              </li>
              <li>
                <strong>{isIndo ? "Kode Lainnya" : "Other codes"}</strong> —
                {isIndo ? " Menampilkan konten mentah untuk Anda tangani" : " Displays the raw content for you to handle"}
              </li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-blue-500" />
              {isIndo ? "Pemecahan Masalah" : "Troubleshooting"}
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">{isIndo ? "Kamera tidak berfungsi" : "Camera is not working"}</h3>
                <p className="text-foreground/70 text-sm">{isIndo ? "Pastikan PassQR memiliki izin kamera. Anda dapat memeriksanya di Pengaturan > Aplikasi > PassQR > Izin." : "Make sure PassQR has camera permission. You can check this in Settings > Apps > PassQR > Permissions."}</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">{isIndo ? "Kode QR tidak terdeteksi" : "QR code is not detected"}</h3>
                <p className="text-foreground/70 text-sm">{isIndo ? "Pastikan pencahayaan baik dan pegang perangkat dengan stabil. Bersihkan lensa kamera jika diperlukan. Beberapa kode QR mungkin rusak atau terlalu kecil untuk dipindai." : "Ensure good lighting and hold the device steady. Clean the camera lens if needed. Some QR codes may be damaged or too small to scan."}</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">{isIndo ? "Halaman web tidak memuat" : "Web page is not loading"}</h3>
                <p className="text-foreground/70 text-sm">{isIndo ? "Periksa koneksi internet Anda. Beberapa situs web mungkin memblokir akses webview. Anda dapat menggunakan opsi \"Buka di Browser\" sebagai gantinya." : "Check your internet connection. Some websites may block webview access. You can use the \"Open in Browser\" option instead."}</p>
              </div>
            </div>
          </section>

          {/* License */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-500" />
              {isIndo ? "Lisensi" : "License"}
            </h2>
            <p className="text-foreground/70">
              {isIndo ? "Proyek ini dirilis di bawah " : "This project is released under the "}<strong>{isIndo ? "Lisensi Apache 2.0" : "Apache License 2.0"}</strong>.
              {isIndo ? " Lihat file LICENSE untuk teks lengkap." : " See the LICENSE file for full text."}
            </p>
          </section>
        </div>
      </main>

      <Footer copyright="© 2026 Curzyori" githubRepo="Curzyori/pass-qr" />
    </>
  );
}
