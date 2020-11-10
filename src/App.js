import React from "react";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="tabs">
        <Tabs>
            <Tab label="Exercise 1">
              <div>
              <h1>Create a recurring event in Google Calendar</h1>
          <p>
            {" "}
            Google Calendar lets you create repeating events.{" "}
         </p>
          <ol>
            <li>Navigate to Google Calendar.</li>
            <li>Add an event.</li>
            <li>
              Select <b> More options</b>.{" "}
            </li>
            <li> Set the frequency. </li>
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
                  target="_blank"
                    className="link"
                    href="https://support.google.com/accounts/answer/27441?hl=en"
                  >
                    here
                  </a>
                  .
                </p>

                <p>
                  Go to   <a target="_blank" className="link" href="https://calendar.google.com/">
                    calendar.google.com
                  </a> to access Google Calendar. If you're already on another Google page, click the <b> Google apps</b> button, then click the <b>Calendar</b> icon.
                </p>
                <img className="img" src="https://i.imgur.com/hxhtB4E.png" />

                <h2> Add an event </h2>
                <p>
                  {" "}
                 Click <b>+ Create</b> to add an event.{" "}
                </p>
                <h2> Select More options </h2>
                <p>
                  {" "}
                 Click{" "}
                  <b>
                    More options <i class="arrow right"></i> Does not repeat </b>
                    to alter the event's frequency.
                  {" "}
                </p>
                <h2> Set the frequency </h2>
                <p>
                  {" "}
                  Select how often you want the event to repeat and when you want that event to stop repeating.                </p>
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
                   target="_blank"
                    className="link"
                    href="https://support.google.com/accounts/answer/27441?hl=en"
                  >
                    here
                  </a>
                  .
                </p>

                <h2> Add an event </h2>
                <p>
                  {" "}
                  Click <b>+ Event </b> to add an
                  event.{" "}
                </p>
                <h2> Select More options </h2>
                <p>
                  {" "}
                 Click{" "}
                  <b>
                    More options <i class="arrow right"></i> Does mot repeat </b>
                    to alter the event's frequency.
                  {" "}
                </p>
                <h2> Set the frequency </h2>
                <p>
                  {" "}
                  Select how often you want the event to repeat and when you want that event to stop repeating.
                </p>
                <img src="https://i.imgur.com/uFV8ssL.png" />
              </div>
            </Tab>
          </Tabs>
              
              </div>
            </Tab>
            <Tab label="Exercise 2">
              <div>
            <h1>Difference between on-premises and cloud deployment</h1>
            <p>Cloud deployments and on-premises deployments differ in price, reliability, security, and scalability.</p>
          
              <h2>Price</h2>
              <p>Cloud-based software lets a company deploy at a cheaper rate because there is no necessary hardware to host on-site servers; instead, the cloud utilizes either subscription-based or pay as you go models. </p>
              <h2>Reliability</h2>
              <p>On-premises provides software deployments more reliability because applications can fetch data faster and partially function without an internet connection.</p>
              <h2>Security</h2>
              <p>Cloud deployments are less secure because third-party vendors handle sensitive customer data.</p>
              <h2>Scalability</h2>
              <p>On-premises deployments require both hardware and software upgrades, which limits scalability.</p>
              </div>
            </Tab>
            <Tab label="Exercise 3">
              <div>
              <h2>
                Lookups
              </h2>
              <p>Comparing defined primary functions with running processes, installed services, and listening ports found on a system can determine primary functions.</p>
              <ul>
                <li>"localprocesses_tracker" returns running processes</li>
                <li>"services_tracker" returns services</li>
                <li>"listeningports_tracker" returns listening ports</li>
              </ul>
              <h2> And</h2>
              <p>Compliance Managers use multiple services and processes to determine the primary function of a system. 
                So long as the function name is consistent among applications in the stack, determining the primary function is 
                achievable by defining a primary service. Several service names can represent an application stack and a single function. 
                Identify all services and processes associated with a primary function having the same function name in
                &nbsp;<code>SA-EndpointProtection/lookups/primary_functions.csv</code>.</p>
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
