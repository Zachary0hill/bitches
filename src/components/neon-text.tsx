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
					data-text="yes chef."
				>
					yes chef.
				</p>

				<p
					className="holo-line holo-line-body mt-6"
					data-text="click josh"
				>
					click josh
				</p>
				<p
					className="holo-line holo-line-body"
					data-text="with cash"
				>
					with cash
				</p>
				<p
					className="holo-line holo-line-body"
					data-text="to download"
				>
					to download
				</p>
				<p
					className="holo-line holo-line-body"
					data-text="my app"
				>
					my app
				</p>
				<p
					className="holo-line holo-line-caption mt-6"
				>
					do this on macbook pls
				</p>
			</div>
		</div>
	);
}
