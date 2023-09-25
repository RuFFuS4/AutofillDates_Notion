import { Client } from "@notionhq/client";
import type { DatabaseNotion } from './types/DatabaseNotion';

let notion = new Client();

//Crear conexión
export const createConnection = () => {
	notion = new Client({
		auth: process.env.NOTION_TOKEN,
	})
	return notion
}

//Obtener usuarios
export const getUsers = async () => {
	const response = await notion.users.list({});
	const users = response.results.map((user) => {
		return {
			id: user.id,
			name: user.name,
		}
	})
	return users
}

//Obtener bases de datos
export const getDatabases = async () => {
	const response = await notion.databases.list({});
	const databases = response.results.map((database) => {
		return {
			id: database.id,
			name: "",
		} as DatabaseNotion
	})
	return databases
}