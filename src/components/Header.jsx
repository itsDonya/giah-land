import Link from "next/link";

// components
import Button from "./Button";

const navItems = [
  {
    title: "صفحه اصلی",
    path: "/",
  },
  {
    title: "گیاه پزشک",
    path: "/doctor",
  },
  {
    title: "وبلاگ",
    path: "/blog",
  },
  {
    title: "تماس با ما",
    path: "/contact-us",
  },
  {
    title: "درباره ما",
    path: "/about-us",
  },
];

export default function Header() {
  return (
    <header className="w-full h-24">
      <div className="app-container h-full flex items-center justify-between border-b">
        {/* right side */}
        <div className="w-full flex items-center justify-start gap-8">
          {/* logo */}
          <h1 className="text-2xl text-primary font-bold">گیاه لند</h1>

          {/* navbar */}
          <nav className="flex items-center justify-start gap-6">
            {navItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className="hover:text-primary transition-200"
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-end gap-3">
          {/* search */}
          <Button>
            <img src="/icons/search.svg" alt="search icon" />
          </Button>

          {/* cart */}
          <Button>
            <img src="/icons/cart.svg" alt="cart icon" />
          </Button>

          {/* login */}
          <Button>
            <img src="/icons/login.svg" alt="login icon" />
            <span>ورود / ثبت نام</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
