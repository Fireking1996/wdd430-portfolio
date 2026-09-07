export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-900 py-6 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} | All rights reserved
        </p>
      </div>
    </footer>
  );
}