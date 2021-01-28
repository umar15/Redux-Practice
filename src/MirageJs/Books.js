import React, { useState, useEffect } from "react";

const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		setInterval(() => {
			async function getBooks() {
				const response = await fetch("/api/books");
				const data = await response.json();
				setBooks(data);
			}
			getBooks();
		}, 2000);
	}, []);

	const addBook = () => {
		const title = prompt("Enter book title");
		const author = prompt("Enter book author");
		const id = Math.floor(Math.random() * 10000000);

		if (!title || !author) {
			return false;
		}

		fetch("/api/add", {
			method: "POST",
			body: JSON.stringify({ id, title, author }),
		}).catch((error) => {
			console.log("Error", error);
		});
	};

	if (!books) {
		return <h3>Loading ...</h3>;
	}
	return (
		<>
			<h2>Book Details</h2>
			<table border="1" width="500">
				<thead>
					<tr>
						<th>Title</th>
						<th>Author</th>
					</tr>
				</thead>
				<tbody>
					{books.map((book) => {
						return (
							<tr key={book.id}>
								<td>{book.title}</td>
								<td>{book.author}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<br />
			<button onClick={addBook}>Add Book</button>
		</>
	);
};

export default Books;
