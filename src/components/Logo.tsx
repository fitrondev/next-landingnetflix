import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/netflix.svg"} alt="" width={90} height={24} priority />
    </Link>
  );
};
export default Logo;
