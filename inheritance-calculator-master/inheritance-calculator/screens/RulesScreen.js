import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RulesScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>Rules of Inheritance</Text>
      <Text style={styles.rules}>Prescribed Shares</Text>
      <Text style={styles.rules}>1) Husband [AnNisa 4:12]</Text>
      <Text style={styles.rules}>   a. Gets 1/2</Text>
      <Text style={styles.rules}>      i. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>   b. Gets 1/4</Text>
      <Text style={styles.rules}>      i. Deceased has offspring</Text>
      <Text style={styles.rules}>2) Wife (Divided equally among all wives) [AnNisa 4:12]</Text>
      <Text style={styles.rules}>   a. Gets 1/4</Text>
      <Text style={styles.rules}>      i. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>   b. Gets 1/8</Text>
      <Text style={styles.rules}>      i. Deceased has offspring</Text>
      <Text style={styles.rules}>3) Daughter (Divided equally among all daughters)</Text>
      <Text style={styles.rules}>   a. Gets 1/2 [AnNisa 4:11]</Text>
      <Text style={styles.rules}>      i. Deceased has only 1 daughter, and [AnNisa 4:11]</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any sons [AnNisa 4:11]</Text>
      <Text style={styles.rules}>   b. Gets 2/3 [AnNisa 4:11]</Text>
      <Text style={styles.rules}>      i. Deceased has multiple daughters, and [AnNisa 4:11]</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any sons [AnNisa 4:11]</Text>
      <Text style={styles.rules}>4) Grand Daughter (from son only)</Text>
      <Text style={styles.rules}>   a. Gets 1/2</Text>
      <Text style={styles.rules}>      i. Deceased has only 1 Grand daughter from a son</Text>
      <Text style={styles.rules}>      ii. Deceased does not have a son or a daughter</Text>
      <Text style={styles.rules}>      iii. Deceased does not have a Grandson from a son</Text>
      <Text style={styles.rules}>   b. Gets 2/3</Text>
      <Text style={styles.rules}>      i. Deceased has multiple Granddaughters from a son</Text>
      <Text style={styles.rules}>      ii. Deceased does not have a son or a daughter</Text>
      <Text style={styles.rules}>      iii. Deceased does not have a Grandson from a son</Text>
      <Text style={styles.rules}>   c. Gets 1/6 (H1)</Text>
      <Text style={styles.rules}>      i. Deceased has just one daughter</Text>
      <Text style={styles.rules}>      ii. Deceased does not have a son</Text>
      <Text style={styles.rules}>      iii. Deceased does not have a Grandson from a son</Text>
      <Text style={styles.rules}>5) Father [AnNisa 4:11]</Text>
      <Text style={styles.rules}>   a. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased has offspring</Text>
      <Text style={styles.rules}>6) Mother [AnNisa 4:11]</Text>
      <Text style={styles.rules}>   a. Gets 1/3</Text>
      <Text style={styles.rules}>      i. Deceased does not have any offspring, and</Text>
      <Text style={styles.rules}>      ii. Deceased does not have multiple siblings (full, paternal, maternal)</Text>
      <Text style={styles.rules}>   b. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased has offspring, or</Text>
      <Text style={styles.rules}>      ii. Deceased has multiple siblings (full, paternal, maternal)</Text>
      <Text style={styles.rules}>7) Paternal Grand Father</Text>
      <Text style={styles.rules}>   a. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased does not have a father</Text>
      <Text style={styles.rules}>      ii. Deceased has offspring</Text>
      <Text style={styles.rules}>8) Paternal Grand Mother</Text>
      <Text style={styles.rules}>   a. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased does not have a mother</Text>
      <Text style={styles.rules}>      ii. Deceased does not have a father</Text>
      <Text style={styles.rules}>      iii. Deceased does not have a maternal grandmother</Text>
      <Text style={styles.rules}>   b. Gets 1/12</Text>
      <Text style={styles.rules}>      i. Deceased does not have a mother</Text>
      <Text style={styles.rules}>      ii. Deceased does not have a father</Text>
      <Text style={styles.rules}>      iii. Deceased has a maternal grandmother</Text>
      <Text style={styles.rules}>9) Maternal Grand Mother</Text>
      <Text style={styles.rules}>   a. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased does not have a mother</Text>
      <Text style={styles.rules}>   b. Gets 1/12</Text>
      <Text style={styles.rules}>      i. Deceased does not have a mother</Text>
      <Text style={styles.rules}>      ii. Deceased does not have a father</Text>
      <Text style={styles.rules}>      iii. Deceased has a paternal grandmother</Text>
      <Text style={styles.rules}>10) Full Sister</Text>
      <Text style={styles.rules}>   a. Gets ½ [AnNisa 4:176]</Text>
      <Text style={styles.rules}>      i. Deceased has only 1 full sister</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestor</Text>
      <Text style={styles.rules}>      iv. Deceased does not have any full brother</Text>
      <Text style={styles.rules}>   b. Gets 2/3 [AnNisa 4:176]</Text>
      <Text style={styles.rules}>      i. Deceased has multiple full sisters</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestor</Text>
      <Text style={styles.rules}>      iv. Deceased does not have any full brother</Text>
      <Text style={styles.rules}>11) Paternal Sister</Text>
      <Text style={styles.rules}>   a. Gets 1/2</Text>
      <Text style={styles.rules}>      i. Deceased has only 1 paternal sister</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestor</Text>
      <Text style={styles.rules}>      iv. Deceased does not have any full brother, full sister or paternal brother</Text>
      <Text style={styles.rules}>   b. Gets 2/3</Text>
      <Text style={styles.rules}>      i. Deceased has multiple paternal sisters</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestor</Text>
      <Text style={styles.rules}>      iv. Deceased does not have any full brother, full sister or paternal brother</Text>
      <Text style={styles.rules}>   c. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased has just 1 full sister</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestor</Text>
      <Text style={styles.rules}>      iv. Deceased does not have any full brother or paternal brother</Text>
      <Text style={styles.rules}>12) Maternal Sibling [AnNisa 4:12]</Text>
      <Text style={styles.rules}>   a. Gets 1/6</Text>
      <Text style={styles.rules}>      i. Deceased has only 1 maternal sibling</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any male offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestors</Text>
      <Text style={styles.rules}>   b. Gets 1/3</Text>
      <Text style={styles.rules}>      i. Deceased has multiple maternal siblings</Text>
      <Text style={styles.rules}>      ii. Deceased does not have any male offspring</Text>
      <Text style={styles.rules}>      iii. Deceased does not have any male paternal ancestors</Text>
      <Text style={styles.rules}>Residual Shares (H2)</Text>

      <Text style={styles.title}>Additional Rules</Text>
      <Text style={styles.rules}>1. Fixed Shares: Specific relatives inherit fixed shares as stipulated in the Quran.</Text>
      <Text style={styles.rules}>2. Sons and Daughters: Sons receive twice the share of daughters.</Text>
      <Text style={styles.rules}>3. Parents: Each parent inherits one-sixth if the deceased has children.</Text>
      <Text style={styles.rules}>4. Spouse: A husband receives half if there are no children, otherwise one-quarter. A wife receives one-quarter if there are no children, otherwise one-eighth.</Text>
      <Text style={styles.rules}>5. Siblings: Full siblings and half-siblings (from the same father) inherit if there are no children or father.</Text>
      <Text style={styles.rules}>6. Grandparents: Paternal grandparents may inherit if there are no parents.</Text>
      <Text style={styles.rules}>7. Others: If none of the specified relatives are alive, more distant relatives may inherit.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', // Light blue background color
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  rules: {
    fontSize: 16,
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
    lineHeight: 24,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RulesScreen;
