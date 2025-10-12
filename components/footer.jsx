"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12 bg-white-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Branding */}
        <div className="ml-8">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">FinTrack</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            AI-powered financial insights for smarter living.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 ml-8 text-sm mt-4">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:teena59537@gmail.com" className="hover:underline text-blue-600 dark:text-blue-400">
              teena59537@gmail.com
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/T-E-E-N-A" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">
              github.com/teena
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/teena1" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">
              linkedin.com/in/teena
            </a>
          </p>
        </div>

        {/* Bottom Line */}
        <div className="ml-8 text-xs text-neutral-500 dark:text-neutral-400 mt-6">
          Thanks for visiting the Site.
        </div>
      </div>
    </footer>
  );
}
