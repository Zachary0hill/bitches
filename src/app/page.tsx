import { DottedSurface } from '@/components/dotted-surface';
import { FloatingCard } from '@/components/floating-card';
import { NeonText } from '@/components/neon-text';
import { NeonTextHero } from '@/components/neon-text-hero';
import { NeonTextBody } from '@/components/neon-text-body';

export default function Home() {
	return (
		<>
			<DottedSurface className="-z-10" />

			<main className="relative z-20 flex min-h-screen items-center justify-center px-6 isolate">
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 md:translate-x-[3%]">
					<NeonTextHero className="md:hidden" />

					<FloatingCard
						imageSrc="/card-image.png"
						imageAlt="Profile card"
						href="https://www.zzmediastudio.com/"
					/>

					<NeonTextBody className="md:hidden" />

					<NeonText className="hidden md:flex" />
				</div>
			</main>
		</>
	);
}
