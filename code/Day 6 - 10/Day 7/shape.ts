type Shape = Rect | Circle | Triangle;

interface Rect {
	type: "rect";
	length: number;
	height: number;
}

interface Circle {
	type: "circle";
	radius: number;
}

interface Triangle {
	type: 'triangle',
	breadth: number,
	height: number,
	area(): number;
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



const rect: Rect = {
	length: 5,
	height: 10,
	type: "rect"
}

const triangle: Triangle = {
	type: 'triangle',
	breadth: 10,
	height: 3,
	area(): number {
		return this.breadth * this.height
	}
}
try {
	const circleArea = CalculateArea(circle);
	console.log(`Circle: ${circleArea}`);
	const rectArea = CalculateArea(rect);
	console.log(`Rect: ${rectArea}`);
	const triangleArea = CalculateArea(triangle);
	console.log(`Triangle: ${triangleArea}`);

} catch (error) {
	let err = error as Error
	console.log(err.message);
}