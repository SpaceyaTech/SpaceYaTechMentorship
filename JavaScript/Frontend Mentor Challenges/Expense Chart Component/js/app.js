import data from "../assets/data/data.json" assert {type: 'json'};
const toolTipTitle = (item) =>{    
    return ''
}
const labelToolTip = (item) =>{
    return `$${item.raw}`
}


const ctx = document.getElementById('chart-section');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(info=>info.day),
    datasets: [{
      data: data.map(info=>info.amount),
      backgroundColor:data.map(info=>info.day === 'wed' ?'#76b5bc':'#ec775f')     
    }]
  },
  options: {
    scales:{
      y:{
        ticks:{
         display:false
        },
        border:{
         display:false
        },
        grid:{
            display:false,
        }
      },
      x:{
        grid:{
            display:false
        },
        ticks:{
            color:"#93867b",
           },
        border:{
            display:false
           },
      }
    },
    
    plugins:{
        legend:{
            display:false
        },
        tooltip:{
            yAlign:'bottom',
            displayColors:false,
            callbacks:{
                title:toolTipTitle,
                label:labelToolTip
            }
        }
    }
  }
});