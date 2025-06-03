'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CompanionCardProps {
	id: string;
	name: string;
	topic: string;
	subject: string;
	duration: number;
	color: string;
	shadowColor: string;
}

const CompanionCard = ({
	id,
	name,
	topic,
	subject,
	duration,
	color,
	shadowColor,
}: CompanionCardProps) => {
	return (
		<article
			className={`group companion-card mb-5 transition-all duration-500 shadow-2xl ${shadowColor}`}
			style={{ backgroundColor: color }}>
			<div className='flex justify-between items-center'>
				<div className='subject-badge duration-500 group-hover:font-bold'>
					{subject}
				</div>
			</div>
			<h2 className='text-2xl font-bold'>{name}</h2>
			<p className='tex-sm'>{topic}</p>
			<div className='flex items-center gap-2'>
				<Image
					src='/icons/clock.svg'
					alt='duration'
					width={15.5}
					height={15.5}
				/>
				<p className='text-sm font-medium'>{duration} min duration</p>
			</div>

			<Link href={`/companions/${id}`} className='w-full'>
				<button className='btn-primary w-full justify-center'>
					Lauch Lesson
				</button>
			</Link>
		</article>
	);
};

export default CompanionCard;
