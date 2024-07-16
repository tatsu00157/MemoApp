import { View, StyleSheet } from "react-native"
import { router, useNavigation } from "expo-router"
import { useEffect } from "react"

import MemoListItem from "../../components/memoListItem"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/Icon"
import LogOutButton from "../../components/logOutButton"

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    return (
    <View style={styles.container}>
           
        <View>
            <MemoListItem />
            <MemoListItem />
            <MemoListItem />
        </View>
        <CircleButton onPress={handlePress}>
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



