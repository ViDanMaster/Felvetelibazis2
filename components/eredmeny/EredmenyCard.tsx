import React from 'react';
import { Feladat } from "../database/Feladat";
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './EredmenyCard.style';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

interface ResultButtonProps {
    pontszam: number
    index: number,
    feladat: Feladat,
}

const EredmenyCard: React.FC<ResultButtonProps> = ({
    pontszam,
    index,
    feladat
}) => {
    // Pontszám színének meghatározása
    const pontszamColor = pontszam === feladat.Pont ? '#00ff00' : '#ff0000';

    return(
        <TouchableOpacity style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.feladatszamText}>{index}.</Text>
            </View>
            <MathJaxSvg fontSize={18} style={styles.webView}>{`<div class="kerdes-preview">${feladat.Kerdes.substring(0,70)}..</div>`}</MathJaxSvg>
            <View style={[styles.textContainer, {alignItems: 'flex-end'}]}>
                <Text style={[styles.pontszamText, { color: pontszamColor }]}>{pontszam}/{feladat.Pont}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EredmenyCard;