import Button from "@/components/Button.jsx";

const counters = [
  {
    title: "گیاه خانگی",
    amount: "943",
  },
  {
    title: "گیاه تزئینی",
    amount: "234",
  },
  {
    title: "گیاه کادویی",
    amount: "128",
  },
];

export default function Hero() {
  return (
    <div className="w-full h-full flex items-center justify-between gap-40">
      <div className="w-[580px] flex flex-col items-start justify-center gap-10">
        {/* title */}
        <h2 className="text-5xl text-neutral-800 font-bold">
          خرید راحت گیاه، با <span className="text-primary">گیاه لند!</span>
        </h2>

        {/* description */}
        <p className="text-xl text-neutral-600 leading-9">
          با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده
          کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره
          بگیری.
        </p>

        {/* buttons */}
        <div className="w-full flex gap-4">
          <Button primary style="!w-full !h-14">
            گیاهان تخفیف دار
          </Button>

          <Button dashed style="!w-full !h-14">
            <span>مشاوره با گیاه پزشک</span>
            <img src="/icons/arrow-left.svg" alt="arrow left icon" />
          </Button>
        </div>

        {/* counters */}
        <div className="w-full mt-8 flex items-center justify-between">
          {counters.map((item) => {
            return (
              <div key={item.title} className="flex-col-center gap-3">
                {/* amount */}
                <span className="text-3xl text-dark-primary font-bold">
                  {item.amount}+
                </span>

                {/* title */}
                <p className="text-xl text-dark-primary">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <img src="/img/landing/hero.png" className="w-[520px]" alt="گیاه لند" />
    </div>
  );
}
