import React, { useState, useRef } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import katex from "katex";
import "katex/dist/katex.min.css";

const htmlContent = `
  <!DOCTYPE html>
  <html lang='hu'>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 10px;
          hyphens: auto;
        }
        p {
          display: block;
          align-items: center;
          font-size: 20px;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <p>A: Két szabályos pénzérmét egyszerre feldobva, <span>${katex.renderToString(
        "\\frac{1}{2}",
        {
          displayMode: false,
          output: "html",
        }
      )}</span> a valószínűsége, hogy mindkettő fej lesz.</p>
      <p>B: Egy szabályos dobókockával egyszer dobva, <span>${katex.renderToString(
        "\\frac{1}{4}",
        {
          displayMode: false,
          output: "html",
        }
      )}</span> a valószínűsége annak, hogy páros számot kapunk.</p>
      <p>C: Egyjegyű pozitív egész számokból választva, <span>${katex.renderToString(
        "\\frac{1}{3}",
        {
          displayMode: false,
          output: "html",
        }
      )}</span> a valószínűsége, hogy prímszámot kapunk.
      
      <script>
        function updateHeight() {
          const height = document.documentElement.scrollHeight;
          window.ReactNativeWebView.postMessage(height);
        }
        window.onload = updateHeight;
        window.onresize = updateHeight;
      </script>
    </body>
  </html>
`;

const InlineSvgAndText = () => {
  const [webViewHeight, setWebViewHeight] = useState(1);
  const webViewRef = useRef(null);

  const onMessage = (event) => {
    const contentHeight = parseInt(event.nativeEvent.data, 10);
    setWebViewHeight(contentHeight);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={[styles.webview, { height: webViewHeight }]}
        javaScriptEnabled
        onMessage={onMessage}
        automaticallyAdjustContentInsets={false}
        scalesPageToFit={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    width: Dimensions.get("window").width * 0.88,
  },
});

export default InlineSvgAndText;
