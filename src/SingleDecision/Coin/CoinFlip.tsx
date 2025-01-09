import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Coin from './Coin';

const CoinFlip: React.FC = () => {
  const [result, setResult] = useState<'正面' | '反面' | null>(null);
  const spinValue = useRef(new Animated.Value(0)).current;

  const flipCoin = () => {
    spinValue.setValue(0);
    setResult(null);
    
    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 4,
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }),
      Animated.timing(spinValue, {
        toValue: 5,
        duration: 500,
        easing: Easing.bezier(0, 0.1, 0.1, 1),
        useNativeDriver: true,
      })
    ]).start(() => {
      const random = Math.random();
      setResult(random < 0.5 ? '正面' : '反面');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.coinSection}>
          <Coin spinValue={spinValue} result={result} />
        </View>

        <View style={styles.resultSection}>
          {result && (
            <Text style={styles.resultText}>
              结果是：{result}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity 
          style={styles.flipButton} 
          onPress={flipCoin}
          activeOpacity={0.7}>
          <Text style={styles.flipButtonText}>抛硬币</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  coinSection: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultSection: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonSection: {
    padding: 20,
    alignItems: 'center',
  },
  flipButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flipButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CoinFlip; 