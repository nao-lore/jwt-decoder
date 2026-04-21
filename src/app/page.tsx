import JwtDecoder from "./components/JwtDecoder";
import SeoContent from "./components/SeoContent";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-10">
        {/* Hero */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            JWT Decoder
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto">
            Decode, inspect, and validate JSON Web Tokens instantly in your browser.
            No data is sent to any server &mdash; 100% client-side.
          </p>
        </div>

        {/* Decoder Tool */}
        <JwtDecoder />

        {/* AdSense Placeholder */}
        <div className="border border-dashed border-border rounded-lg p-6 text-center text-muted text-xs">
          Advertisement Placeholder
        </div>

        {/* SEO Content */}
        <SeoContent />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-muted">
          <p>JWT Decoder &mdash; Free online tool to decode and inspect JSON Web Tokens.</p>
          <p className="mt-1">All processing happens in your browser. Your tokens are never sent to any server.</p>
        </div>
      </footer>
    </main>
  );
}
