import './globals.css';
import { EB_Garamond } from 'next/font/google';

export const metadata = {
	title: 'Emre Erciyas',
	description: 'Personal Website',
};
const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] });
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`scrollbar ${garamond.className}`}>{children}</body>
		</html>
	);
}
