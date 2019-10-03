// Function to choose the color of the LA listing layer
function chooseColorListing(price) {
  if (price <= 300000) {
    return "#CAC9FF"
  }
  else if (price > 300000 & price <= 600000) {
    return "#A5A2FF"
  }
  else if (price > 600000 & price <= 900000) {
    return "#7975FF"
  }
  else if (price > 900000 & price <= 1200000) {
    return "#4640FF"
  }
  else if (price > 1200000) {
    return "#0800F5"
  }
  else {
    return "rgba(255,255,255,0)"
  }
};

// Function to choose the color of the LA rental layer
function chooseColorRental(price) {
  if (price > 1000 & price <=1500) {
    return "#FFC9C9"
  }
  else if (price > 1500 & price <= 2000) {
    return "#FF9F9F"
  }
  else if (price > 2000 & price <= 2500) {
    return "#FF6565"
  }
  else if (price > 2500 & price <= 3000) {
    return "#FF3636"
  }
  else if (price > 3000 & price <= 3500) {
    return "#FF0000"
  }
  else if (price > 3500) {
    return "#D70000"
  }
  else {
    return "rgba(255,255,255,0)"
  }
};

// link to the data which is all in one geojson
var link = "static/data/Zip_Codes_LA_County1.geojson";

// get all the geojson data and DO EVERYTHING
data = d3.json(link, function(data) {

  // creating the LA Zip Codes base layer
  base = L.geoJson(data, {
    
      // styyyyyle
      style: function(feature) {
        return {
          color: "black",
          weight: .6,
          fillOpacity:0
        }
      },
    
      // mouse over feature
      onEachFeature: function(feature, layer) {
        if (feature.Median_Price_Float != "NONE") {
          layer.on({
            mouseover: function(event) {
              layer = event.target;
              layer.setStyle({
                fillOpacity: 1
              });
            },
            mouseout: function(event) {
              layer = event.target;
              layer.setStyle({
                fillOpacity: 0
              });
            },
          });
      }}
    }).addTo(map);
  
  // creating the listing price layer
  listing_price = L.geoJson(data, {

      // styyyyyle
      style: function(feature) {
        return {
          color: 'black',
          fillColor: chooseColorListing(feature.Median_Price_Float),
          fillOpacity: 0.7,
          weight: .6
        }
      },
      
      // mouse over feature 
      onEachFeature: function(feature, layer) {
        // Set mouse events to change map styling
        if (feature.Median_Price_Float != "NONE") {
          layer.on({
            mouseover: function(event) {
              layer = event.target;
              layer.setStyle({
                fillOpacity: 1
              });
            },
            mouseout: function(event) {
              layer = event.target;
              layer.setStyle({
                fillOpacity: 0.7
              });
            },
            click: function(event) {
              map.fitBounds(event.target.getBounds());
            }
          });
          
          // Pop up that  show the median price and zipcode
          layer.bindPopup("<h1>" + feature.properties.ZIPCODE + "</h1> <hr> <h2>" + feature.Median_Price + "</h2>");
          
        }}
});

// creating the rental price layer
rental_price = L.geoJson(data, {
        // styyyyyle
        style: function(feature) {
          return {
            color: 'black',
            fillColor: chooseColorRental(feature.Median_Rental_Price),
            fillOpacity: 0.7,
            weight: .6
          }
        },

        // mouseover feature
        onEachFeature: function(feature, layer) {
          if (feature.Median_Price_Float != "NONE") {
            layer.on({
              mouseover: function(event) {
                layer = event.target;
                layer.setStyle({
                  fillOpacity: 1
                });
              },
              mouseout: function(event) {
                layer = event.target;
                layer.setStyle({
                  fillOpacity: 0.7
                });
              },
              click: function(event) {
                map.fitBounds(event.target.getBounds());
              }
            });
            // popup to show zipcode and median rental price
            layer.bindPopup("<h1>" + feature.properties.ZIPCODE + "</h1> <hr> <h2>" + feature.Median_Rental_Nice + "</h2>");

          }}
});

// add the controller for the layers
L.control.layers({
  "Zip Codes of LA": base,
  "Median Listing Price 2017": listing_price,
  "Median Rental Price 2017": rental_price,
}
,null,
{collapsed:false}
).addTo(map);
});

// Adding tile layer
var base_layer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// creating the layer group for the two layers
var listing_price = L.layerGroup(listing_price)
var rental_price = L.layerGroup(rental_price)

// Creating map object
var map = L.map("map", {
  center: [34.052235, -118.243683],
  zoom: 9,
  layers: [base_layer,listing_price,rental_price]
});

// creating a legend for the listing data
var legendListing = L.control({position: 'bottomright'});

      legendListing.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
        price_level = [0,300000,600000,900000,1200000],
        price_level_nice = ["$0","$300,000","$600,000","$900,000","$1,200,000"],
        labels = ['<strong> Median Listing Price </strong>'];

      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < price_level.length; i++) {
        labels.push(
          '<i style="background:' + chooseColorListing(price_level[i] + 150000) + '"></i> ' +
          price_level_nice[i] + (price_level_nice[i + 1] ? '&ndash;' + price_level_nice[i + 1]  : '+'));
      }
      div.innerHTML = labels.join('<br>')
      return div;
      }

      legendListing.addTo(map);
  
// creating a legend for the rental data
    var legendRental = L.control({position: 'bottomleft'});

    legendRental.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
      price_level = [1500,2000,2500,3000,3500],
      price_level_nice = ["$1,000","$1,500","$2,000","$2,500","$3,000","$3,500"],
      labels = ['<strong> Median Rental Price </strong>'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < price_level.length; i++) {
      labels.push(
        '<i style="background:' + chooseColorRental(price_level[i] + 500) + '"></i> ' +
        price_level_nice[i] + (price_level_nice[i + 1] ? '&ndash;' + price_level_nice[i + 1]  : '+'));

      }
    div.innerHTML = labels.join('<br>')
    return div;
    }

    legendRental.addTo(map);

  



