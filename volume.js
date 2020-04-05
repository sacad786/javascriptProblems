// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

// function volumeOfBox(width, length, height) {
//    return width * length* height
// }

// console.log(volumeOfBox(2,2,2))

function volumeOfBox(width,length,height) {
    let volume = {
        width: width,
        length: length,
        height: height,
      };

      return volume.width * volume.length * volume.height
}


 console.log(volumeOfBox(2,3,5)) 