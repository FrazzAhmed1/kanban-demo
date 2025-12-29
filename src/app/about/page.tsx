import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About',
  description: 'About this project',
}

export default function AboutPage() {
  return (
    <main className="p-6">
      <div className="max-w-md rounded-lg border p-4 space-y-2">
        <h1 className="text-xl font-semibold">Kanban Demo</h1>
        <p className="text-sm text-muted-foreground">
          Simple Next.js app for onboarding.
        </p>
      </div>
    </main>
  )
}
