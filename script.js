let base1 = 0
let height = 0
let base2 = 0
let answer = 0

document.getElementById('button').addEventListener('click', area)

function area () {
  base1 = document.getElementById('text1').value
  base2 = document.getElementById('text2').value
  height = document.getElementById('text3').value

  base1 = parseInt(base1)
  base2 = parseInt(base2)
  base3 = parseInt(height)

  answer = ((base1 + base2) / 2)*height 
  document.getElementById('para').innerHTML = "<p>" + answer + "</p>";
}
