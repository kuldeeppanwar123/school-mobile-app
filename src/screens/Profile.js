import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Modal,
  FlatList,
  ImageBackground,
} from 'react-native';
import profileback from '../assets/images/profileback.png';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Profile() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
    language: 'English',
  });

  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  const handleLanguageSelect = (language) => {
    setForm({ ...form, language });
    setLanguageModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <ImageBackground source={profileback} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <Text style={styles.title}>Coordinator Profile</Text>
          <Text style={styles.subtitle}>Edit your profile</Text>
        </View>
        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>Class Name and Section</Text>
        </View>
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: '#fe9498' }]}>
                  <FeatherIcon color="#fff" name="edit" size={20} />
                </View>
                <Text style={styles.rowLabel}>Edit profile</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setLanguageModalVisible(true)}
                style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                  <FeatherIcon color="#fff" name="globe" size={20} />
                </View>
                <Text style={styles.rowLabel}>Language</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>{form.language}</Text>
                <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <View style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: '#007AFF' }]}>
                  <FeatherIcon color="#fff" name="moon" size={20} />
                </View>
                <Text style={styles.rowLabel}>Dark Mode</Text>
                <View style={styles.rowSpacer} />
                <Switch
                  onValueChange={(darkMode) => setForm({ ...form, darkMode })}
                  value={form.darkMode}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: '#fe9498' }]}>
                  <FeatherIcon color="#fff" name="help-circle" size={20} />
                </View>
                <Text style={styles.rowLabel}>Help & Support</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}>
                <View style={[styles.rowIcon, { backgroundColor: '#38C966' }]}>
                  <FeatherIcon color="#fff" name="phone" size={20} />
                </View>
                <Text style={styles.rowLabel}>Contact Us</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={languageModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setLanguageModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Language</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleLanguageSelect(item)}
                  style={styles.languageOption}>
                  <Text style={styles.languageText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  image: {
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity by changing the alpha value
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    marginTop: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  profileAvatar: {
    width: 110,
    height: 110,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 5,
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  scrollViewContent: {
    paddingTop: 12,
  },
  section: {
    paddingTop: 12,
  },
  sectionTitle: {
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 16,
    height: 50,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
    color: '#8B8B8B',
    marginRight: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  languageOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
});
