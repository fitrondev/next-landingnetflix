import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-4">
          <LanguageDropdown />
          <Button size={"sm"} asChild>
            <Link href="/login">Masuk</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
