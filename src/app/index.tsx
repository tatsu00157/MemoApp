import { View, StyleSheet } from "react-native"

import Header from "../components/header"
import MemoListItem from "../components/memoListItem"
import CircleButton from "../components/circleButton"

const Index = (): JSX.Element => {
    return (
    <View style={styles.container}>
           <Header />
        <View>
            <MemoListItem />
            <MemoListItem />
            <MemoListItem />
        </View>
        <CircleButton>+</CircleButton>
    </View>
    )
}

const styles = StyleSheet.create({
    // 全体
    container: {
        flex: 1,
        backgroundColor: 'ffffff'
    }
})

export default Index

