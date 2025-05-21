import {Button, Modal, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {CartesianChart, Line} from "victory-native";
import {useState} from "react";

const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
]


export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text>Minimal Reproduce</Text>
          </View>
          <View style={styles.chartContainer}>
              <CartesianChart data={data} xKey="x" yKeys={["y"]} >
                  {({ points }) =>
                      <Line points={points.y} color="black" strokeWidth={2} />
                  }
              </CartesianChart>
          </View>
          <Button title={"Open Modal"} onPress={() => setModalVisible(true)}/>
          <Modal
              visible={modalVisible}
              transparent
              statusBarTranslucent
              animationType="slide"
                onRequestClose={() => setModalVisible(false)}
              >
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                  <View style={styles.modalOverlay} />
              </TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                  <Text>Can you see me?</Text>
              </View>
          </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      paddingTop: 100,
      height: '100%'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    chartContainer: {
        width: 400,
        height: 400,
    },
    modalContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        alignItems: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: '50%'
    },
    modalOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
    },
});
