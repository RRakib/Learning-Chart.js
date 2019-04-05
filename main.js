let myChart = document.querySelector("#canvas").getContext("2d");

let allChart = new Chart(myChart, {
    type : "bar", // Bar, horizontalbar , pie , line , doughnut , radar , polarArea
    data : {
        labels : ["Nayan" , "Aulad" , "Imran" , "Rakib" , "Niloy"],
        datasets:[{
            label : "CGPA",
            data : [4 , 3.9 , 3.8 , 3.4 , 3.3]
        }]
    },
    options : {}
})