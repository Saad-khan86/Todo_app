import NavBar from "@/components/NavBar";
import TodoList from "@/components/TodoList";
import { CheckCircle2, ClipboardList, Clock3 } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff7ef_0,#f8fafc_36%,#eef2f7_100%)] font-sans text-slate-950">
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <section className="mb-6 grid gap-5 lg:grid-cols-[1fr_320px] lg:items-stretch">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400 text-slate-950">
              <ClipboardList className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="mt-6 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">Todo dashboard</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Organize today with a cleaner task view.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                Add, edit, complete, and remove tasks from one focused workspace.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white shadow-xl shadow-slate-200/70">
              <CheckCircle2 className="h-6 w-6 text-emerald-400" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold text-slate-200">Track Progress</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Mark tasks complete as your work moves forward.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
              <Clock3 className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              <p className="mt-5 text-sm font-semibold text-slate-900">Stay Focused</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Keep your list compact, readable, and easy to scan.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-2xl shadow-slate-200/70 backdrop-blur sm:p-5">
          <TodoList />
        </section>
      </main>
    </div>
  );
}
