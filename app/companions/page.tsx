import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor, getSubjectShadowColor } from '@/lib/utils';

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
	const filters = await searchParams;
	const subject = filters.subject ? filters.subject : '';
	const topic = filters.topic ? filters.topic : '';

	const companions = await getAllCompanions({ subject, topic });

	return (
		<main>
			<section className='flex justify-between gap-4 max-sm:flex-col'>
				<h1>Companion Library</h1>
				<div className='flex gap-4'>
					<SearchInput />
					<SubjectFilter />
				</div>
			</section>
			<section className='companions-grid'>
				{companions.map((companion) => {
					const color = getSubjectColor(companion.subject);
					const border_Color = `hover:border-[${color}]`;
					const shadowColor = getSubjectShadowColor(companion.subject);

					return (
						<CompanionCard
							key={companion.id}
							{...companion}
							color={color}
							shadowColor={`${shadowColor} ${border_Color}`}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default CompanionsLibrary;
