import { View, StyleSheet } from "react-native"

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
            <Icon name="plus" size={40} color="#ffffff"/>
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



