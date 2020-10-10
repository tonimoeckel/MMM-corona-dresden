# MagicMirror Module: MMM-corona-dresden 

### The module displays the following information:

* Zahl der derzeit angesteckten Personen
* Inzidenz inkl. Chart

![screenshot](https://github.com/tonimoeckel/MMM-corona-dresden/blob/main/screenshot/screen.png)


### Data Source
https://services.arcgis.com/ORpvigFPJUhb8RDF/arcgis/rest/services/corona_DD_7_Sicht/FeatureServer/0/query?f=json&where=Anzeige_Indikator%3D%27x%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&resultOffset=0&resultRecordCount=50&resultType=standard&cacheHint=true

## Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/tonimoeckel/MMM-corona-dresden
````


Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
    {
        module: "MMM-corona-dresden",
        position: "top_left",
        header: "Corona Dresden",
        config: {
            
        }
    },
]
````
