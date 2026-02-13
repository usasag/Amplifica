import { barChart } from "../../variables";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Bar Chart

    Default Class For Mendix Bar Chart Widget
========================================================================== */
export const com_mendix_widget_native_barchart_BarChart = {
    container: {
        // All ViewStyle properties are allowed
        ...barChart.container
    },
    errorMessage: {
        // All TextStyle properties are allowed
        ...barChart.errorMessage
    },
    chart: {
        // All ViewStyle properties are allowed
        ...barChart.chart
    },
    grid: {
        /*
            Allowed properties:
              -  backgroundColor (string)
              -  dashArray (string)
              -  lineColor (string)
              -  padding (number)
              -  paddingBottom (number)
              -  paddingHorizontal (number)
              -  paddingLeft (number)
              -  paddingRight (number)
              -  paddingTop (number)
              -  paddingVertical (number)
              -  width (number)
        */
        ...barChart.grid
    },
    xAxis: {
        /*
            Allowed properties:
              -  color (string)
              -  dashArray (string)
              -  fontFamily (string)
              -  fontSize (number)
              -  fontStyle ("normal" or "italic")
              -  fontWeight ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900")
              -  lineColor (string)
              -  width (number)
              -  label: All TextStyle properties are allowed and:
                    -relativePositionGrid ("bottom" or "right")
        */
        ...barChart.xAxis
    },
    yAxis: {
        /*
            Allowed properties:
              -  color (string)
              -  dashArray (string)
              -  fontFamily (string)
              -  fontSize (number)
              -  fontStyle ("normal" or "italic")
              -  fontWeight ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900")
              -  lineColor (string)
              -  width (number)
              - label: All TextStyle properties are allowed and:
                 -  relativePositionGrid ("top" or "left")
        */
        ...barChart.yAxis
    },
    bars: {
        /*
            Allowed properties:
                -  barColorPalette (string with array of colors separated by ';')
                -  barsOffset (number)
                - customBarStyles:{
                    your_static_or_dynamic_attribute_value:{
                        bar:
                            Allowed properties:
                      -  ending (number)
                      -  barColor (string)
                      -  width (number)
                        label:
                        Allowed properties:
                      -  fontFamily (string)
                      -  fontSize (number)
                      -  fontStyle ("normal" or "italic")
                      -  fontWeight ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900")

                    }
                }
        */
        ...barChart.bars
    },
    legend: {
        container: {
            // All ViewStyle properties are allowed
            ...barChart.legend.container
        },
        item: {
            // All ViewStyle properties are allowed
            ...barChart.legend.item
        },
        indicator: {
            // All ViewStyle properties are allowed
            ...barChart.legend.indicator
        },
        label: {
            // All TextStyle properties are allowed
            ...barChart.legend.label
        }
    }
};
