'use client';

import { cn } from '@/lib/utils';

export function NeonText({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'flex flex-col items-start justify-center md:pt-8',
				className,
			)}
		>
			<div className="holo-text-container">

				<p
					className="holo-line holo-line-hero"
					data-text="damn bro."
				>
					damn bro.
				</p>

				<p
					className="holo-line holo-line-body mt-6"
					data-text="anyways"
				>
					anyways
				</p>
				<p
					className="holo-line holo-line-body"
					data-text="look at the"
				>
					look at the
				</p>
				<p
					className="holo-line holo-line-body"
					data-text="domain again"
				>
					domain again
				</p>
			</div>
		</div>
	);
}
