import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const defaultOptions = {
    showMathMenu: false,
	messageStyle: 'none',
	extensions: ['tex2jax.js'],
    /*"HTML-CSS": {
        availableFonts : ["STIX"],
        preferredFont : "STIX",
        webFont : "STIX-Web",
        imageFont : null
    },*/
	jax: ['input/TeX', 'output/HTML-CSS'],
	tex2jax: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		displayMath: [['$$', '$$'], ['\\[', '\\]']],
		processEscapes: true,
	},
	TeX: {
		extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
	}
};

const css = `
html{
  margin: 0;
  user-select: none; 
  hyphens: auto; 
  overflow: hidden;
}
body{
  font-family: Quicksand;
  font-weight: normal;
  font-style: normal;
}
.kerdes{
  font-size: 6vw;
  text-indent: 7.5vw;
}
.kerdes-preview{
	font-size: 6vw;
	text-align: center;
  }
`;

/**
 * Egy React Native komponens, amely a MathJax matematikai képletek megjelenítését teszi lehetővé.
 *
 * @class MathJax
 * @extends React.Component
 */
class MathJax extends React.Component {
	/**
	 * @constructor
	 * @param {Parameters} props - A komponens tulajdonságai.
	 */
	constructor(props) {
	  super(props);
	  this.state = {
		height: 1
	  };
	}
  
	/**
	 * Kezeli az üzenetet, amelyet a WebView küld a magasság beállításához.
	 *
	 * @param {object} message - Az üzenet objektum.
	 */
	handleMessage(message) {
	  this.setState({
		height: Number(message.nativeEvent.data)
	  });
	}
  
	/**
	 * Beburkolja a MathJax-t a megadott tartalommal együtt.
	 *
	 * @param {string} content - A MathJax tartalma.
	 * @returns {string} Az összeállított HTML kód.
	 */
	wrapMathjax(content) {
	  const options = JSON.stringify(
		Object.assign({}, defaultOptions)
	  );
  
	  return `
		<html lang="hu">
		  <head>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
			<script type="text/x-mathjax-config">
			  MathJax.Hub.Config(${options});
			  MathJax.Hub.Queue(function() {
				var height = document.documentElement.scrollHeight;
				window.ReactNativeWebView.postMessage(String(height));
				document.getElementById("formula").style.visibility = '';
			  });
			</script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"></script>
  
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand">
			<style>${css}</style>
		  </head>
		  <body>
			<div id="formula" style="visibility: hidden;">
			  ${content}
			</div>
		  </body>
		</html>
	  `;
	}
  
	/**
	 * Rendereli a komponenst.
	 *
	 * @returns {JSX.Element} A renderelt komponens.
	 */
	render() {
		const html = this.wrapMathjax(this.props.html);

		// Create new props without `props.html` field. Since it's deprecated.
		const props = Object.assign({}, this.props, { html: undefined });

		return (
			<View style={{ height: this.state.height, ...props.style }}>
				<WebView
                    textZoom={100}
                    showsVerticalScrollIndicator={false}
					scrollEnabled={false}
					overScrollMode='never'
					onMessage={this.handleMessage.bind(this)}
					source={{ html }}
					{...props}
				/>
			</View>
		);
	}
}

export default MathJax;