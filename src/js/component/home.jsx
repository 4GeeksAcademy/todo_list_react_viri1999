import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos([...todos, inputValue]);
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"
					/>
				</li>
				{todos.map((item, index) => (
					<li key={index}>
						{item}
						<i className="fas fa-trash-alt" onClick={() => setTodos(todos.filter((t, currentIndex) => currentIndex !== index))}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} task{todos.length !== 1 ? 's' : ''}</div>
		</div>
	);
};

export default Home;
