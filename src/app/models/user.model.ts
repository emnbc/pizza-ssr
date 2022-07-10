export class User {

	id: string | null;
	password: string | null;
	firstName: string | null;
	lastName: string | null;
	email: string | null;
	registerDate: string | null;

	constructor(obj?: User) {
		this.id = obj ? obj.id : null;
		this.password = obj ? obj.password : null;
		this.firstName = obj ? obj.firstName : null;
		this.lastName = obj ? obj.lastName : null;
		this.email = obj ? obj.email : null;
		this.registerDate = obj ? obj.registerDate : null;
	}

}