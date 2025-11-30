import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="Auth-Layout flex flex-col md:flex-row min-h-screen">
      <section className="auth-left-section scrollbar-hide-default flex-[0.4] p-6">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>

      <section className="auth-right-section flex-[0.6] relative overflow-hidden">
        <div className="z-10 relative p-6 lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Signalist turned my watchlist into a winning list…
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">-Ethan R.</cite>
              <p className="max-md:text-xs text-gray-500">Retail Investor</p>
            </div>

            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  key={star}
                  src="/assets/icons/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1220}
            height={1000}
            className="auth-dashboard-preview absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default layout;
