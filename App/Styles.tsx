import { StyleSheet } from "react-native";
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp
} from "react-native-responsive-dimensions";
const styles=StyleSheet.create({
container:{
    backgroundColor:'white',
    flex:1
},
dataContainer:{
    height:hp(70),
    width:wp(80),
    marginTop:hp(2),
    marginLeft:wp(10)
},
detailsContainer:{
    height:hp(25),
    width:wp(70),
    backgroundColor:'lightblue',
    marginTop:hp(18),
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp(15),
    borderRadius:20
},
writtenText:{
    fontSize:fp(2),
    fontWeight:'bold',
    fontStyle:'italic'
},
searchQuery:{
    borderColor:'black',
    borderWidth:0.5,
    marginTop:hp(8),
    width:wp(80),
    height:hp(5),
    marginLeft:wp(7)
},
listItem:{
    backgroundColor:"lightblue",
    marginTop:3,
    height:hp(4),
    fontStyle:'italic',
    fontWeight:'bold',
    borderRadius:10,
    marginLeft:10
},

})
export default styles