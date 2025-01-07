"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import lwsLogo from "@/public/assets/SicipLogo.png";
import Image from "next/image";
import { X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
import { Menu } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function MainNav({ items, children }) {
	const { data: session,} = useSession();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [loginSession, setLoginSession] = useState(null);
	const [loggedInUser, setLoggedInUser] = useState(null);
	console.log("main nav console", loggedInUser)
	useEffect(() => {
        setLoginSession(session);
        async function fetchMe() {
            try {
                const response = await fetch("/api/me");
                const data = await response.json();
                setLoggedInUser(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchMe();
    }, [session]);

	return (
			<>
			<div className="flex gap-6 lg:gap-10">
				<Link href="/">
					<Image className="max-w-[100px]" src={lwsLogo} alt="Logo" />
				</Link>
				{items?.length ? (
					<nav className="hidden gap-6 lg:flex">
						{items?.map((item, index) => (
							<Link
								key={index}
								href={item.disabled ? "#" : item.href}
								className={cn(
									"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
								)}
							>
								{item.title}
							</Link>
						))}
					</nav>
				) : null}

				{showMobileMenu && items && (
					<MobileNav items={items}>{children}</MobileNav>
				)}
			</div>
			<nav className="flex items-center gap-3">
				{!loginSession && (
					<div className="items-center gap-3 hidden lg:flex">
						<Link
							href="/login"
							className={cn(buttonVariants({ size: "sm" }), "px-4")}>
							Login
						</Link>
						<Link
							href="/register"
							className={cn(buttonVariants({ size: "sm" }), "px-4")}>
							Register
						</Link>
					</div>
				 )} 
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="cursor-pointer">
							<Avatar>
								<AvatarImage
									src={loggedInUser?.profilePicture}
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56 mt-4">
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href={`/profile/${loggedInUser?.id}`}>Profile</Link>
						</DropdownMenuItem>
						{loggedInUser?.role === "instructor" && (
							<DropdownMenuItem
								className="cursor-pointer"
								asChild
							>
								<Link href="/dashboard">Dashboard</Link>
							</DropdownMenuItem>
						)}
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="/account/enrolled-courses">
								My Courses
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="">Testimonials & Certificates</Link>
						</DropdownMenuItem>
						{loginSession && (
							<DropdownMenuItem
								className="cursor-pointer"
							>
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
				<Button
					className="flex items-center space-x-2 lg:hidden"
					onClick={() => setShowMobileMenu(!showMobileMenu)}
				>
					{showMobileMenu ? <X /> : <Menu />}
				</Button>
			</nav>
		</>
	);
}




