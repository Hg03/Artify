import React from "react";
import { Text,View,StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity } from "react-native";
import graphic from "../images/Vectorgraphics1(2).png"
import { Avatar } from 'react-native-paper';
import AvtarImg from '../images/avtar.jpg'
import { TextInput, Button } from "react-native-paper";
import Profile from "./Profile";
const ChangePassword=()=>{

    return( <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0 }}>
        <Image source={graphic} style={{width:200,height:150,margin:0}}/>
       
        <View style={{alignItems:"center",height:100,margin:0,padding:0,width:"100%",position:"absolute"}} >
        
 <Text style={styles.headerText}>Change Password</Text>
 

   </View>

   {/* <View style={styles.profileView}>
   <Avatar.Image size={90} source={AvtarImg} style={{marginLeft:20}}  />
   
   <Text style={styles.ProfileName}>Muskan Mishra</Text>
   </View> */}
   <Profile/>
   <View style={styles.footer}>
   {/* <View style={styles.textboxAndbtn}>

   </View> */}
   
        <TextInput
            label="Old Password"
            name="oldPassword"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
            <TextInput
            label="New Password"
            name="newPassword"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
            <TextInput
            label="Confirm Password"
            name="confirmPassword"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

           <Button
            mode="contained"
            buttonColor="#363488"
            textColor="white"
            labelStyle={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
              
            }}
            style={styles.btn}
            
          >
           Change Password
          </Button>
    <View style={{marginTop:20,height:90}}>
   <TouchableOpacity>
              <Text style={{ color: "#363488", fontWeight: "bold",fontSize:17 }}>
                Forgot Password
              </Text>
   </TouchableOpacity>
   </View>
  
   </View>
   
       </ScrollView>
    </SafeAreaView>  
        )

}
const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#F3F8FE",
        padding:0
    },
    headerText:{
        // fontFamily: 'Poppins',
        fontWeight:"bold",
        fontSize: 25,
        lineHeight: 48,
        color:"#363488",
        // left: 49,
         top: 70
    },
    profileView:{
      marginTop:10,
        flexDirection:"row",
        width:"90%",
        position:"relative",
        marginLeft:"auto",
        marginRight:"auto",
        height:"auto",
       
        
    },
    ProfileName:{
    fontWeight:"bold",
    fontSize:22,
    textAlign:"center",
    marginTop:"auto",
    marginBottom:"auto",
   marginLeft:20,
    marginRight:"auto",
    color:"#363488",
    },

    footer:{
    
        width: "100%",
        height:"auto",
        marginTop: 10,
        backgroundColor: "white",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 5,
        paddingTop: 25,
        flex: 1,
        top:10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
         
     },
     loginInput: {
        margin: "5%",
        height:65,
        width: "88%",
        backgroundColor:"#F5F5F5",
        borderRadius: 8,
      },
      btn:{
        height:60,
        width:"88%",
        marginTop:10,
        borderRadius:8,
      }
     
})
export default ChangePassword;