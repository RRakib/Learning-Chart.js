// Variable Diclaration
let myChart1 = document.querySelector("#canvas1").getContext("2d");
let myChart2 = document.querySelector("#canvas2").getContext("2d");
let myChart3 = document.querySelector("#canvas3").getContext("2d");
let myChart4 = document.querySelector("#canvas4").getContext("2d");
let myChart5 = document.querySelector("#canvas5").getContext("2d");

// Bar Chart
let barChart = new Chart(myChart1, {
    type : "bar", // Bar, horizontalbar , pie , line , doughnut , radar , polarArea
    data : {
        labels : ["Nayan" , "Aulad" , "Imran" , "Rakib" , "Niloy" , "Nahida"],
        datasets:[{
            label : "CGPA",
            borderWidth: 2,
            color: "#E2E2E2",
            borderColor: "gray",
            data : [4 , 3.9 , 3.8 , 3.4 , 3.39 , 3.6],
            backgroundColor: ["#ffeb3b" , "lightgreen", "#9cb8c5", "#53b4e0", "#ea729a" , "#d3dd70"],
        }],
    },
    options : {}
})

// Pie Chart
let pieChart = new Chart(myChart2, {
    type : "pie", // Bar, horizontalbar , pie , line , doughnut , radar , polarArea
    data : {
        labels : ["Nayan" , "Aulad" , "Imran" , "Rakib" , "Niloy" , "Nahida"],
        datasets:[{
            label : "CGPA",
            borderWidth: 2,
            color: "#E2E2E2",
            borderColor: "gray",
            data : [4 , 3.9 , 3.8 , 3.4 , 3.39 , 3.6],
            backgroundColor: ["#ffeb3b" , "lightgreen", "#9cb8c5", "#53b4e0", "#ea729a" , "#d3dd70"],
        }],
    },
    options : {}
})

// line Chart
let lineChart = new Chart(myChart3, {
    type : "line", // Bar, horizontalbar , pie , line , doughnut , radar , polarArea
    data : {
        labels : ["Nayan" , "Aulad" , "Imran" , "Rakib" , "Niloy" , "Nahida"],
        datasets:[{
            label : "CGPA",
            borderWidth: 2,
            color: "#E2E2E2",
            borderColor: "gray",
            data : [4 , 3.9 , 3.8 , 3.4 , 3.39 , 3.6],
            backgroundColor: ["#ffeb3b" , "lightgreen", "#9cb8c5", "#53b4e0", "#ea729a" , "#d3dd70"],
        }],
    },
    options : {}
})

// radar Chart
let radarChart = new Chart(myChart4, {
    type : "radar", // Bar, horizontalbar , pie , line , doughnut , radar , polarArea
    data : {
        labels : ["Nayan" , "Aulad" , "Imran" , "Rakib" , "Niloy" , "Nahida"],
        datasets:[{
            label : "CGPA",
            borderWidth: 2,
            color: "#E2E2E2",
            borderColor: "gray",
            data : [4 , 3.9 , 3.8 , 3.4 , 3.39 , 3.6],
            backgroundColor: ["#ffeb3b" , "lightgreen", "#9cb8c5", "#53b4e0", "#ea729a" , "#d3dd70"],
        }],
    },
    options : {}
})

