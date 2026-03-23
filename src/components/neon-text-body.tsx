'use client';

import { cn } from '@/lib/utils';

export function NeonTextBody({ className }: { className?: string }) {
	return (
		<div className={cn('flex flex-col items-center justify-center', className)}>
			<div className="holo-text-container text-center">
				<p
					className="holo-line holo-line-body"
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
