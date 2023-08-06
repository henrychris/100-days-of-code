Included in index.ts for day 4.

## Classes and Interfaces
```
interface User {
	name: string,
	email: string,
	role: string
}

class SuperAgent implements User {
	name: string;
	email: string;
	role: string;

	constructor(name: string, email: string, role: string) {
		this.name = name;
		this.email = email;
		this.role = role
	}
}

class Mfb extends SuperAgent

```