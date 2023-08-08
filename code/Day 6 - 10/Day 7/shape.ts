interface Shape {
	type: "rect" | "circle",
	radius?: number,
	length?: number,
	height?: number,
}

class Rect implements Shape {
	type: "rect" = "rect";
	length: number;
	height: number;

	constructor(length: number, height: number) {
		this.length = length
		this.height = height
	}
}

class Circle implements Shape {
	type: "circle" = "circle";
	radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}
}

function isCircle(shape: Shape): shape is Circle {
	return shape.type === "circle";
}
function isRect(shape: Shape): shape is Rect {
	return shape.type === "rect";
}

function CalculateArea(shape: Shape): number {
	if (shape && shape.type) {
		if (isCircle(shape)) {
			return Math.PI * (shape.radius ** 2)
		}
		else if (isRect(shape)) {
			return shape.height * shape.length
		}
	}

	throw new Error("Shape not supported.");
}


const circle: Circle = new Circle(5);
const circleArea = CalculateArea(circle);

const rect: Rect = new Rect(5, 10);
const rectArea = CalculateArea(rect);

console.log(`Circle: ${circleArea}`);
console.log(`Rect: ${rectArea}`);