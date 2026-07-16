'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type FloatingCardProps = {
	imageSrc: string;
	imageAlt?: string;
	href?: string;
	className?: string;
};

export function FloatingCard({
	imageSrc,
	imageAlt = '',
	href,
	className,
}: FloatingCardProps) {
	return (
		<div className={cn('flex items-center justify-center', className)}>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="floating-card-wrapper cursor-pointer"
			>
				<div className="floating-card">
					{/* Neon glow layers */}
					<div className="neon-border" />
					<div className="neon-border-secondary" />

					{/* Glass card body */}
					<div className="glass-card">
						<div className="card-image-container">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={imageSrc}
								alt={imageAlt}
								className="h-full w-full object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}
