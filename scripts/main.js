var CustomerData=[{latitude:"52.986375",user_id:12,name:"Christina McArdle",longitude:"-6.043701"},{latitude:"51.92893",user_id:1,name:"Alice Cahill",longitude:"-10.27699"},{latitude:"51.8856167",user_id:2,name:"Ian McArdle",longitude:"-10.4240951"},{latitude:"52.3191841",user_id:3,name:"Jack Enright",longitude:"-8.5072391"},{latitude:"53.807778",user_id:28,name:"Charlie Halligan",longitude:"-7.714444"},{latitude:"53.4692815",user_id:7,name:"Frank Kehoe",longitude:"-9.436036"},{latitude:"54.0894797",user_id:8,name:"Eoin Ahearn",longitude:"-6.18671"},{latitude:"53.038056",user_id:26,name:"Stephen McArdle",longitude:"-7.653889"},{latitude:"54.1225",user_id:27,name:"Enid Gallagher",longitude:"-8.143333"},{latitude:"53.1229599",user_id:6,name:"Theresa Enright",longitude:"-6.2705202"},{latitude:"52.2559432",user_id:9,name:"Jack Dempsey",longitude:"-7.1048927"},{latitude:"52.240382",user_id:10,name:"Georgina Gallagher",longitude:"-6.972413"},{latitude:"53.2451022",user_id:4,name:"Ian Kehoe",longitude:"-6.238335"},{latitude:"53.1302756",user_id:5,name:"Nora Dempsey",longitude:"-6.2397222"},{latitude:"53.008769",user_id:11,name:"Richard Finnegan",longitude:"-6.1056711"},{latitude:"53.1489345",user_id:31,name:"Alan Behan",longitude:"-6.8422408"},{latitude:"53",user_id:13,name:"Olive Ahearn",longitude:"-7"},{latitude:"51.999447",user_id:14,name:"Helen Cahill",longitude:"-9.742744"},{latitude:"52.966",user_id:15,name:"Michael Ahearn",longitude:"-6.463"},{latitude:"52.366037",user_id:16,name:"Ian Larkin",longitude:"-8.179118"},{latitude:"54.180238",user_id:17,name:"Patricia Cahill",longitude:"-5.920898"},{latitude:"53.0033946",user_id:39,name:"Lisa Ahearn",longitude:"-6.3877505"},{latitude:"52.228056",user_id:18,name:"Bob Larkin",longitude:"-7.915833"},{latitude:"54.133333",user_id:24,name:"Rose Enright",longitude:"-6.433333"},{latitude:"55.033",user_id:19,name:"Enid Cahill",longitude:"-8.112"},{latitude:"53.521111",user_id:20,name:"Enid Enright",longitude:"-9.831111"},{latitude:"51.802",user_id:21,name:"David Ahearn",longitude:"-9.442"},{latitude:"54.374208",user_id:22,name:"Charlie McArdle",longitude:"-8.371639"},{latitude:"53.74452",user_id:29,name:"Oliver Ahearn",longitude:"-7.11167"},{latitude:"53.761389",user_id:30,name:"Nick Enright",longitude:"-7.2875"},{latitude:"54.080556",user_id:23,name:"Eoin Gallagher",longitude:"-6.361944"},{latitude:"52.833502",user_id:25,name:"David Behan",longitude:"-8.522366"}],ArrayUtils=function(){"use strict";var e={},t=function(e){return"[object Array]"===Object.prototype.toString.apply(e)},n=function(e){if(!e)return[];var n=[],i=function a(e){for(var i=0;i<e.length;i++){var u=e[i];u&&(t(u)?a(u):"number"==typeof u&&u%1===0&&n.push(u))}};return i(e),n};return e.isArray=function(e){return t(e)},e.flattenArray=function(e){return n(e)},e}(),GeoUtils=function(){"use strict";var e=6378.137,t=6335.439,n=(2*e+t)/3,i={},a=function(e,t){return Math.abs(e-t)},u=function(e){return e*(Math.PI/180)},r=function(e){return e.lat&&"number"==typeof e.lat&&e.lng&&"number"==typeof e.lng},l=function(e,t){if(!r(e)||!r(t))return null;var i=e.lat,l=e.lng,d=t.lat,o=t.lng,s=a(i,d),g=a(l,o),h=2*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(i)*Math.cos(d)*Math.pow(Math.sin(g/2),2))),c=u(h),m=c*n;return m};return i.calculateDistanceBetweenPoints=function(e,t){return l(e,t)},i}();!function(e,t,n,i){"use strict";function a(){l(),o()}var u=[[1,2,[3]],4],r={lat:53.3381985,lng:-6.2592576},l=function(){var t=e.flattenArray(u);i("#nested-array").append(JSON.stringify(u)),i("#flattened-array").append(JSON.stringify(t))},d=function(e){for(var t=e.sort(function(e,t){return e.user_id<t.user_id?-1:e.user_id>t.user_id?1:0}),n="",a=0;a<t.length;a++){var u=t[a];n+='<tr><th scope="row">'+u.user_id+"</th><td>"+u.name+"</td><td>"+u.distance+" km</td></tr>"}i("#customer-list").append(n)},o=function(){for(var e=[],i=0;i<n.length;i++){var a={lat:parseFloat(n[i].latitude),lng:parseFloat(n[i].longitude)},u=t.calculateDistanceBetweenPoints(r,a);u<=100&&(e.push(n[i]),e[e.length-1].distance=Math.round(10*u)/10)}d(e)};a()}(ArrayUtils,GeoUtils,CustomerData,$);
