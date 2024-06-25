import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Entypo, Foundation, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  let imageSource = require('./assets/IMG_E4348.png');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cvCon}>
        <View style={styles.cvConItem1}>
          <Image source={imageSource} style={styles.img} />
          <View style={styles.personal}>
            <View style={{gap: 6}}>
              <View style={styles.personalHeadings}>
                <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 3 }}>CONTACT</Text>
              </View>
              <View style={styles.contactDetails}>
                <Entypo name="mail" size={17} color="black" />
                <Text style={{ fontSize: 11 }}> nnabugwu478@gmail.com</Text>
              </View>
              <View style={styles.contactDetails}>
                <Foundation name="telephone" size={17} color="black" />
                <Text style={{ fontSize: 11 }}> 09048827636</Text>
              </View>
              <View style={styles.contactDetails}>
                <MaterialIcons name="location-pin" size={17} color="black" />
                <Text style={{ fontSize: 11 }}>237 street, Kubwa</Text>
              </View>
            </View>
            <View>
              <View style={styles.personalHeadings}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 3}}>SKILLS</Text>
              </View>
              <View style={styles.skillsList}>
                <Text style={styles.skill}>Web Design</Text>
                <Text style={styles.skill}>Mobile App Dev</Text>
                <Text style={styles.skill}>Web App Dev</Text>
                <Text style={styles.skill}>Data Analysis</Text>
              </View>
            </View>
            <View>
              <View style={styles.personalHeadings}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 3}}>EDUCATION</Text>
              </View>
              <View style={{gap: 6}}>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>UNIZIK</Text>
                  <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 500}}>BSc, <Text style={{fontStyle: 'normal'}}>2018 - 2022</Text></Text>
                </View>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>Oxford University</Text>
                  <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 500}}>Bachelor of design, <Text style={{fontStyle: 'normal'}}>2022 - 2023</Text></Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.personalHeadings}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 3}}>LANGUAGES</Text>
              </View>
              <View style={styles.skillsList}>
                <Text style={styles.skill}>HTML</Text>
                <Text style={styles.skill}>CSS</Text>
                <Text style={styles.skill}>JavaScript</Text>
                <Text style={styles.skill}>PHP</Text>
                <Text style={styles.skill}>Python</Text>
                <Text style={styles.skill}>React</Text>
                <Text style={styles.skill}>React Native</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cvConItem2}>
          <View style={styles.workHeading}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>NNABUGWU</Text>
            <Text style={{fontSize: 22}}>NJOKU</Text>
            <Text style={{fontSize: 11, color: '#484848'}}>Front-End Developer</Text>
          </View>
          <View style={styles.workExperience}>
            <View style={styles.aboutMe}>
              <View style={styles.aboutMeHeading}>
                <Text style={{fontWeight: 500}}>ABOUT ME</Text>
              </View>
              <Text style={styles.aboutMeText}>Passionate <Text style={{fontWeight: 'bold'}}>Front-end developer</Text> with experience and devotion in building beautiful user interfaces for web and mobile applications.</Text>
            </View>
            <View style={styles.experience}>
              <View style={styles.aboutMeHeading}>
                <Text style={{fontWeight: 500}}>WORK EXPERIENCE</Text>
              </View>
              <View style={styles.experienceText}>
                <View style={{gap: 2}}>
                  <Text style={{fontSize: 12}}>2023 - present</Text>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>SENIOR WEB DESIGNER</Text>
                  <Text style={{fontSize: 13, lineHeight: 19}}>Created and built a highly scalable website and mobile app for customer care support.</Text>
                </View>
                <View style={{gap: 2}}>
                  <Text style={{fontSize: 12}}>2022 - 2023</Text>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>JUNIOR WEB DESIGNER</Text>
                  <Text style={{fontSize: 13, lineHeight: 19}}>Also Worked in a team to build beautiful UIs for several applications.</Text>
                </View>
                <View style={{gap: 2}}>
                  <Text style={{fontSize: 12}}>2021 - 2022</Text>
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>FRONT-END INTERN</Text>
                  <Text style={{fontSize: 13, lineHeight: 19}}>Worked in a team to build several application projects for users.</Text>
                </View>
              </View>
            </View>
            <View style={{gap: 7}}>
              <View style={styles.aboutMeHeading}>
                <Text style={{fontWeight: 500}}>REFERENCES</Text>
              </View>
              <Text>Android & iOS | <Text style={{fontWeight: 'bold'}}>Earlycode</Text></Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cvCon: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
  },
  cvConItem1: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    paddingTop: 20,
  },
  cvConItem2: {
    flex: 1.2,
    backgroundColor: 'ghostwhite',
    paddingStart: 15,
  },
  img: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginBottom: 18,
    borderRadius: 70
  },
  personal: {
    paddingStart: 5,
    gap: 20
  },
  personalHeadings: {
    marginBottom: 5,
    backgroundColor: 'black', 
    marginRight: 5, 
    padding: 3,
  },
  contactDetails: {
    flexDirection: 'row', 
  },
  skillsList: {
    gap: 6
  },
  skill: {
    fontSize: 13
  },
  workHeading: {
    height: 158,
    justifyContent: 'center',
    gap: 5
  },
  workExperience: {
    marginRight: 20,
    gap: 15
  },
  aboutMe: {
    gap: 9
  },
  aboutMeHeading: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'tan',
    paddingBottom: 2
  },
  aboutMeText: {
    fontSize: 13,
    lineHeight: 19.5
  },
  experience: {
    gap: 5
  },
  experienceText: {
    gap: 10
  }
});
