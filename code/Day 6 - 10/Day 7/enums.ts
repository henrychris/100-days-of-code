enum Color {
	// you can explicitly set values for enums, but all enums must have initialisers
	// this would save toString() calls though
	Red = "Red",
	Blue = "Blue",
	Black = "Black"
}

enum ColorNum{
	Red,
	Black
}

let color = Color.Red.toString()
let color2 = ColorNum.Red

console.log(color) // Red
console.log(color2) // 0