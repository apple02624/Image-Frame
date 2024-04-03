"use server";

import View from "./view";

export default async function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100 w-full flex-col items-center justify-between">
      <View />
    </main>
  );
}
