const rawData = `["grace", "frankie"]`;

let jsonValue = JSON.parse(rawData) as string;
console.log(jsonValue.at(1));

// Type assertions are useful when catching errors
// however, it's safer to use instance of or a type guard
// remember to use unknown when a value can be any type
function isError(err: unknown): err is Error {
	return err instanceof Error
}