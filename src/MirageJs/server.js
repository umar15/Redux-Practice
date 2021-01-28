import { Server } from "miragejs";
import books from "./json/Books.json";

export function makeServer() {
	let server = new Server({
		routes() {
			this.namespace = "api";
			this.get("/books", () => {
				return books;
			});
			this.post("/add", (schema, request) => {
				const newBook = JSON.parse(request.requestBody);
				books.push(newBook);
			});
		},
	});
	return server;
}
