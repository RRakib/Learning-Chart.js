let myChart = document.querySelector("#canvas").getContext("2d");

let allChart = new Chart(myChart, {
    type : "bar", // Bar, horizontalbar , pie , line , doughnut , radar , polarArea
    data : {
        labels : ["Nayan" , "Aulad" , "Imran" , "Rakib" , "Niloy"],
        datasets:[{
            label : "CGPA",
            borderWidth: 2,
            color: "#E2E2E2",
            borderColor: "gray",
            data : [4 , 3.9 , 3.8 , 3.4 , 3.39],
            backgroundColor: ["#ffeb3b" , "lightgreen", "#9cb8c5", "#53b4e0", "#ea729a"],
        }],
    },
    options : {}
})