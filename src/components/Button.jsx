export default function Button({ style, dashed, primary, children }) {
  return (
    <button
      className={
        `${style} ` +
        `${dashed ? "border-2 border-dashed " : "border "}` +
        `${primary ? "text-white bg-primary " : "text-primary bg-none "}` +
        "w-max h-12 px-4 hover:shadow-xl hover:shadow-primary/10 flex-center gap-2 border-primary rounded-xl transition-200"
      }
    >
      {children}
    </button>
  );
}
