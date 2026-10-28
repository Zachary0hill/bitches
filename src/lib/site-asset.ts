const DEFAULT_ASSET = {
	imageSrc: '/card-image.png',
	imageAlt: 'Profile card',
	href: 'https://github.com/Zachary0hill/cutroom-releases/releases/download/v0.0.4/Cutroom-0.0.4-arm64.dmg',
};

type FloatingCardAsset = typeof DEFAULT_ASSET;

function dashboardBaseUrl() {
	return (
		process.env.ZZMEDIA_DASHBOARD_URL ||
		process.env.NEXT_PUBLIC_ZZMEDIA_DASHBOARD_URL ||
		''
	).replace(/\/$/, '');
}

function cleanAsset(value: unknown): FloatingCardAsset {
	if (!value || typeof value !== 'object') return DEFAULT_ASSET;
	const asset = value as Record<string, unknown>;

	return {
		imageSrc:
			typeof asset.imageSrc === 'string' && asset.imageSrc.trim()
				? asset.imageSrc.trim()
				: DEFAULT_ASSET.imageSrc,
		imageAlt:
			typeof asset.imageAlt === 'string' ? asset.imageAlt : DEFAULT_ASSET.imageAlt,
		// Always the Cutroom DMG download, regardless of the dashboard's link.
		href: DEFAULT_ASSET.href,
	};
}

export async function getFloatingCardAsset(): Promise<FloatingCardAsset> {
	const baseUrl = dashboardBaseUrl();
	if (!baseUrl) return DEFAULT_ASSET;

	try {
		const response = await fetch(
			`${baseUrl}/api/public-site-assets/bitches-floating-card`,
			{
				next: { revalidate: 60 },
			},
		);

		if (!response.ok) return DEFAULT_ASSET;
		return cleanAsset(await response.json());
	} catch {
		return DEFAULT_ASSET;
	}
}
