import React from "react";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="tabs">
          <h1>Create a Recurring Event in Google Calendar</h1>
          <p>
            {" "}
            Google Calender lets you create repeating events.{" "}
         </p>
          <ol>
            <li>Navigate to Google Calendar</li>
            <li>Add an Event</li>
            <li>
              Select <b> More Options </b>{" "}
            </li>
            <li> Set the frequency </li>
          </ol>
          <Tabs>
            <Tab label="Computer">
              <div>
                <h2> Navigate to Google Calendar </h2>
                <p>
                  {" "}
                  You will need to be signed in to your Google account to access
                  Google Calendar. If you don't already have one, you can read
                  more about creating a Google account &nbsp;
                  <a
                    className="link"
                    href="https://support.google.com/accounts/answer/27441?hl=en"
                  >
                    here
                  </a>
                  .
                </p>

                <p>
                  Go to   <a className="link" href="https://calendar.google.com/">
                    calendar.google.com
                  </a> to access Google Calendar. If you're already on another Google page, click the <b> Google Apps</b> button, then click the <b>Calendar</b> icon.
                </p>
                <img className="img" src="https://i.imgur.com/hxhtB4E.png" />

                <h2> Add an Event </h2>
                <p>
                  {" "}
                 Click <b>+ Create</b> to add an event.{" "}
                </p>
                <h2> Select More Options </h2>
                <p>
                  {" "}
                 Click{" "}
                  <b>
                    More Options <i class="arrow right"></i> Does Not Repeat </b>
                    to alter the event's frequency.
                  {" "}
                </p>
                <h2> Set the Frequency </h2>
                <p>
                  {" "}
                  Select how often you want the event to repeat, and when you want that event to stop repeating.                </p>
                <img className="img" src="https://i.imgur.com/MEnGQdj.png" />
              </div>
            </Tab>
            <Tab label="Phone">
              <div>
                <h2> Navigate to Google Calendar </h2>
           
                <p>
                Go to the Apple App Store or Google Play Store, download Google Calendar, and then open Google Calendar.
                 </p>
                 <p>
                  {" "}
                  You will need to be signed in to your Google account to access
                  Google Calendar. If you don't already have one, you can read
                  more about creating a Google account &nbsp;
                  <a
                    className="link"
                    href="https://support.google.com/accounts/answer/27441?hl=en"
                  >
                    here
                  </a>
                  .
                </p>

                <h2> Add an Event </h2>
                <p>
                  {" "}
                  Click <b>+ Event </b> to add an
                  event.{" "}
                </p>
                <h2> Select More Options </h2>
                <p>
                  {" "}
                 Click{" "}
                  <b>
                    More Options <i class="arrow right"></i> Does Not Repeat </b>
                    to alter the event's frequency.
                  {" "}
                </p>
                <h2> Set the Frequency </h2>
                <p>
                  {" "}
                  Select how often you want the event to repeat, and when you want that event to stop repeating.
                </p>
                <img src="https://i.imgur.com/uFV8ssL.png" />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
