import React from 'react';
import {Text, View} from 'react-native';
import {Stores} from '../../static/stores';
import {NearStoresModel} from '../../models/nearStoresModel';

export class NearStores extends React.Component<any, any> {
  storeAvailable: NearStoresModel[];

  constructor(props: any) {
    super(props);
    this.storeAvailable = Stores;
    console.log(this.storeAvailable);
  }
  render() {
    return (
      <View>
        {/*logo  */}

        {/*nome da loja*/}
        {this.storeAvailable.map((i, k) => (
          <Text>{{ i.name }}</Text>

        ))}
        {/*tipo de loja*/}
      </View>
    );
  }
}
