import Badge from './components/Badge';
import { BadgesContainer } from './components/Badge/styles';

function App() {
	return (
		<BadgesContainer>
			<Badge>Алексей Данчин</Badge>
			<Badge>Сергей Воронин</Badge>
			<Badge>Тимофей Мяги</Badge>
		</BadgesContainer>
	);
}

export default App;
