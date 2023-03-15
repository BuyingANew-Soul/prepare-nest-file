// create HTML window with a document and an html root node
const { createHTMLWindow } = require('svgdom')
const window = createHTMLWindow()

// // create XML window with a document and a given xml root node
// const { createWindow } = require('svgdom')
// const window = createWindow(namespaceURI, rootNode)
// // e.g. createWindow('http://www.w3.org/1998/Math/MathML', 'math')


var string = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="7000" height="8000" viewBox="0 0 7000 8000">
	<g id="XL_p7_outline_4_group" >
	<g transform="" id="XL_P7_Outline_4_">
		<polygon style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" points="4.67,102.42 18.98,93.92 22.11,92.13 25.23,90.34 28.81,87.66 31.94,85.87 35.96,84.52 39.54,81.84 42.67,80.05 46.25,77.37 49.38,75.58 52.95,72.89 56.53,70.21 59.66,68.42 63.24,65.73 66.81,63.05 70.39,60.37 73.07,57.24 76.65,54.55 80.23,51.87 82.91,48.74 85.59,45.61 89.17,42.92 91.85,39.79 94.53,36.66 97.21,33.53 100.34,29.5 103.03,26.37 105.71,23.24 108.39,20.11 110.18,16.53 113.31,12.51 115.1,8.93 117.78,5.8 119.57,2.22 121.81,-2.25 124.49,-5.38 126.28,-8.96 128.07,-12.54 129.86,-16.11 132.09,-20.59 132.98,-24.61 134.77,-28.19 136.56,-31.77 138.35,-35.35 139.24,-39.37 141.48,-43.84 142.38,-47.87 144.16,-51.45 145.06,-55.47 145.95,-59.49 147.74,-63.07 148.64,-67.1 149.53,-71.12 150.87,-73.81 151.77,-77.83 152.66,-81.85 153.56,-85.88 154.45,-89.9 156.24,-93.48 156.69,-96.61 133.89,-102.42 132.1,-101.08 131.21,-99.29 129.42,-97.95 127.63,-96.61 125.84,-95.26 124.05,-93.92 122.71,-93.47 120.92,-92.13 119.14,-90.79 117.35,-89.45 114.66,-88.55 112.88,-87.21 111.54,-86.76 108.85,-85.87 107.06,-84.53 104.38,-83.63 102.59,-82.29 99.91,-81.39 97.68,-81.39 94.99,-80.5 93.21,-79.16 90.52,-78.26 87.84,-77.37 85.61,-77.37 82.92,-76.47 80.24,-75.58 78.01,-75.57 76.22,-74.23 73.54,-73.34 71.3,-73.34 67.72,-72.89 64.15,-72.44 61.02,-70.65 57.44,-70.2 53.87,-69.76 51.18,-68.86 48.05,-69.31 44.48,-68.86 40.9,-68.41 38.22,-67.52 34.64,-67.07 31.07,-66.62 27.49,-66.17 24.36,-66.62 20.78,-66.17 19.44,-65.72 18.55,-66.17 17.21,-65.72 14.97,-65.72 14.08,-66.17 12.74,-65.72 11.4,-65.27 10.5,-65.72 8.27,-65.72 6.93,-65.27 6.03,-65.72 4.69,-65.27 3.8,-65.72 1.56,-65.72 0.22,-65.27 -0.67,-65.72 -2.02,-65.27 -3.36,-64.82 -5.14,-65.72 -6.48,-65.27 -7.83,-64.82 -8.72,-65.27 -10.06,-64.82 -11.85,-65.71 -13.19,-65.27 -14.53,-64.82 -15.43,-65.26 -16.77,-64.82 -19,-64.82 -19.9,-65.26 -23.47,-64.82 -26.6,-65.26 -29.73,-65.71 -33.31,-65.26 -36.44,-65.71 -39.57,-66.15 -43.14,-65.7 -47.17,-66.6 -50.3,-67.04 -53.42,-67.49 -56.55,-67.94 -59.68,-68.38 -62.81,-68.83 -66.84,-69.72 -69.96,-70.17 -72.2,-70.17 -75.33,-70.61 -77.12,-71.51 -80.25,-71.95 -82.48,-71.95 -84.27,-72.85 -87.4,-73.3 -89.63,-73.29 -92.32,-74.64 -94.55,-74.63 -97.23,-75.98 -99.02,-76.87 -102.15,-77.32 -104.83,-78.66 -106.62,-79.55 -108.85,-79.55 -110.64,-80.44 -113.32,-81.78 -115.11,-82.68 -116.9,-83.57 -118.69,-84.47 -120.48,-85.36 -123.16,-86.7 -124.5,-88.49 -126.29,-89.38 -128.08,-90.28 -129.42,-92.07 -131.21,-92.96 -132.55,-94.75 -134.33,-95.64 -156.69,-88.93 -156.24,-85.35 -154.45,-82.22 -153.11,-78.2 -151.77,-74.17 -151.32,-70.59 -149.98,-66.57 -148.2,-63.44 -146.85,-59.42 -145.52,-55.39 -144.18,-51.37 -143.73,-47.79 -141.94,-44.66 -139.71,-40.19 -138.37,-36.17 -136.58,-33.04 -135.24,-29.01 -133.9,-24.99 -132.11,-21.86 -129.87,-17.39 -128.09,-14.26 -125.85,-9.79 -124.06,-6.66 -121.38,-3.08 -120.04,0.94 -117.36,4.52 -115.57,7.65 -112.89,11.23 -110.21,14.8 -107.53,18.38 -104.85,21.96 -103.06,25.09 -100.38,28.66 -97.25,31.35 -94.56,34.92 -91.44,37.6 -88.75,41.18 -85.63,43.86 -81.6,46.99 -78.92,50.57 -75.79,53.25 -72.66,55.93 -69.53,58.62 -66.4,61.3 -61.93,63.53 -58.81,66.21 -55.68,68.9 -52.1,70.68 -48.97,73.37 -44.5,75.6 -40.93,77.39 -37.8,80.07 -34.22,81.86 -30.64,83.65 -27.07,85.43 -23.49,87.22 -19.92,89.01 -16.34,90.8 -12.76,92.59 -9.19,94.37 4.67,102.42 "></polygon>
	</g>
	<g transform="" id="XL_C1_90_">
		<polygon style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(35,180,196); fill-rule: nonzero; opacity: 1;" points="4.67,102.42 18.98,93.92 22.11,92.13 25.23,90.34 28.81,87.66 31.94,85.87 35.96,84.52 39.54,81.84 42.67,80.05 46.25,77.37 49.38,75.58 52.95,72.89 56.53,70.21 59.66,68.42 63.24,65.73 66.81,63.05 70.39,60.37 73.07,57.24 76.65,54.55 80.23,51.87 82.91,48.74 85.59,45.61 89.17,42.92 91.85,39.79 94.53,36.66 97.21,33.53 100.34,29.5 103.03,26.37 105.71,23.24 108.39,20.11 110.18,16.53 113.31,12.51 115.1,8.93 117.78,5.8 119.57,2.22 121.81,-2.25 124.49,-5.38 126.28,-8.96 128.07,-12.54 129.86,-16.11 132.09,-20.59 132.98,-24.61 134.77,-28.19 136.56,-31.77 138.35,-35.35 139.24,-39.37 141.48,-43.84 142.38,-47.87 144.16,-51.45 145.06,-55.47 145.95,-59.49 147.74,-63.07 148.64,-67.1 149.53,-71.12 150.87,-73.81 151.77,-77.83 152.66,-81.85 153.56,-85.88 154.45,-89.9 156.24,-93.48 156.69,-96.61 133.89,-102.42 132.1,-101.08 131.21,-99.29 129.42,-97.95 127.63,-96.61 125.84,-95.26 124.05,-93.92 122.71,-93.47 120.92,-92.13 119.14,-90.79 117.35,-89.45 114.66,-88.55 112.88,-87.21 111.54,-86.76 108.85,-85.87 107.06,-84.53 104.38,-83.63 102.59,-82.29 99.91,-81.39 97.68,-81.39 94.99,-80.5 93.21,-79.16 90.52,-78.26 87.84,-77.37 85.61,-77.37 82.92,-76.47 80.24,-75.58 78.01,-75.57 76.22,-74.23 73.54,-73.34 71.3,-73.34 67.72,-72.89 64.15,-72.44 61.02,-70.65 57.44,-70.2 53.87,-69.76 51.18,-68.86 48.05,-69.31 44.48,-68.86 40.9,-68.41 38.22,-67.52 34.64,-67.07 31.07,-66.62 27.49,-66.17 24.36,-66.62 20.78,-66.17 19.44,-65.72 18.55,-66.17 17.21,-65.72 14.97,-65.72 14.08,-66.17 12.74,-65.72 11.4,-65.27 10.5,-65.72 8.27,-65.72 6.93,-65.27 6.03,-65.72 4.69,-65.27 3.8,-65.72 1.56,-65.72 0.22,-65.27 -0.67,-65.72 -2.02,-65.27 -3.36,-64.82 -5.14,-65.72 -6.48,-65.27 -7.83,-64.82 -8.72,-65.27 -10.06,-64.82 -11.85,-65.71 -13.19,-65.27 -14.53,-64.82 -15.43,-65.26 -16.77,-64.82 -19,-64.82 -19.9,-65.26 -23.47,-64.82 -26.6,-65.26 -29.73,-65.71 -33.31,-65.26 -36.44,-65.71 -39.57,-66.15 -43.14,-65.7 -47.17,-66.6 -50.3,-67.04 -53.42,-67.49 -56.55,-67.94 -59.68,-68.38 -62.81,-68.83 -66.84,-69.72 -69.96,-70.17 -72.2,-70.17 -75.33,-70.61 -77.12,-71.51 -80.25,-71.95 -82.48,-71.95 -84.27,-72.85 -87.4,-73.3 -89.63,-73.29 -92.32,-74.64 -94.55,-74.63 -97.23,-75.98 -99.02,-76.87 -102.15,-77.32 -104.83,-78.66 -106.62,-79.55 -108.85,-79.55 -110.64,-80.44 -113.32,-81.78 -115.11,-82.68 -116.9,-83.57 -118.69,-84.47 -120.48,-85.36 -123.16,-86.7 -124.5,-88.49 -126.29,-89.38 -128.08,-90.28 -129.42,-92.07 -131.21,-92.96 -132.55,-94.75 -134.33,-95.64 -156.69,-88.93 -156.24,-85.35 -154.45,-82.22 -153.11,-78.2 -151.77,-74.17 -151.32,-70.59 -149.98,-66.57 -148.2,-63.44 -146.85,-59.42 -145.52,-55.39 -144.18,-51.37 -143.73,-47.79 -141.94,-44.66 -139.71,-40.19 -138.37,-36.17 -136.58,-33.04 -135.24,-29.01 -133.9,-24.99 -132.11,-21.86 -129.87,-17.39 -128.09,-14.26 -125.85,-9.79 -124.06,-6.66 -121.38,-3.08 -120.04,0.94 -117.36,4.52 -115.57,7.65 -112.89,11.23 -110.21,14.8 -107.53,18.38 -104.85,21.96 -103.06,25.09 -100.38,28.66 -97.25,31.35 -94.56,34.92 -91.44,37.6 -88.75,41.18 -85.63,43.86 -81.6,46.99 -78.92,50.57 -75.79,53.25 -72.66,55.93 -69.53,58.62 -66.4,61.3 -61.93,63.53 -58.81,66.21 -55.68,68.9 -52.1,70.68 -48.97,73.37 -44.5,75.6 -40.93,77.39 -37.8,80.07 -34.22,81.86 -30.64,83.65 -27.07,85.43 -23.49,87.22 -19.92,89.01 -16.34,90.8 -12.76,92.59 -9.19,94.37 4.67,102.42 "></polygon>
	</g>
	<g transform="" style="">
	<text xml:space="preserve" font-family="Times New Roman" font-size="16" font-style="normal" font-weight="normal" style="stroke: none; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; white-space: pre;><tspan x="-72.66" y="5.03">Code:BR 5089, Size:L</tspan></text>			
	</g>
	</g>
    </svg>
`

var parser = new HTMLParser(string, 'svg');