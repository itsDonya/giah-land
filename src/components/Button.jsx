export default function Button({ children }) {
  return (
    <button className="w-max h-12 px-4 text-primary hover:shadow-xl hover:shadow-primary/10 flex-center gap-2 border border-primary rounded-xl transition-200">
      {children}
    </button>
  );
}
