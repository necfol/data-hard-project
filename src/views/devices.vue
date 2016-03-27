<template>
<div class="col-lg-6">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Bar</h3>
            <div class="actions pull-right">
                <i class="fa fa-expand"></i>
                <i class="fa fa-chevron-down"></i>
                <i class="fa fa-times"></i>
            </div>
        </div>
        <div class="panel-body text-center">
            <div>
                <canvas id="bar" height="140"></canvas>
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
    var barChartData = {
      labels: ['二月', '三月', '四月', '五月', '六月', '七月', '八月'],
      datasets: [{
        fillColor: 'rgba(26,188,156,0.5)',
        strokeColor: 'rgba(255,255,255,0.8)',
        highlightFill: 'rgba(26,188,156,1)',
        highlightStroke: 'rgba(255,255,255,0.8)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }, {
        label: 'CPU Load',
        fillColor: 'rgba(31,123,182,0.5)',
        strokeColor: 'rgba(255,255,255,0.8)',
        highlightFill: 'rgba(31,123,182,1)',
        highlightStroke: 'rgba(255,255,255,0.8)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }]
    }
    var ctx2 = document.getElementById('bar').getContext('2d')
    window.myBar = new Chart(ctx2).Bar(barChartData, {
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
