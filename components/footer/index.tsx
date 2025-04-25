import { footerLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-sm">
        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          © 2025 HostProfis ISP Telekom GmbH
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center sm:justify-center">
          <Image
            src={footerLogo}
            alt="HostProfis Logo"
            width={130}
            height={30}
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Links */}
        <div className="flex justify-center sm:justify-end gap-6">
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
          <Link href="/agb" className="hover:underline">
            AGB
          </Link>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
