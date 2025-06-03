'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavItems from './NavItems';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className='navbar'>
			<Link href='/'>
				<div className='flex items-center gap-2.5 cursor-pointer'>
					<Image src='/images/logo.svg' alt='logo' width={46} height={44} />
				</div>
			</Link>
			<div className='flex items-center gap-8 max-sm:hidden'>
				<NavItems />
				<SignedOut>
					<SignInButton>
						<div className='tag-box tag-box-style flex w-25 h-10 rounded-4xl'>
							<button className='flex flex-row m-1 btn-signin justify-center w-full border-none text-center bg-purple-400 hover:bg-purple-500'>
								Sign In
							</button>
						</div>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>

			{/* Hamburger Icon for Mobile */}
			<button
				className='sm:hidden focus:outline-none focus:ring-2 focus:ring-purple-500 p-2 rounded'
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
				{isMobileMenuOpen ? (
					<X className='w-6 h-6' />
				) : (
					<Menu className='w-6 h-6' />
				)}
			</button>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='absolute top-16 rounded-2xl border right-0 h-[200px] w-[200px] bg-white shadow-lg sm:hidden p-4 flex flex-col items-center justify-center gap-4 z-50'>
					<NavItems />
					<SignedOut>
						<SignInButton>
							<div className='tag-box flex w-full rounded-4xl'>
								<button className='flex btn-signin m-1 justify-center w-full border-none text-center bg-purple-400 hover:bg-purple-500'>
									Sign In
								</button>
							</div>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
