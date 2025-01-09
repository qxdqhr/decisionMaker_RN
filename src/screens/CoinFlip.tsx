import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
} from 'react-native';
import Coin from '../SingleDecision/Coin/Coin';

const CoinFlip: React.FC = () => {
  const [result, setResult] = useState<'正面' | '反面' | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const flipCoin = () => {
    // 重置动画值
    spinValue.setValue(0);
    setIsSpinning(true);

    // 随机生成结果
    const newResult = Math.random() < 0.5 ? '正面' : '反面';
    
    // 开始动画
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setResult(newResult);
        setIsSpinning(false);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Coin 
        spinValue={spinValue} 
        result={result}
        isSpinning={isSpinning}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={flipCoin}
        disabled={isSpinning}
      >
        <Text style={styles.buttonText}>掷硬币</Text>
      </TouchableOpacity>
      {result && !isSpinning && (
        <Text style={styles.resultText}>
          结果是：{result}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CoinFlip; 