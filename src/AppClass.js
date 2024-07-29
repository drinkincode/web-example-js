// import React from 'react';
// import './App.css';
// import Button from "./Button";
// import NameForm from './TextInputClass'
// import ExClass from "./exClass"
// import ExFunc from "./exFunc"
import React, { Page, Section } from 'react';
import ThemedButton from './Buttons/themed-button'
import {ThemeContext, themes} from './Buttons/theme-context';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render() {
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}
export default AppClass;