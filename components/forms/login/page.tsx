import Link from "next/link";



export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="w-4/5 max-w-5xl" >
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-semi-bold">Login</h1>
          <p className="text-sm text-neutral-500">
            Not yet registered? <Link href="#" className="underline underline-offset-4">Register</Link>
          </p>
        </div>
      </section>
    </main>
  )
}