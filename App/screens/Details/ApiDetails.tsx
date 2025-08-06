
import React from "react";
import { View ,Text} from "react-native";
import styles from "../../Styles";
const ApiDetails=({route})=>{
    const {name,index}=route.params
    return(

        <View style={styles.detailsContainer}>
            <Text style={styles.writtenText}>Name  :  {name}</Text>
            <Text style={styles.writtenText}>Index  :  {index}</Text>
        </View>
    )
}
export default ApiDetails