const xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });

  const xValues = ["Social", "Maths", "Science", "Paiting", "Sports"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  new Chart("myChartDoughnut", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Total Improvements by Subjects"
      }
    }
  });
const mobileMenu = document.querySelector('.mobile-menu > i')
const aside = document.querySelector('aside')
mobileMenu.addEventListener('click', (event)=> {
  event.stopPropagation();
  if(aside.style.display == 'block'){
    aside.style.display = 'none';
  }else{
    aside.style.display = 'block';
  }
});
document.querySelector('main').addEventListener('click', ()=>{  
  if(aside.style.display == 'block'){
    aside.style.display = 'none';
  }
  
});