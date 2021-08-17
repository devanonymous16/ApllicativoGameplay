import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Image, 
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SingIn(){
 const [text, sextText] = useState('');


return(
  <View style={styles.container}>
    <Image 
    source={IllustrationImg}  
    style={styles.image}
    />

     <View style={styles.content}>
      <Text style={styles.title}> 
      Organize {'\n'}
      suas jogatinhas {'\n'}
      facilmente {'\n'}
      </Text>

     </View>
  </View>
) 
}
