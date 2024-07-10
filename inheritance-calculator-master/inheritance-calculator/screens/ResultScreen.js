import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, ImageBackground, Alert } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


const ResultScreen = ({ route, navigation }) => {

  const { gender,
    propertyValue,
    father,
    mother,
    wife,
    husband,
    sons,
    daughters,
    fullbrothers,
    fullsisters,
    maternalSiblings,
    PaternalGrandfather,
    MaternalGrandmother,
    paternalGrandmother,
    fullNephew,
    PaternalHalfNephew,
    fullUncle,
    MaternalHalfNephew,
    sonsDaughter,
    sons_son, 

    remaining
  
  
  } = route.params;
  const [result, setResult] = useState({});
  // const [chartData, setChartData] = useState([]);
  console
  useEffect(() => {
    if (propertyValue) {
      calculateShares();
    }
  }, []);

  let propertyValues = parseFloat(propertyValue);
  const calculateShares = () => {

    let shares = {
   

    }

    try {



    
      let remaining = parseFloat(propertyValue);;
      let totalFixedShares = 0;

      


      // True Grandmother
      if (MaternalGrandmother === 'yes' ) {
        if( mother === "no"){
          shares.MaternalGrandmother = propertyValues * 1 / 6;
          totalFixedShares += shares.MaternalGrandmother
        }
        totalFixedShares += shares.MaternalGrandmother
        console.log("MaternalGrandmother " +totalFixedShares)
      }

      

      // Son's Daughter

      // Son's Daughter
      if (sonsDaughter > 1 ) {
  if( daughters > 0 && sons == 0 && daughters < 2){
    shares.sonsDaughter = propertyValues * 2 / 3;
 
      
      } else if (daughters > 0 && sons == 0 && daughters < 2) {
        shares.sonsDaughter = propertyValues * 1 / 2;
     
      }
      totalFixedShares += shares.sonsDaughter
      console.log("sonsDaughter " +totalFixedShares)
    }
      // Consanguine Sister

//       if (fullsisters === 1) {
//         if(sons == 0 && (!PaternalGrandfather || PaternalGrandfather == "no") && (!father || father === no) && daughters == 0){
//           shares.fullsisters = propertyValues * 1 / 2;
        
     
//       } else if (sons == 0 && (!PaternalGrandfather || PaternalGrandfather == "no") && (!father || father === no) && daughters == 0) {
//         shares.fullsisters = propertyValues * 2 / 3;
       
//       }
//       totalFixedShares += shares.fullsisters
//       console.log("sonsDaughter shares " +totalFixedShares)
// }

      // Full Sister
      if (PaternalHalfNephew === 1 ) {
        if( sons == 0 && (!PaternalGrandfather || PaternalGrandfather == "no") && (!father || father === "no") && daughters == 0){
          shares.PaternalHalfNephew = propertyValues * 1 / 2;
       
        
      } else if (PaternalHalfNephew > 1 && sons_son ==0 && sons == 0 && fullsisters ==0 && PaternalGrandfather == "no" && fullbrothers ==0 && father === "no" && daughters == 0) {
        shares.PaternalHalfNephew = propertyValues * 2 / 3;
        
      }
      totalFixedShares += shares.PaternalHalfNephew
      console.log("PaternalHalfNephew shares " +totalFixedShares)
 }
 //  maternalSiblings
   
     if (maternalSiblings === 1 ) {
      if( sons == 0 &&  sons_son ==0 && sons == 0 && fullsisters ==0 && PaternalGrandfather == "no" && fullbrothers ==0 && father === "no" && daughters == 0) {
        shares.maternalSiblings = propertyValues * 1 / 2;
     
      
    }
     else if (maternalSiblings > 1 && sons_son ==0 && sons == 0 && fullsisters ==0 && PaternalGrandfather == "no" && fullbrothers ==0 && father === "no" && daughters == 0) {
      shares.maternalSiblings = propertyValues * 2 / 3;
      
    }
    totalFixedShares += shares.maternalSiblings
    console.log("maternalSiblings shares " +totalFixedShares)
}
      // Uterine Brother
      if (sons_son > 0 ) {
        if( sons == 0 && (!PaternalGrandfather || PaternalGrandfather == "no") && (!father || father === "no") && daughters == 0){
          shares.sons_son = propertyValues * 1 / 6;
        }
       
        totalFixedShares += shares.sons_son
        console.log("sons_son shares " +totalFixedShares)

      }

      // MaternalHalfNephew
      if (MaternalHalfNephew > 0 ) {
        if( sons == 0 && (!PaternalGrandfather || PaternalGrandfather == "no") && (!father || father === "no") && daughters == 0){
          shares.MaternalHalfNephew = propertyValues * 1 / 6;
        }
       
        totalFixedShares += shares.MaternalHalfNephew
        console.log("MaternalHalfNephew shares " +totalFixedShares)

      }
      


// Spouse shares
if (gender === "male") {
  // wife
  if (wife > 0) {
    if (daughters == 0 && sons === 0) {
      shares.wife = propertyValues * 1 / 4;

    }
    else if (daughters > 0 || sons > 0) {
      shares.wife = propertyValues * 1 / 8;
    
    }
    else{ 
      shares.wife = propertyValues * 1 / 4;
      
    }
    totalFixedShares += shares.wife
  }
  // Mother
  if (mother === "yes") {
   
    if ( father === "yes" && wife > 0) {
      // const totalShares = (2 * 1) + 1;
      // const sharePerUnit = propertyValues - totalFixedShares / totalShares;
      // console.log( " shares ",sharePerUnit)
      
      // shares.mother = sharePerUnit / 1;
// shares.mother= (propertyValues-shares.wife)* (1/3)
shares.mother= propertyValues* (1/6)
    }
  
    
    else if ( daughters > 0 || sons > 0 || fullbrothers > 1 || fullsisters > 1) {

      shares.mother = propertyValues * 1 / 6;

    }
    else {
      shares.mother = propertyValues * 1 / 3 ;

    }
    totalFixedShares += shares.mother
    console.log("mother shares " +totalFixedShares)
  }
  
      // Father
      if (father === "yes") {
        // if(mother == "yes" && wife > 0){
        // when x= son,y =duaghter ,portion = propertyValues -totalFixedShars
        //   const totalShares = son * duaghter + duaghter;
        //   const sharePerUnit = propertyValues - totalFixedShares / totalShares;
        //   shares.son = (sharePerUnit )/son;
          // shares.duaghter = sharePerUnit / duaghter;
          
        // }
            if (daughters > 0 && sons > 0) {

          shares.father = propertyValues * 1 / 6 

        } else if (daughters > 0 && sonss == 0) {

          shares.father = propertyValue-totalFixedShares

        }else if ( sons > 0 && daughters == 0) {

          shares.father = propertyValue*(1/6)

        }else {

          shares.father = propertyValues-totalFixedShares
          console.log(totalFixedShares + "father")

        }  // Residuary
        totalFixedShares += shares.father
        console.log(totalFixedShares)
      }

}
else {

  // Husband
  if (husband == "yes" ) {
    if( (!daughters || daughters === 0) && (!sons || sons === 0)){
      shares.husband = propertyValues * 1 / 2;
    }
   
   else if ( daughters > 0 || sons > 0) {
    shares.husband = propertyValues * 1 / 4;
 
  } 
  totalFixedShares += shares.husband
}
  if (mother === "yes") {

  if( father === "yes" && husband == "yes"){
    shares.mother= propertyValue* (1/6)
  }
    
    else if ((daughters > 0 || sons > 0 || fullbrothers > 1 || fullsisters > 1)) {

      shares.mother = propertyValues * 1 / 6;

    }
    else {
      shares.mother = propertyValues * 1 / 3 ;

    }
    totalFixedShares += shares.mother
    console.log("mother shares " +totalFixedShares)
  }

  
      // Father
      if (father === "yes") {
      
            if (daughters > 0 && sons > 0) {

          shares.father = propertyValues * 1 / 6

        } else if (daughters > 0 && sons == 0) {

          shares.father = propertyValue-totalFixedShares

        }else if ( sons > 0 &&  daughters== 0) {

          shares.father = propertyValue*(1/6)

        } else {

          shares.father = propertyValue-totalFixedShares

        }  // Residuary
        totalFixedShares += shares.father
        console.log(totalFixedShares)
      }
}
 const sonss = sons;
      const daughter = daughters;

      if (sons + daughters > 0) {
      
        if (sonss > 0 && daughter == 0) {
        shares.sons =  propertyValue-totalFixedShares;
      } else if (sonss == 0 && daughters > 0) {
       // // Daughter
       if(numberOfFullBrothers==0 && numberOfFullsisters == 0 && sons == 0 && daughter > 0 && PaternalGrandfather == "no" && ( father === "no") && daughters == 0) 
         {
          shares.duaghters= propertyValue- totalFixedShares
         }
     else if (daughters === 1) {
        shares.daughters = propertyValues * 1 / 2;
      } else if (daughters > 1) {
        shares.daughters = propertyValues * 2 / 3;
        totalFixedShares += shares.daughters
      }
     
    }
    else{
      const totalShares = sons * 2 + daughters;
  const sharePerUnit =( propertyValues - totalFixedShares) / totalShares;
  shares.sons = (sharePerUnit*2 );
  shares.duaghter = sharePerUnit;

}
    
    totalFixedShares+=shares.daughters
    totalFixedShares+=shares.sons

    }
      // True Grandfather
      if (PaternalGrandfather === "yes") {
        if( father === 'no'){
          shares.PaternalGrandfather = propertyValues * 1 / 6;
        

      } else if (father === "no" && (!daughters || daughters === 0) && (!sons || sons === 0)) {

        shares.PaternalGrandfather = propertyValue- totalFixedShares;

      }
      totalFixedShares+=PaternalGrandfather
      console.log("grandfarther shares "+totalFixedShares)
    }
    
      // Sibling shares
      const numberOfFullBrothers = fullbrothers;
      const numberOfFullsisters = fullsisters;

      //single fullbrother
      if( numberOfFullBrothers > 0 && numberOfFullsisters ==0 && sonsDaughter==0&& mother== "no"&& daughters ==0 && sons==0 && (wife== 0 || husband == "no") && PaternalGrandfather == "no" && ( father === 'no') ) 
        {  shares.Brothers =  propertyValue-totalFixedShares;
        }


      if(  sonsDaughter==0 && daughters ==0 && sons==0 && PaternalGrandfather == "no" && ( father === 'no') ) 
      {
      if ( numberOfFullBrothers + numberOfFullsisters > 0)
         {
           console.log("trytrty")
          if (numberOfFullBrothers == 0 && numberOfFullsisters > 0) {
             if (numberOfFullsisters >0) {
          shares.numberOfFullsisters = propertyValues - totalFixedShares;
        } 
        else if (numberOfFullsisters > 1) {
          shares.numberOfFullsisters = propertyValues * 2 / 3;
          totalFixedShares += shares.numberOfFullsisters
        }}
        else if (numberOfFullBrothers > 0 && numberOfFullBrothers== 0) {
          if (numberOfFullBrothers >0 ) {
       shares.numberOfFullBrothers = propertyValues -totalFixedShares
     } 
     else if (numberOfFullBrothers > 1) {
       shares.numberOfFullBrothers = propertyValues * 2 / 3;
       totalFixedShares += shares.numberOfFullBrothers
     }}

        else if(numberOfFullBrothers > 0 && numberOfFullsisters> 0){
          const totalShares = numberOfFullBrothers * 2 + numberOfFullsisters;
          const sharePerUnit =( propertyValues - totalFixedShares) / totalShares;
          shares.FullBrothers = (sharePerUnit*2 );
          shares.Fullsisters = sharePerUnit;
        
  
        }
      
       
      }}
      //Convert to two decimal points
      for (let key in shares) {
        shares[key] = parseFloat(shares[key].toFixed(2));
      }



      // Residuary
shares.remaining
      return shares;
    } catch (error) {
      console.error(error);
      return {};
    }

  };

  const shares = calculateShares();

  const chartData = Object.entries(shares).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    population: value,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    legendFontColor: '#7F7F7F',
    legendFontSize: 8,
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inheritance Distribution</Text>
      <Text style={styles.result}>
        Property Value: {propertyValue.toLocaleString()}
      </Text>
      {Object.entries(shares).map(([key, value]) => (
        <Text style={styles.result} key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value.toLocaleString()}
        </Text>
      ))}
      <PieChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color='#6200EE'
      />
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
  result: {
    fontSize: 18,
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
});

export default ResultScreen;