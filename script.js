const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active') 
    })
    target.classList.add('active')
  })
})


var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.2/chart.min.js';
    document.body.appendChild(script);

var curGraph;

function graph1(){
  let canvas = document.getElementById('myChart');
  let ctx = canvas.getContext("2d");
  if(curGraph){curGraph.destroy();}
  curGraph = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['01.12.21','02.12.21','03.12.21','04.12.21','05.12.21','06.12.21',
          '07.12.21', '08.12.21', '09.12.21', '10.12.21', '11.12.21', '12.12.21', '13.12.21', '14.12.21'],
          datasets: [{
              label: '# of steps',
              data: [3008, 4005, 100, 6341, 4156, 3791, 9815, 3974, 15, 11000, 4791, 1692, 2045, 5813, 7102],
              borderColor: '#FF0000',
              pointBackgroundColor: '#FF0000',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
            y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: '# of steps'
                }
              }
          }
      }
  });
  
}

function graph2(){
    let canvas = document.getElementById('myChart');
    let ctx = canvas.getContext("2d");
    if(curGraph){curGraph.destroy();}
    curGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01.12.21','02.12.21','03.12.21','04.12.21','05.12.21','06.12.21',
            '07.12.21', '08.12.21', '09.12.21', '10.12.21', '11.12.21', '12.12.21', '13.12.21', '14.12.21'],
            datasets: [{
                label: 'Hours of sleep',
                data: [7.5, 6, 7, 7, 8.5, 8, 8, 4, 5.5, 6, 7.5, 8, 9, 4],
                borderColor: '#00FF00',
                pointBackgroundColor: '#00FF00',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Hours of sleep'
                    }
                  }
            }
        }
    });
  
}

function graph3(){
    let canvas = document.getElementById('myChart');
    let ctx = canvas.getContext("2d");
    if(curGraph){curGraph.destroy();}
    curGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01.12.21','02.12.21','03.12.21','04.12.21','05.12.21','06.12.21',
            '07.12.21', '08.12.21', '09.12.21', '10.12.21', '11.12.21', '12.12.21', '13.12.21', '14.12.21'],
            datasets: [{
                label: 'Calories Burned',
                data: [300, 581, 567, 123, 876, 555, 666, 777, 1002, 945, 736, 345, 816, 1123],
                borderColor: '#0000FF',
                pointBackgroundColor: '#0000FF',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Calories Burned'
                    }
                  }
            }
        }
    });
}

function graphUpdateR(){
    curGraph.data.labels = ['15.12.21','16.12.21','17.12.21','18.12.21','19.12.21','20.12.21',
    '21.12.21', '22.12.21', '23.12.21', '24.12.21', '25.12.21', '26.12.21', '27.12.21', '28.12.21'];
    switch (curGraph.data.datasets[0].label){
        case "# of steps":
            curGraph.data.datasets[0].data = [1673, 3531, 2214, 1567, 7426, 2579, 4731, 8457, 100, 1234, 6231, 7263, 1111, 4899];
            break;
        case "Hours of sleep":
            curGraph.data.datasets[0].data = [11, 12, 9,	6,	10,	7,	11,	3,	10,	11,	12,	10,	9,	3];
            break;
        case "Calories Burned":
            curGraph.data.datasets[0].data = [661,	854,	654,	908,	230,	533,	300,	654,	579,	844,	107,	255,	134,	370];
            break;
    }
    curGraph.update();
}

function graphUpdateL(){
    curGraph.data.labels = ['01.12.21','02.12.21','03.12.21','04.12.21','05.12.21','06.12.21',
    '07.12.21', '08.12.21', '09.12.21', '10.12.21', '11.12.21', '12.12.21', '13.12.21', '14.12.21'];
    switch (curGraph.data.datasets[0].label){
        case "# of steps":
            curGraph.data.datasets[0].data = [3008, 4005, 100, 6341, 4156, 3791, 9815, 3974, 15, 11000, 4791, 1692, 2045, 5813, 7102];
            break;
        case "Hours of sleep":
            curGraph.data.datasets[0].data = [7.5, 6, 7, 7, 8.5, 8, 8, 4, 5.5, 6, 7.5, 8, 9, 4];
            break;
        case "Calories Burned":
            curGraph.data.datasets[0].data = [300, 581, 567, 123, 876, 555, 666, 777, 1002, 945, 736, 345, 816, 1123];
            break;
    }
    curGraph.update();
}