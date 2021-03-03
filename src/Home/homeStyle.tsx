import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 14,    
    // flexDirection: 'row'
  },
  navBar: {    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconsL: {
    flexDirection: 'row',    
  },
  iconsR: {
    flexDirection: 'row',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
