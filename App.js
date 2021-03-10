/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
const App = () => {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);

  const configureNewGameHandler = ()=>{
    setGuessRounds(0);
    setUserNumber(null);
  }
  const startGameHandler = selectedNumber =>{
    setUserNumber(selectedNumber);
  }
  const gameOverHandler = numofRounds =>{
    setGuessRounds(numofRounds);
  }
  let content =<StartGameScreen onStartGame={startGameHandler} />
  if(userNumber &&guessRounds <= 0){
    content =<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if(guessRounds > 0){
    content=(
      <GameOverScreen 
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart ={configureNewGameHandler}
      />
    )
  }
  return (
   <View style={styles.screen}>
     <Header title="Hello Viet Nam" />
    {/* <StartGameScreen /> */}
    {content}
   </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
