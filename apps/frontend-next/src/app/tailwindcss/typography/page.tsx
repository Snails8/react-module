
export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-black flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full">

        <p>font-size class</p>
        <a href="https://tailwindcss.com/docs/font-size">docs</a>
        <section className="p-3 bg-gray-50">
          <p className="text-xs">text-xs (font-size: 0.75rem; /* 12px */)</p>
          <p className="text-sm">text-sm (font-size: 0.875rem; /* 14px */)</p>
          <p className="text-base">text-base (font-size: 1rem; /* 16px */)</p>
          <p className="text-lg">text-lg (font-size: 1.125rem; /* 18px */)</p>
          <p className="text-xl">text-xl (font-size: 1.25rem; /* 20px */)</p>
          <p className="text-2xl">text-2xl (font-size: 1.5rem; /* 24px */)</p>
          <p className="text-3xl">text-3xl (font-size: 1.875rem; /* 30px */)</p>
          <p className="text-4xl">text-4xl (font-size: 2.25rem; /* 36px */)</p>
        </section>

        <div className="mt-5" />

        <section className="p-3 bg-gray-50">
        <p className="underline">underline</p>
        <p className="line-through">line-through</p>
        <a href="#" className="no-underline">no-underline</a>
        </section>

      </div>
      </main>
  )
}