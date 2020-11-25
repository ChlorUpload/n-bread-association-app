import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import CombineAction from '../actions/CombineAction';
import SearchScreen from '../screens/SearchScreen';
import { StateType } from '../State';
import React from 'react';
import { Platform } from 'react-native';

const SearchStack = createStackNavigator();

class SearchStackScreen extends React.Component<Props> {
  state = {
    search: '',
  };

  private platform = (Platform.OS as 'android' | 'ios');

  render() {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen
          name="Search"
          component={SearchScreen}
          initialParams={{
            search: '',
          }}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: () => (
              <SearchBar
                platform={this.platform}
                placeholder="제목 검색"
                onChangeText={(search) => {
                  this.setState({ search });
                }}
                onSubmitEditing={() => {
                  this.props.search(this.state.search);
                }}
                onClear={()=>{
                  this.props.clearSearch();
                }}
                value={this.state.search}
                cancelButtonTitle="취소"
                cancelButtonProps={{
                  buttonTextStyle: {
                    fontSize: 16,
                    marginLeft: 8,
                  },
                }}
                containerStyle={{
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                leftIconContainerStyle={{
                  height: 30,
                }}
                inputContainerStyle={
                  this.platform == 'android'
                    ? {
                        backgroundColor: 'white',
                      }
                    : {
                        backgroundColor: '#EEEEEE',
                      }
                }
                rightIconContainerStyle={{
                  height: 30,
                }}
                inputStyle={{
                  height: 30,
                }}
              ></SearchBar>
            ),
          }}
        ></SearchStack.Screen>
      </SearchStack.Navigator>
    );
  }
}

type Props = {
  search: (search: string) => void;
  clearSearch: () => void;
};

export default connect(
  (state: StateType) => ({}),
  (dispatch: Function) => {
    return {
      search: (search: string) => {
        dispatch(CombineAction.searchThunk(search));
      },
      clearSearch: () => {
        dispatch(CombineAction.clearSearchThunk());
      }
    };
  },
)(SearchStackScreen);
