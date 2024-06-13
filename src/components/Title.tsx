import { cn } from "@/lib/utils";

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <>
      <span className={cn("font-volkhov", className)}>{title}</span>
    </>
  );
};
export default Title;
