jQuery(document).ready(function() {
    "use strict";
    function showTooltip(x, y, contents) {
        jQuery('<div id="tooltip" class="chart-tooltip" >' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 10,
            left: x + 10
        }).appendTo("body").fadeIn(200);
    }

    var uploads = [
        [0, 2],
        [1, 12],
        [2, 8],
        [3, 12],
        [4, 6],
        [5, 12],
        [6, 8],
        [7, 12],
        [8, 10],
        [9, 12],
        [10, 8]
    ];
    var downloads = [
        [0, 0],
        [1, 6],
        [2, 4],
        [3, 6],
        [4, 4],
        [5, 8],
        [6, 4],
        [7, 4],
        [8, 8],
        [9, 6],
        [10, 6]
    ];

    var plot = jQuery.plot(jQuery("#server-chart"), [{
        data: uploads,
        label: "&nbsp;Network Usage",
        color: "#1CAF9A"
    }, {
        data: downloads,
        label: "&nbsp;CPU Load",
        color: "#428BCA"
    }], {
        series: {
            lines: {
                show: false
            },
            splines: {
                show: true,
                tension: 0.5,
                lineWidth: 1,
                fill: 0.45
            },
            shadowSize: 0
        },
        points: {
            show: true
        },
        legend: {
            position: 'nw'
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderColor: '#fcfcfc',
            borderWidth: 1,
            labelMargin: 10,
            backgroundColor: '#fff'
        },
        yaxis: {
            min: 0,
            max: 15,
            color: '#fcfcfc'
        },
        xaxis: {
            color: '#fcfcfc'
        }
    });

    var previousPoint = null;
    jQuery("#server-chart").bind("plothover", function(event, pos, item) {
        jQuery("#x").text(pos.x.toFixed(2));
        jQuery("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                jQuery("#tooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);

                showTooltip(item.pageX, item.pageY,
                    item.series.label + " of " + x + " = " + y);
            }

        } else {
            jQuery("#tooltip").remove();
            previousPoint = null;
        }

    });

    jQuery("#server-chart").bind("plotclick", function(event, pos, item) {
        if (item) {
            plot.highlight(item.series, item.datapoint);
        }
    });

    if (jQuery('#server-chart').length > 0) {
        plot.setData([{
            data: uploads,
            color: '#1ABC9C',
            label: 'Uploads',
            lines: {
                show: false,
                fill: true,
                lineWidth: 1
            },
            splines: {
                show: true
            }
        }, {
            data: downloads,
            color: '#1F7BB6',
            label: 'Downloads',
            lines: {
                show: false,
                fill: true,
                lineWidth: 1
            },
            splines: {
                show: true
            }
        }]);
        plot.draw();
    }

});
