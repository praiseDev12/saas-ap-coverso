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
				{userId ? (
					companions.map((companion) => {
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
					})
				) : (
					<>
						<CompanionCard
							id='456'
							name='Serial, the number wizard'
							topic='Understanding Infinity in Maths'
							subject='maths'
							duration={24}
							color={getSubjectColor('maths')}
							shadowColor={getSubjectShadowColor('maths')}
						/>
						<CompanionCard
							id='789'
							name='Voca, the vocabulary builder'
							topic='learning English'
							subject='language'
							duration={14}
							color={getSubjectColor('language')}
							shadowColor={getSubjectShadowColor('language')}
						/>
						<CompanionCard
							id='678'
							name='Artemis, the scientist'
							topic='Understanding atoms and matter'
							subject='science'
							duration={30}
							color={getSubjectColor('science')}
							shadowColor={getSubjectShadowColor('science')}
						/>
					</>
				)}
			</section>

			<section className='home-section'>
				{userId ? (
					<CompanionsList
						title='Recently Completed Sessions'
						companions={recentSessionCompanions}
						classNames='w-2/3 max-lg:w-full'
					/>
				) : (
					<CompanionsList
						title='Recent Sessions'
						companions={recentSessions}
						classNames='w-2/3 max-lg:w-full'
					/>
				)}

				<CTA />
			</section>
		</main>
	);
};

export default Page;
