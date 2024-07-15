import { View, StyleSheet } from "react-native"
// import { Feather } from "@expo/vector-icons"

import Header from "../../components/header"
import MemoListItem from "../../components/memoListItem"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/Icon"

const List = (): JSX.Element => {
    return (
    <View style={styles.container}>
           <Header />
        <View>
            <MemoListItem />
            <MemoListItem />
            <MemoListItem />
        </View>
        <CircleButton>
            <Icon />
        </CircleButton>
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

export default List



