'use client';

import { useActionState } from 'react';
import { user_register } from "@/actions/actions"
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CheckCircle2, LockKeyhole, Mail, UserRound } from 'lucide-react';
const initialState = { status: "", message: "" }

export default function RegisterPage() {

    const [state, formAction, isPending] = useActionState(user_register, initialState)
    const { status, message } = state

    const router = useRouter()

    useEffect(() => {
        if (status == 'success') {
            toast.success(message)
            router.push("/")

        }
        else if (status == 'error') {
            toast.error(message)
        }
    }, [state]

    )

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff7ef_0,#f8fafc_36%,#f8fafc_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70 lg:grid-cols-[1fr_0.9fr]">
                    <div className="hidden bg-slate-950 p-8 text-white lg:flex lg:flex-col lg:justify-between">
                        <div>
                            <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400 text-slate-950">
                                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h2 className="max-w-sm text-4xl font-bold leading-tight">
                                Start building your todo workspace.
                            </h2>
                            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                                Create an account to save tasks, manage your list, and keep priorities organized.
                            </p>
                        </div>

                        <div className="grid gap-3 text-sm text-slate-300">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                Capture new tasks before they get lost.
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                Keep your todo list ready across sessions.
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-5 sm:p-8 lg:p-10">
                        <form action={formAction} className="flex w-full max-w-md flex-col gap-5">

                            <div className="space-y-2 text-center sm:text-left">
                                <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">Create account</p>
                                <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">Register</h1>
                                <p className="text-sm text-slate-500">Enter your details to get started.</p>
                            </div>

                            <label className="grid gap-2 text-sm font-medium text-slate-700">
                                Username
                                <div className="relative">
                                    <UserRound className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-10 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                        required
                                    />
                                </div>
                            </label>

                            <label className="grid gap-2 text-sm font-medium text-slate-700">
                                Email
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-10 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                        required
                                    />
                                </div>
                            </label>

                            <label className="grid gap-2 text-sm font-medium text-slate-700">
                                Password
                                <div className="relative">
                                    <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-10 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                                        required
                                    />
                                </div>
                            </label>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="mt-1 h-12 rounded-lg bg-slate-950 px-4 font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {isPending ? 'Registering...' : 'Register'}
                            </button>

                            {/* Response message */}
                            {state.message && (
                                <p
                                    className={`rounded-lg border px-3 py-2 text-sm ${state.status === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'
                                        }`}
                                >
                                    {state.message}
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
