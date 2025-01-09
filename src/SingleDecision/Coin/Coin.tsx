import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CoinProps {
  spinValue: Animated.Value;
  result: '正面' | '反面' | null;
  isSpinning?: boolean;
}

const Coin: React.FC<CoinProps> = ({ spinValue, result, isSpinning = false }) => {
  const [showIcon, setShowIcon] = useState(!isSpinning);

  useEffect(() => {
    if (isSpinning) {
      setShowIcon(false);
    } else {
      // 只在非旋转状态时显示图标
      const timeout = setTimeout(() => {
        setShowIcon(true);
      }, 100); // 添加小延迟确保动画完全结束

      return () => clearTimeout(timeout);
    }
  }, [isSpinning]);

  const rotationStyle = {
    transform: [
      {
        rotateY: spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '1080deg']
        })
      }
    ]
  };

  // 根据结果选择显示的图标
  let iconName = 'question-circle';
  switch (result) {
    case '反面':
      iconName = 'people';
      break;
    case '正面':
      iconName = 'person-circle';
      break;
    case null:
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.coinWrapper}>
        <View style={styles.animationContainer}>
          <Animated.View style={[styles.coin, rotationStyle]}>
            {showIcon && !isSpinning && (
              <Icon name={iconName} size={80} color="#B8860B" />
            )}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: [{ perspective: 1000 }]
  },
  animationContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  coin: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default Coin; 