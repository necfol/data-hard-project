<template>
				<div class="panel panel-default">
				    <div class="panel-heading">
				        <h3 class="panel-title">Line</h3>
				        <div class="actions pull-right">
				            <i class="fa fa-expand"></i>
				            <i class="fa fa-chevron-down"></i>
				            <i class="fa fa-times"></i>
				        </div>
				    </div>
				    <div class="panel-body text-center">
				        <div>
				            <canvas id="line" height="140"></canvas>
				        </div>
				    </div>
				</div>
</template>

<script>
var Chart = require('chart.js')
export default {
  ready () {
    var randomScalingFactor = function () {
      return Math.round(Math.random() * 100)
    }
    var lineChartData = {
      labels: ['二月', '三月', '四月', '五月', '六月', '七月', '八月'],
      datasets: [{
        label: 'Network Usage',
        fillColor: 'rgba(26,188,156,0.5)',
        strokeColor: 'rgba(26,188,156,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }, {
        label: 'CPU Load',
        fillColor: 'rgba(31,123,182,0.5)',
        strokeColor: 'rgba(31,123,182,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }]
    }
    var ctx1 = document.getElementById('line').getContext('2d')
    new Chart(ctx1).Line(lineChartData, {
      responsive: true
    })
  },
  data () {
    return {
      msg: 'Hello Worlddddd!'
    }
  }
}
</script>
