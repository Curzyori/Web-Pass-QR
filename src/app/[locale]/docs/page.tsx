import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/messages";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, CheckCircle, Terminal, Settings, AlertCircle, FileText, Download, Scan, Globe } from "lucide-react";

export default async function DocsPage({
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

  const footerProps = {
    copyright: messages.footer.copyright,
    githubRepo: navProps.githubRepo,
  };

  return (
    <NextIntlClientProvider>
      <Navbar {...navProps} />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">PassQR Documentation</h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Introduction
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              PassQR is a fast, privacy-friendly QR scanner designed for the modern Android experience. 
              It doesn&apos;t just scan codes; it bridges the gap between physical codes and the digital 
              web instantly.
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              With PassQR, you can quickly scan any QR code and either open the URL in a secure webview 
              or navigate directly to the associated app if one is detected.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Features
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Fast QR Detection</strong> — Uses optimized scanning logic for instant feedback with high accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Web Mode</strong> — Opens detected URLs in a built-in secure webview</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>App Mode</strong> — Navigates directly to external apps via detected links</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Privacy First</strong> — No data tracking, completely local processing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Dark Mode</strong> — System-wide dark and light theme support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Multi-Language</strong> — Supports English and Indonesian</span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6" />
              Installation
            </h2>
            <p className="text-foreground/70 mb-4">
              Download the latest APK from the GitHub releases page:
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/pass-qr/releases" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  https://github.com/Curzyori/pass-qr/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Build from Source</h3>
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
              <Settings className="h-6 w-6" />
              Tech Stack
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>Platform:</strong> Android</li>
              <li><strong>Language:</strong> Kotlin &amp; Java</li>
              <li><strong>UI Framework:</strong> Jetpack Compose with Material Design 3</li>
              <li><strong>Scanning Engine:</strong> Shouzhong/Scanner + ZXing Core</li>
              <li><strong>Architecture:</strong> Single-Activity, Compose Navigation</li>
              <li><strong>License:</strong> Apache 2.0</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Scan className="h-6 w-6" />
              How It Works
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              PassQR uses the device camera to detect and decode QR codes in real-time. Once a code 
              is detected, it analyzes the content to determine the appropriate action:
            </p>
            <ul className="list-disc list-inside text-foreground/70 mt-4 space-y-2">
              <li><strong>URL codes</strong> — Opens in the built-in secure webview (Web Mode)</li>
              <li><strong>App links</strong> — Navigates directly to the associated app (App Mode)</li>
              <li><strong>Other codes</strong> — Displays the raw content for you to handle</li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Troubleshooting
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">Camera is not working</h3>
                <p className="text-foreground/70 text-sm">Make sure PassQR has camera permission. You can check this in Settings &gt; Apps &gt; PassQR &gt; Permissions.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">QR code is not detected</h3>
                <p className="text-foreground/70 text-sm">Ensure good lighting and hold the device steady. Clean the camera lens if needed. Some QR codes may be damaged or too small to scan.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">Web page is not loading</h3>
                <p className="text-foreground/70 text-sm">Check your internet connection. Some websites may block webview access. You can use the &quot;Open in Browser&quot; option instead.</p>
              </div>
            </div>
          </section>

          {/* License */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              License
            </h2>
            <p className="text-foreground/70">
              This project is released under the <strong>Apache License 2.0</strong>. 
              See the LICENSE file for full text.
            </p>
          </section>
        </div>
      </main>

      <Footer {...footerProps} />
    </NextIntlClientProvider>
  );
}
