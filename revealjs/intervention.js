String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};


const slides = document.querySelector(".slides");

const t = '<h1 class="menu-title">{}</h1> \\[\\begin{aligned} {} \\end{aligned} \\]' +
          '<countdown time="{}" autostart="no" />';

let problems = [
    [//{ EASY OK
        ["#181848", "#000001", 30, "q", "easy "],
        [ // {
            "24 - 10 + 8 - 5 + 3",
            "24 - (10 + 8 - 5) + 3",
            "20 + 4 - 7 + 9 - 2",
            "20 + 4 - (7 + 9 - 2)",
            "18 - 6 - 5 + 7 + 3",
            "15 + 3 - 9 + 5 + 2",
            "22 - 8 + 6 - 4 + 2",
            "16 - 5 + 3 + 6 - 2",
            "14 + 7 - 8 - 2 + 3",
            "21 - 9 - 3 + 5 + 4",
            "17 + 4 - 6 + 5 - 2",
            "23 - 7 + 6 - 4 + 5",
            "19 + 3 - 7 + 6 + 2",
            "13 - 6 + 4 + 7 - 3",
            "24 - 8 - 4 + 6 + 3",
            "20 + 5 - 9 + 8 - 3",
            "18 - 7 - 3 + 8 + 4",
            "15 + 2 - 6 + 5 + 3",
            "22 - 9 + 7 - 3 - 2",
            "16 - 4 + 6 + 3 + 2",
            "14 + 6 - 8 - 2 + 4",
            "21 - 8 - 5 + 12 + 4",
            "24 - 10 + 7 - 5 + 4",
            "20 + 4 - 6 + 9 - 2",
            "18 - 6 - 3 + 7 + 4",
            "15 + 3 - 8 + 5 + 3",
            "22 - 8 + 5 - 4 + 3",
            "16 - 5 + 2 + 6 - 1",
            "14 + 7 - 9 - 2 + 4",
            "21 - 9 - 4 + 5 + 3",
            "17 + 4 - 7 + 5 - 1",
            "23 - 7 + 5 - 4 + 6",
            "19 + 3 - 6 + 6 + 4",
            "19 + 3 - (6 + 6) + 4",
            "13 - 6 + 3 + 7 - 2",
            "24 - 8 - 3 + 6 + 5",
            "20 + 5 - 8 + 8 - 3",
            "18 - 7 - 2 + 8 + 4",
            "15 + 2 - 5 + 5 + 4",
            "22 - 9 + 6 - 3 - 1",
            "16 - 4 + 5 + 3 + 2",
            "14 + 6 - 7 - 2 + 7",
            "21 - 8 - 4 + 12 + 4",
            "24 - 10 + 6 - 5 + 5",
            "20 + 4 - 5 + 9 - 3",
            "18 - 6 - 4 + 7 + 5",
            "15 + 3 - 7 + 5 + 4",
            "22 - 8 + 4 - 4 + 6",
            "16 - 5 + 4 + 6 - 1",
            "14 + 7 - 8 - 1 + 3",
            "21 - 9 - 2 + 5 + 6",
            "17 + 4 - 5 + 5 - 1",
            "23 - 7 + 4 - 4 + 8"
        ] // }
    ],//}
    [//{ MODERATE OK
        ["#184818", "#001000", 45, "w", "moderate "], 
        [ // {
            "5 + 3 - 2 * 4 / 2 + 1",
            "5 + 3 - 2 ( 4 / 2 + 1)",
            "8 - 2 * 4 + 2 / 2 - 3",
            "8 - 2 ( 4 + 2 ) / 2 - 3",
            "10 + 6 / 3 - 2 + 4",
            "7 - 4 * 2 + 2 + 6",
            "12 + 1 - 12 / 3 - 2",
            "9 - 3 + 6 / 2 * 3",
            "9 - (3 + 6) / 2 * 3",
            "14 * 2 - 5 + 18 / 3",
            "6 - 1 * 5 + 3 / 2",
            "11 + 4 - 6 * 2 + 2",
            "3 * 2 + 8 / 4 - 1",
            "3 * 2 + 8 / (5 - 1)",
            "16 / 2 - 3 + 4 * 6",
            "13 - 5 * 2 + 2 / 2",
            "18 / 2 + 2 - 9 * 2",
            "4 * 2 - 21 / 7 + 1",
            "4 ( 2 - 21 )/ 7 + 1",
            "15 + 5 * 4 / 2 - 1",
            "15 + 5 * 2 / (6 - 1)",
            "9 / 3 - 4 + 6 * 2",
            "24 / 4 - 8 * 2 + 3",
            "10 - 2 * 4 + 27 / 3",
            "6 + 3 * 2 - 1 + 4",
            "6 + 3 * 2 - (1 + 4)",
            "20 / 4 + 7 - 4 * 2",
            "4 * 3 - 5 / 2 + 1",
            "7 + 2 * 3 / 2 - 3",
            "7 + 2 ( 16 / 2^2)- 3",
            "14 / 2 - 3 + 6 * 2",
            "9 - 2 * 4 + 3 / 3",
            "16 * 2 / 4 + 3 - 2",
            "8 / 2 + 2 - 5 * 2",
            "5 * 3 + 4 / 2 - 1",
            "12 - 2 * 3 + 15 / 3",
            "12 / ( 2 - 4 ) + 7 * 2",
            "6 * 2 / 4 + 5 - 1",
            "6 * 2 / ( 4 + 5 - 1)",
            "18 / 3 - 2 + 4 * 5",
            "10 + 21 / 3 - 4 * 2",
            "14 * 2 / 4 - 2 + 3",
            "14 * 2 / 4 - (2 + 3)",
            "9 - 35 / 5 + 6 * 2",
            "13 + 2 * 4 / (7 - 1)",
            "12 / 3 + 2 - 5 * 2",
            "7 * 2 - 12 / 4 + 4",
            "13 * 2 + 2 - 4 * 2",
            "5 * 4 / (3 - 1) + 13",
            "16 + 4 * 3 / 3 - 2",
            "21 - 6 / 3 + 6 * 2",
            "21 - (6 / 3) + 6 * 2",
            "14 / 2 - 3 + 7 * 2",
            "10 * 2 / 4 + 3 - 2",
            "8 + 32 / 4 - 4 * 2",
            "11 * 4 / 2 - 2 + 3",
            "9 - 3 / 2 + 6 * 2",
            "15 + 3 * 4 / 2 - 2",
            "12 / 3 + 12 - 5 * 2",
            "(7 * 2 - 4) / 2 + 4",
            "14 / 2 + 2 - 4 * 2",
        ] // }
    ],//}
    [//{ CHALLENGING
        ["#481818", "#100000", 60, "e", "challenging "], 
        [ // {
            "\\frac{\\sqrt{26 - 10}}{2^3 - 5 + 4}",
            "\\frac{21 + 4 - 7}{ 3^2- 2 }",
            "\\frac{21 + (4 - 7)}{ 3^2- 2 }",
            "18 - \\left(\\frac{4^2 + \\frac{17-5}{8/4}}{\\sqrt{4}}\\right)",
            "9 ( 5 - 2 )- \\frac{15 + 3}{3} ",
            "\\frac{3(18-4^2)}{\\sqrt{11+25}}",
            "\\frac{4(7-4)^2}{\\sqrt{11+25}}",
            "\\frac{ \\sqrt{-5+21} }{ (24-22)^2 }+(-1)",
            "\\frac{4(17-5)}{6} - \\frac{4^2}{2}",
            "\\sqrt{ \\frac{(2-8)^2}{2^3+1}} * (4^2-13)",
            "\\left( \\frac{6(12-5)}{(6 + \\sqrt{29 - 4})} \\right)^3",


            // "22 - 8 \\times 2 + 6 - 4 + 2",
            // "16 - 5 + \\sqrt{9} + 3 + 6 - 2",
            // "14 + 7 - 8 - 2 + 3 \\times 2",
            // "21 - (9 - 3) + 5 \\times 2 - 4",
            // "17 + 4 - 6 \\times 2 + 5 - 2",
            // "23 - 7 + 6 - 4 + \\frac{5}{5}",
            // "19 + 3 - 7 + 6 + 2 \\times 2",
            // "(13 - 6) \\times 4 + 7 - 3",
            // "24 - \\left(\\frac{8}{4}\\right) - 4 + 6 + 3",
            // "20 + 5 - 9 + \\frac{8}{2} - 3",
            // "18 - 7 \\times 2 - 3 + 8 + 4",
            // "\\left(15 + 2\\right) \\times 2 - 6 + 5 + 3",
            // "22 - (9 + 7) - 3 - 2",
            // "16 \\times 2 - 4 + 6 + 3 + 2",
            // "14 + 6 - 8 \\times 2 - 2 + 4",
            // "21 - 8 - 5 \\times 2 + 12 + 4",
            // "\\sqrt{24 - 10} + 7 - 5 + 4",
            // "(20 + 4) - 6 + \\frac{9}{3} - 2",
            // "18 - (6 - 3) \\times 7 + 4",
            // "(15 + 3) - 8 + 5 + 3 \\times 2",
            // "22 - 8 + 5 \\times 2 - 4 + 3",
            // "\\sqrt{16} - 5 + 2 + 6 - 1",
            // "14 + 7 - 9 - 2 + 4",
            // "21 - 9 - 4 + 5 \\times 3",
            // "17 + \\frac{4}{2} - 7 + 5 - 1",
            // "23 - 7 + \\frac{5}{5} - 4 + 6",
            // "19 + 3 - 6 + \\frac{6}{3} + 4",
            // "(13 - 6 + 3) \\times 7 - 2",
            // "\\sqrt{24 - 8} \\div 3 - 2 + 6 + 5",
            // "20 + 5 - 8 \\times 2 + \\frac{8}{2} - 3",
            // "18 - \\frac{7}{2} - 2 + 8 + 4",
            // "\\sqrt{15 + 2} \\times 2 - 5 + 5 + 4",
            // "22 - 9 + 6 - 3 - 1 \\times 3",
            // "(16 - 4) + 5 + 3 \\times 2",
            // "14 + \\frac{6}{2} - 7 - 2 + 7",
            // "21 - (8 - 4) \\times 3 + 4",
            // "\\sqrt{24 - 10} \\times 6 - 5 + 5",
            // "20 + \\frac{4}{2} - 5 \\times 3 + 9",
            // "18 - (6 - 4) \\times 7 + 5",
            // "(15 + 3) - 7 \\times 2 + 5 + 4",
            // "22 - 8 + \\sqrt{16} - 4 + 6",
            // "16 - 5 \\times 2 + 4 + 6 - 1",
            // "(14 + 7) - 8 - 1 + 3 \\times 2",
            // "21 - (9 - 2) + 5 \\times 2 - 6",
            // "17 + 4 - 5 \\times 2 + \\frac{5}{5}",
            // "23 - 7 + \\frac{4}{2} - 4 + 8"
        ] // }
    ],//}
];


problems.forEach(difficulty => {
    let easy = document.createElement("section");
    let gradientCentre = difficulty[0][0];
    let gradientEdge = difficulty[0][1];
    easy.classList.add("easy");
    easy.setAttribute("data-background-gradient", `radial-gradient(${gradientCentre}, ${gradientEdge})`);
    easy.setAttribute("id", difficulty[0][3]);

    

    let exercises = new Set();
    while(exercises.size < 5) {
        exercises.add(Math.floor(Math.random() * (difficulty[1].length-1)));
    }
    exercises = Array.from(exercises)
    
    // let exercises  = Array.from({length:difficulty[1].length}, (v,k) => k);
    // console.log(exercises);

    slides.appendChild(easy);
    exercises.forEach((i, index) => {
        console.log(i, index);
        let p = difficulty[1][i];
        if(p === "") { return }
        p = p.replace(/\*/g, "\\times");
        p = p.replace(/\//g, "\\div");
            let s = document.createElement("section");
            s.innerHTML = t.format(difficulty[0][4]+index, p, difficulty[0][2]);
            easy.appendChild(s);
        });
});
