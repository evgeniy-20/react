import React, {useState} from 'react'

function WorkWhithState() {
    
    const [name, setName] = useState('Yevhen');
	const [lastName, setLastName] = useState('Prokopiv');
	const [age, setAge] = useState(25);
	const [banned, setBanned] = useState(false);
	
	const changeName = () => {
		setName('Anna');
	}
	const changeLastName = () => {
		setLastName('Levchenko');
	}
	return <div>
		<span>Ім'я : {name}</span>
		<button onClick={changeName}>Натисни на мене</button>
		<span> Прізвище: {lastName}</span>
		<button onClick={changeLastName}>Натисни на мене</button>
		<span> Вік: {age}</span>
		<button onClick={() => setAge(age + 1)}>Натисни на мене</button>
		<span>{banned ? 'Забанен пользователь!!!' : 'Не забанен!!!'}</span>
		<button onClick={() => setBanned(banned)}>Натисни на мене!!!</button>
		<button onClick={() => setBanned(!banned)}>Натисни на мене!!!</button>
	</div>;
}

export default WorkWhithState