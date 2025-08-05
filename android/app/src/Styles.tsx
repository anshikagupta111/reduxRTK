import { StyleSheet } from "react-native";
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp
} from "react-native-responsive-dimensions";const styles=StyleSheet.create({
container:{
    backgroundColor:'white',
    flex:1
},
dataContainer:{
    height:hp(30),
    width:wp(3),
    marginTop:8,
    marginLeft:100
},
searchQuery:{
    borderColor:'black',
    borderWidth:0.5,
    marginTop:80,
    width:200,
    height:hp(5)
}
})
export default styles