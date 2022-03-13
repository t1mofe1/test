import { BadgeBody, BadgeContainer, BadgeFooter, BadgeHeader, BadgeSubtitle, BadgeTitle } from './styles';

type BadgeProps = {
	title?: string;
	subtitle?: string;
	children: React.ReactNode;
};

export default function Badge({ title, subtitle, children }: BadgeProps) {
	title ??= 'HELLO';
	subtitle ??= 'MY NAME IS';

	return (
		<BadgeContainer>
			<BadgeHeader>
				<BadgeTitle>{title}</BadgeTitle>
				<BadgeSubtitle>{subtitle}</BadgeSubtitle>
			</BadgeHeader>
			<BadgeBody>{children}</BadgeBody>
			<BadgeFooter></BadgeFooter>
		</BadgeContainer>
	);
}
