export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          CI/CD Live on Netlify
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Next.js CI/CD Demo
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          This site is automatically linted, built with GitHub Actions, and
          deployed to Netlify on every push to{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
            main
          </code>
          .
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
              1. Continuous Integration
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Runs ESLint and Next.js production build on every push and PR.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="font-medium text-zinc-900 dark:text-zinc-100">
              2. Continuous Deployment
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Publishes the static export to Netlify when main passes CI.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
