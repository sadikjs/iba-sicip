"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState, useEffect } from "react";
import { Button, buttonVariants } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
export function MobileNav({ items, children }) {
  const { data: session } = useSession();
  const [loginSession, setLoginSession] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    setLoginSession(session);
    async function fetchMe() {
      try {
        const response = await fetch("/api/me");
        if (response.ok) {
          const data = await response.json();
          setLoggedInUser(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchMe();
  }, [session]);

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md border">
        <nav className="grid grid-flow-row auto-rows-max text-sm justify-center items-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="w-32 flex flex-col justify-center items-center m-auto gap-3 ">
          {!loginSession && (
            <div className="flex flex-col justify-start gap-3 lg:flex">
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm" }), "px-4")}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={cn(buttonVariants({ size: "sm" }), "px-4")}
              >
                Register
              </Link>
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Main Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 mt-4">
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={`/profile/${loggedInUser?.user.id}`}>Profile</Link>
              </DropdownMenuItem>
              {loginSession && (
                <DropdownMenuItem className="cursor-pointer">
                  <Link
                    href="#"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
      </div>
    </div>
  );
}
