type Shape = Rect | Circle;

interface Rect {
	type: "rect";
	length: number;
	height: number;
}

interface Circle {
	type: "circle";
	radius: number;
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


const circle: Circle = {
	radius: 5,
	type: "circle"
};

const circleArea = CalculateArea(circle);

const rect: Rect = {
	length: 5,
	height: 10,
	type: "rect"
}

const rectArea = CalculateArea(rect);

console.log(`Circle: ${circleArea}`);
console.log(`Rect: ${rectArea}`);