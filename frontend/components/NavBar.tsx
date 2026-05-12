import { NotepadText } from 'lucide-react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-b border-slate-200 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <div className='flex w-full items-center gap-3 md:w-auto'>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-teal-600 sm:h-14 sm:w-14">
          <NotepadText className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>
        {/* <Logo /> */}
        <div className="min-w-0">
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">TODO</h1>
          <p className="max-w-xl text-sm leading-5 text-slate-500">Tick, Tack, Todo on Track - Organize, Prioritize, and Relax!</p>
        </div>
      </div>
      <div className='grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:items-center sm:justify-end'>
        <Link href={"/login"} className="flex h-10 items-center justify-center rounded-lg bg-teal-500 px-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-teal-600">
          Login 
        </Link>
        <Link href={"/register"} className="flex h-10 items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-slate-800">
          Register
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
