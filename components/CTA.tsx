import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
	return (
		<section className='cta-section group'>
			<div className='cta-badge transition-all duration-1000 font-bold group-hover:shadow-xl shadow-yellow-500'>
				Start Learning Your Way
			</div>
			<h2 className='text-3xl font-bold'>
				<span className='duration-900 group-hover:text-yellow-300'>Build</span>{' '}
				and{' '}
				<span className='duration-1000 group-hover:text-purple-600'>
					Personalize
				</span>{' '}
				learning Companions
			</h2>
			<p>
				Pick a name, subject, voice, & personality - and start learning through
				voice conversations that feel natural and Fun
			</p>
			<Image src='images/cta.svg' alt='cta' width={362} height={232} />
			<button className='btn-primary hover:border hover:border-white'>
				<Image src='/icons/plus.svg' alt='plus' width={12} height={12} />
				<Link href='/companions/new'>
					<p>Build a New Companion</p>
				</Link>
			</button>
		</section>
	);
};

export default CTA;
