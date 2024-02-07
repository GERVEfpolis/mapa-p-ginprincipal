<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa de Calor</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        /* Adicione seus estilos personalizados aqui */

        #map {
            height: 400px;
        }

        h2 {
            text-align: center;
            margin-top: 20px;
        }

        .legenda {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            position: absolute;
            bottom: 20px;
            left: 20px;
            font-size: 14px;
        }

        /* Outros estilos personalizados */
    </style>
</head>
<body>
    <h2>Mapa de Calor</h2>
    <div id="map"></div>
    <div class="legenda">
        <p>Legenda:</p>
        <p>Adicione aqui sua legenda personalizada.</p>
    </div>

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script>
    !(function () {
        var yes = function () { return true; };

        L.GeoJSON.MultiStyle = L.GeoJSON.extend({
            options: {
                styles: [
                    {color: 'black', opacity: 0.15, weight: 9},
                    {color: 'white', opacity: 0.8, weight: 6},
                    {color: '#444', opacity: 1, weight: 2}
                ],
                pointToLayer: function(feature, latlng) {
                    return L.circleMarker(latlng, {radius: 0})
                },
                filters: [yes, yes, yes]
            },

            addData: function(data) {
                if (!this._isAdding) {
                    this._isAdding = true;
                    if (this.options.styles) {
                        var styler = this.options.style,
                            filter = this.options.filter;
                        this.options.styles.forEach(L.bind(function(style, i) {
                            this.options.style = style;
                            if (this.options.filters && this.options.filters[i]) {
                                this.options.filter = this.options.filters[i];
                            }
                            L.GeoJSON.prototype.addData.call(this, data);
                        }, this));
                    }
                    if (this.options.pointToLayers) {
                        this.options.pointToLayers.forEach(L.bind(function(pointToLayer, i) {
                            this.options.pointToLayer = pointToLayer;
                            if (this.options.filters && this.options.filters[i]) {
                                this.options.filter = this.options.filters[i];
                            }
                            L.GeoJSON.prototype.addData.call(this, data);
                        }, this));
                    }
                    this.options.style = styler;
                    this.options.filter = filter;
                    this._isAdding = false;
                } else {
                    L.GeoJSON.prototype.addData.call(this, data);
                }
            }
        });

        L.geoJson.multiStyle = function(data, options) {
            return new L.GeoJSON.MultiStyle(data, options);
        }
    })();
  </script>
        // Seu script JavaScript para criar e interagir com o mapa Leaflet
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicione suas camadas, marcadores, etc., conforme necessário

        // Adicione aqui o script JavaScript fornecido
        !(function () {
            var yes = function () { return true; };

            L.GeoJSON.MultiStyle = L.GeoJSON.extend({
                options: {
                    styles: [
                        {color: 'black', opacity: 0.15, weight: 9},
                        {color
