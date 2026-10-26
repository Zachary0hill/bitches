'use client';

import { cn } from '@/lib/utils';

export function NeonTextBody({ className }: { className?: string }) {
	return (
		<div className={cn('flex flex-col items-center justify-center', className)}>
			<div className="holo-text-container text-center">
				<p className="holo-line holo-line-caption holo-line-caption-lg mt-4 md:mt-6">
					open this
					<br />
					on macbook
				</p>
			</div>
		</div>
	);
}
