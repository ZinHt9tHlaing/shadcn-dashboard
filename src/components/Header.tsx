"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./CommandDemo";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

type NotificationTypes = {
  text: string;
  date: string;
  read: boolean;
};

const Header = () => {
  const [notification, setNotification] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2023",
      read: true,
    },
    {
      text: "This is another notification",
      date: "02-01-2023",
      read: false,
    },
  ]);

  return (
    <section className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"} className="relative">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notification.find(
                    (item: NotificationTypes) => item.read === true
                  )
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></div>
              <BellIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notification.map((item: NotificationTypes, index: number) => (
              <DropdownMenuItem
                key={index}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    item.read ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default Header;
