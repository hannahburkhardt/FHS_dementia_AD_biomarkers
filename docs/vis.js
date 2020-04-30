var spec = {
  "config": {
    "view": {"width": 400, "height": 300},
    "mark": {"tooltip": null},
    "scale": {"bandPaddingInner": 0.1},
    "title": {"anchor": "start"}
  },
  "vconcat": [
    {
      "data": {"url": "scatter_data.json"},
      "mark": "circle",
      "encoding": {
        "tooltip": [
          {
            "type": "quantitative",
            "field": "var1_value",
            "title": "Neuropsych variable value"
          },
          {
            "type": "quantitative",
            "field": "var2_value",
            "title": "Acoustic variable value"
          }
        ],
        "x": {
          "type": "quantitative",
          "field": "var1_value",
          "scale": {"zero": false},
          "title": "Neuropsych variable"
        },
        "y": {
          "type": "quantitative",
          "field": "var2_value",
          "title": "Acoustic variable"
        }
      },
      "transform": [{"filter": {"selection": "selector068"}}]
    },
    {
      "hconcat": [
        {
          "layer": [
            {
              "mark": "rect",
              "encoding": {
                "color": {
                  "type": "quantitative",
                  "field": "correlation",
                  "legend": {"orient": "left"},
                  "scale": {"domain": [-0.45, 0.45], "scheme": "blueorange"}
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "var1_name",
                    "title": "Neuropsych variable"
                  },
                  {
                    "type": "nominal",
                    "field": "var2_name",
                    "title": "Acoustic variable"
                  },
                  {
                    "type": "nominal",
                    "field": "description",
                    "title": "Acoustic variable description"
                  },
                  {
                    "type": "quantitative",
                    "field": "correlation",
                    "format": ".2f"
                  }
                ],
                "x": {
                  "type": "nominal",
                  "axis": {
                    "labelAngle": 310,
                    "labelLimit": 280,
                    "labelOverlap": false
                  },
                  "field": "var1_name",
                  "title": "Neuropsych variable"
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 280,
                    "minExtent": 280,
                    "titleAlign": "right"
                  },
                  "field": "var2_name",
                  "scale": {"rangeStep": 10},
                  "title": "Acoustic variable"
                }
              },
              "selection": {
                "selector068": {
                  "type": "single",
                  "empty": "none",
                  "fields": ["id"],
                  "init": {"id": 11130}
                }
              },
              "title": "Spearman correlation of patient story recall GeMAPS features with Neuropsychological assessment variables                      ",
              "transform": [
                {"filter": {"selection": "selector069"}},
                {"filter": {"selection": "selector070"}},
                {"filter": {"selection": "selector071"}},
                {"filter": {"selection": "selector072"}},
                {"filter": {"selection": "selector073"}}
              ]
            },
            {
              "mark": {"type": "rect", "stroke": "firebrick", "strokeWidth": 4},
              "encoding": {
                "color": {
                  "type": "quantitative",
                  "field": "correlation",
                  "legend": {"orient": "left"},
                  "scale": {"domain": [-0.45, 0.45], "scheme": "blueorange"}
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "var1_name",
                    "title": "Neuropsych variable"
                  },
                  {
                    "type": "nominal",
                    "field": "var2_name",
                    "title": "Acoustic variable"
                  },
                  {
                    "type": "nominal",
                    "field": "description",
                    "title": "Acoustic variable description"
                  },
                  {
                    "type": "quantitative",
                    "field": "correlation",
                    "format": ".2f"
                  }
                ],
                "x": {
                  "type": "nominal",
                  "axis": {
                    "labelAngle": 310,
                    "labelLimit": 280,
                    "labelOverlap": false
                  },
                  "field": "var1_name",
                  "title": "Neuropsych variable"
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 280,
                    "minExtent": 280,
                    "titleAlign": "right"
                  },
                  "field": "var2_name",
                  "scale": {"rangeStep": 10},
                  "title": "Acoustic variable"
                }
              },
              "title": "Spearman correlation of patient story recall GeMAPS features with Neuropsychological assessment variables                      ",
              "transform": [
                {"filter": {"selection": "selector069"}},
                {"filter": {"selection": "selector070"}},
                {"filter": {"selection": "selector071"}},
                {"filter": {"selection": "selector072"}},
                {"filter": {"selection": "selector073"}},
                {"filter": {"selection": "selector068"}}
              ]
            }
          ],
          "data": {"url": "correlation_with_details.json"}
        },
        {
          "vconcat": [
            {
              "mark": "rect",
              "encoding": {
                "opacity": {
                  "value": 0.2,
                  "condition": {"value": 1, "selection": "selector069"}
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 220,
                    "orient": "right",
                    "ticks": false,
                    "title": ""
                  },
                  "field": "Parameter set"
                }
              },
              "selection": {
                "selector069": {"type": "multi", "fields": ["Parameter set"]}
              },
              "title": "Filter by Parameter set:"
            },
            {
              "data": {"name": "data-1368586b8f1107637789e49fa11c9349"},
              "mark": "rect",
              "encoding": {
                "opacity": {
                  "value": 0.2,
                  "condition": {"value": 1, "selection": "selector070"}
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 220,
                    "orient": "right",
                    "ticks": false,
                    "title": ""
                  },
                  "field": "Parameter group"
                }
              },
              "selection": {
                "selector070": {"type": "multi", "fields": ["Parameter group"]}
              },
              "title": "Filter by Parameter group:"
            },
            {
              "data": {"name": "data-997f7f8cec0926bacd54ffe01600ab41"},
              "mark": "rect",
              "encoding": {
                "opacity": {
                  "value": 0.2,
                  "condition": {"value": 1, "selection": "selector071"}
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 220,
                    "orient": "right",
                    "ticks": false,
                    "title": ""
                  },
                  "field": "Low-level descriptor (LLD)"
                }
              },
              "selection": {
                "selector071": {
                  "type": "multi",
                  "fields": ["Low-level descriptor (LLD)"]
                }
              },
              "title": "Filter by Low-level descriptor (LLD):"
            },
            {
              "data": {"name": "data-f53cf3f50df7d16f603791220030617d"},
              "mark": "rect",
              "encoding": {
                "opacity": {
                  "value": 0.2,
                  "condition": {"value": 1, "selection": "selector072"}
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 220,
                    "orient": "right",
                    "ticks": false,
                    "title": ""
                  },
                  "field": "functional"
                }
              },
              "selection": {
                "selector072": {"type": "multi", "fields": ["functional"]}
              },
              "title": "Filter by functional:"
            },
            {
              "data": {"name": "data-5245560aace0dc3cbd01af7218975cdc"},
              "mark": "rect",
              "encoding": {
                "opacity": {
                  "value": 0.2,
                  "condition": {"value": 1, "selection": "selector073"}
                },
                "y": {
                  "type": "nominal",
                  "axis": {
                    "labelLimit": 220,
                    "orient": "right",
                    "ticks": false,
                    "title": ""
                  },
                  "field": "Voiced/Unvoiced regions"
                }
              },
              "selection": {
                "selector073": {
                  "type": "multi",
                  "fields": ["Voiced/Unvoiced regions"]
                }
              },
              "title": "Filter by Voiced/Unvoiced regions:"
            }
          ],
          "data": {"name": "data-76f5f9cb09de6679bbd7058ba4dfdc86"}
        }
      ]
    }
  ],
  "resolve": {"scale": {"color": "independent"}},
  "spacing": 60,
  "$schema": "https://vega.github.io/schema/vega-lite/v3.3.0.json",
  "datasets": {
    "data-76f5f9cb09de6679bbd7058ba4dfdc86": [
      {"Parameter set": "GeMAPS"},
      {"Parameter set": "Extended GeMAPS"}
    ],
    "data-1368586b8f1107637789e49fa11c9349": [
      {"Parameter group": "Frequency related parameters"},
      {"Parameter group": "Spectral parameters"},
      {"Parameter group": "Energy/Amplitude related parameters"},
      {"Parameter group": "Temporal features"},
      {"Parameter group": "Equivalent sound level"}
    ],
    "data-997f7f8cec0926bacd54ffe01600ab41": [
      {"Low-level descriptor (LLD)": "Pitch"},
      {"Low-level descriptor (LLD)": "Formant 1 relative energy"},
      {"Low-level descriptor (LLD)": "Formant 1 bandwidth"},
      {"Low-level descriptor (LLD)": "Formant 1 frequency"},
      {"Low-level descriptor (LLD)": "Formant 2 relative energy"},
      {"Low-level descriptor (LLD)": "Formant 2 bandwidth"},
      {"Low-level descriptor (LLD)": "Formant 2 frequency"},
      {"Low-level descriptor (LLD)": "Formant 3 relative energy"},
      {"Low-level descriptor (LLD)": "Formant 3 bandwidth"},
      {"Low-level descriptor (LLD)": "Formant 3 frequency"},
      {"Low-level descriptor (LLD)": "Harmonics-to-Noise-Ratio"},
      {"Low-level descriptor (LLD)": "Length of voiced/unvoiced regions"},
      {
        "Low-level descriptor (LLD)": "Number of continuous voiced regions per second"
      },
      {"Low-level descriptor (LLD)": "Alpha Ratio"},
      {"Low-level descriptor (LLD)": "Equivalent sounds level"},
      {"Low-level descriptor (LLD)": "Hammarberg Index"},
      {"Low-level descriptor (LLD)": "Jitter"},
      {"Low-level descriptor (LLD)": "Harmonic difference H1–A3"},
      {"Low-level descriptor (LLD)": "Harmonic difference H1–H2"},
      {"Low-level descriptor (LLD)": "Rate of loudness peaks"},
      {"Low-level descriptor (LLD)": "Loudness"},
      {"Low-level descriptor (LLD)": "MFCC"},
      {"Low-level descriptor (LLD)": "Shimmer"},
      {"Low-level descriptor (LLD)": "Spectral Slope"},
      {"Low-level descriptor (LLD)": "Spectral flux"}
    ],
    "data-f53cf3f50df7d16f603791220030617d": [
      {"functional": "Arithmetic mean"},
      {"functional": "Range of 20-th to 80-th percentile"},
      {"functional": "20-th percentile"},
      {"functional": "50-th percentile"},
      {"functional": "80-th percentile"},
      {"functional": "Coefficient of variation (Std. Dev.)"},
      {"functional": "n/a"}
    ],
    "data-5245560aace0dc3cbd01af7218975cdc": [
      {"Voiced/Unvoiced regions": "Voiced"},
      {"Voiced/Unvoiced regions": "Unvoiced"},
      {"Voiced/Unvoiced regions": "n/a"},
      {"Voiced/Unvoiced regions": "Both"}
    ]
  }
}
 var opt = {"renderer": "canvas", "actions": false};  /* Options for the embedding */
 vegaEmbed("#vis", spec, opt);