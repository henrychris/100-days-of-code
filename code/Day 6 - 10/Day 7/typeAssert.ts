const rawData = `["grace", "frankie"]`;

let jsonValue = JSON.parse(rawData) as string;
console.log(jsonValue.at(1));

// Type assertions are useful when catching errors