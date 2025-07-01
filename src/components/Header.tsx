import { BellIcon } from "lucide-react";
import { CommandDemo } from "./CommandDemo";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <section className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <Button variant={"outline"} size={"icon"}>
          <BellIcon className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default Header;
