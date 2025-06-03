import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';
import {
	getAllCompanions,
	getRecentSessions,
} from '@/lib/actions/companion.actions';
import { getSubjectColor, getSubjectShadowColor } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import { get } from 'http';

const Page = async () => {
	const { userId } = await auth();
	const companions = await getAllCompanions({ limit: 3 });
	const recentSessionCompanions = await getRecentSessions(10);

	return (
		<main>
			<h1 className='text-2xl'>Popular Companions</h1>
			<section className='home-section'>
				{companions.map((companion) => {
					const color = getSubjectColor(companion.subject);
					const border_Color = `hover:border-[${color}]`;
					const shadowColor = getSubjectShadowColor(companion.subject);

					return (
						<CompanionCard
							key={companion.id}
							{...companion}
							color={color}
							borderColor={border_Color}
							shadowColor={shadowColor}
						/>
					);
				})}
			</section>

			<section className='home-section'>
				<CompanionsList
					title='Recently Completed Sessions'
					companions={recentSessionCompanions}
					classNames='w-2/3 max-lg:w-full'
				/>
				<CTA />
			</section>
		</main>
	);
};

export default Page;
