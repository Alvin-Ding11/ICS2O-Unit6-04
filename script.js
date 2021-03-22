let base1 = 0
let height = 0
let base2 = 0
let answer = 0
// Setting the values needs for the equation

document.getElementById('button').addEventListener('click', area)
// Get's the button to work by activating the function once the button is clicked

function area () {
  base1 = document.getElementById('text1').value
  base2 = document.getElementById('text2').value
  height = document.getElementById('text3').value
  // Takes the input from the textbox and sets it into the variable that it is assigned to

  base1 = parseInt(base1)
  base2 = parseInt(base2)
  height = parseInt(height)
  // The program takes in the value as a character and not as a number, so this part is to change all of those characters to numbers to that the equation can take from

  answer = ((base1 + base2) / 2) * height
  // The equation that user came to the website to run

  document.getElementById('para').innerHTML = '<p>' + answer + '</p>'
  // By accessing the equation paragraph I left inside the box, I can output the answer into the paragraph.
}

// CHANGES TO ORIGINAL STORYBORD: This ended up becoming much more simplistic compaired to the storyboard and some intended features were removed. The key ones were a) the lines and arrows and b) the changing letters to the inputed values.
// I chose not to do the lines because I was not capable of efficiently putting in diagonal and vertical lines without completly messing up the setup of my page and spending a considerable amount of time trying to reorganize it.
// I chose not to do the changing letters because authough it would have been a cool option that I will consider in the future, for now I could only change the values whenever the user pressed a button. As enjoyable as it would have been seeing the values change, it would have also been very annoying to press seperate buttons just to see the value of a side show up, the press another button to calculate the area. I found that those said buttons would have been time consuming for both the creater and the user, so I omited it from this website although if I could find a way for the change to occur in real time, I would have certainly mulled it over.
