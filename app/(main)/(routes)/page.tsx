import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const state = true;

export default function Home() {
  return (
    <div className="ml-5 mt-5">
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
}
