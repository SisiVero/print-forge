"use client";
import Image from "next/image";
import "./globals.css";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";
import logo from "@/public/svg/logo.svg";
import mobileLogo from "@/public/svg/mobileLogo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

 const albertFont = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});
 const monst = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-monst",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "3D Models", href: "/models" },
  { name: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${albertFont.className} ${monst.variable}`}>
        <header>
          <nav className="flex justify-between w-full items-center py-7 text-[#606060] px-10 mb-10">
            <Link href="/" className="hidden md:block">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={200}
                className="hidden md:block"
              />
            </Link>
            <Link href="/" className="md:hidden">
              <Image src={mobileLogo} alt="Logo" width={39} height={39} />
            </Link>
            <ul className="flex items-center gap-4 font-semibold text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? "text-[#F77429] border-b border-[#F77429] pb-2"
                        : "text-gray-400 hover:text-[#F77429]"
                    } ${link.name === "Home" ? "hidden md:flex": ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
