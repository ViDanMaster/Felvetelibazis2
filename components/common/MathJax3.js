import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const MathJax = ({ html, ...props }) => {
  const [height, setHeight] = useState(1);

  const handleMessage = (message) => {
    setHeight(Number(message.nativeEvent.data));
  };

  const wrapMathjax = (content) => {
    const mathjaxConfig = `
      <script type="text/javascript">
        MathJax = {
          tex: {
            inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
            displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
            processEscapes: true
          },
          options: {
            renderActions: {
              addedMath: ['highlight']
            }
          },
          loader: {
            load: ['[tex]/ams'],
            loadFailed: [],
          },
          elements: ["math"],
          extensions: ["tex2jax.js"],
          tex2jax: {
            inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
            displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
            processEscapes: true
          }
        };
      </script>
    `;

    return `
      <html lang="hu">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            ${mathjaxConfig}
        </head>
        <body>
          <div id="math">${content}</div>
          <script type="text/javascript">
            (function () {
              var script = document.createElement("script");
              script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js";
              script.async = true;
              script.onload = function () {
                MathJax.typesetPromise().then(() => {
                  const height = document.documentElement.scrollHeight;
                  window.ReactNativeWebView.postMessage(String(height));
                  document.getElementById("math").style.visibility = "visible";
                });
              };
              document.head.appendChild(script);
            })();
          </script>
        </body>
      </html>
    `;
  };

  const wrappedHtml = wrapMathjax(html);

  return (
    <View style={{ height, ...props.style }}>
      <WebView
        scrollEnabled={false}
        onMessage={handleMessage}
        source={{ html: wrappedHtml }}
        {...props}
      />
    </View>
  );
};

export default MathJax;