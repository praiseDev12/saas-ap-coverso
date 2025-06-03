'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Companions', href: '/companions' },
	{ label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
	const pathName = usePathname();

	return (
		<nav className='flex max-sm:flex-col items-center gap-4'>
			{navItems.map(({ label, href }) => (
				<div
					className='max-sm:border-b duration-100 md:hover:border-b max-sm:w-full max-sm:text-center'
					key={label}>
					<Link
						href={href}
						className={cn(pathName === href && 'text primary font-semibold')}>
						{label}
					</Link>
				</div>
			))}
		</nav>
	);
};

export default NavItems;
