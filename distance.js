/*In this challenge, you have to find the distance between two points placed on a Cartesian plane.
 Knowing the coordinates of both the points, you have to apply the Pythagorean theorem 
 to find the distance between them.

Two points on a Cartesian plane

Given two object literals a and b being the two points coordinates (x and y),
 implement a function that returns the distance between the points, rounded to the nearest thousandth.

Examples
getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095
Notes
Distance formula. Learn how to find the distance between two points by using the distance formula, 
which is an application of the Pythagorean theorem. We can rewrite the Pythagorean theorem as d=√((x2-x1)²+(y2-y1)²)
 to find the distance between any two points

The "distance" is the shortest distance between the two points, or the straight line generated from a to b.*/

function getDistance(obj1,obj2) {

    let m = Math.sqrt((obj2.x - obj1.x)**2 + (obj2.y - obj1.y)**2)

    return m.toFixed(3);
}

console.log(getDistance({x: -2, y: 1}, {x: 4, y: 3}));


