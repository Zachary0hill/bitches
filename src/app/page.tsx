import { DottedSurface } from '@/components/dotted-surface';
import { FloatingCard } from '@/components/floating-card';
import { NeonText } from '@/components/neon-text';
import { NeonTextHero } from '@/components/neon-text-hero';
import { NeonTextBody } from '@/components/neon-text-body';

export default function Home() {
	return (
		<>
			<DottedSurface className="-z-10" />

			<main className="relative z-20 flex min-h-dvh items-center justify-center px-5 pb-16 md:px-6 md:pb-0 isolate">
				<div className="flex flex-col md:flex-row items-center gap-5 md:gap-16 lg:gap-24 md:translate-x-[3%] -translate-y-[5dvh] md:translate-y-0">
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
