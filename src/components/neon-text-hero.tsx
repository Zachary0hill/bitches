'use client';

import { cn } from '@/lib/utils';

export function NeonTextHero({ className }: { className?: string }) {
	return (
		<div className={cn('flex flex-col items-center justify-center', className)}>
			<div className="holo-text-container text-center">
				<p
					className="holo-line holo-line-hero"
					data-text="damn bro."
				>
					damn bro.
				</p>
			</div>
		</div>
	);
}
