import React, { Component } from "react";
import "./DashboardStyles.css";
import loader from "./loader.gif";
import dubailogo from "./dubailogo.png";
import dubai2 from "./dubai2.jpg";
import dubai3 from "./dubai3.jpg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }
  render() {
    return (
      
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            
            <div className="container text-center">
            <br></br>
            <img src={dubailogo}></img>
            <br></br>
            </div>
            <br></br>
            <br></br>
            <p>
              Dubai is a city and emirate in the United Arab Emirates known for luxury shopping,
              ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower,
              dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, 
              with jets and lights choreographed to music. On artificial islands just offshore is Atlantis,
              The Palm, a resort with water and marine-animal parks.
              <br></br>
              <br></br>
              Tourism is an important part of the Dubai government's strategy to maintain the flow of foreign
               cash into the emirate. Dubai's lure for tourists is based mainly on shopping,
                but also on its possession of other ancient and modern attractions.As of 2018, 
                Dubai is the fourth most-visited city in the world based on the number of international
                 visitors and the fastest growing, increasing by a 10.7% rate. The city hosted 14.9 million
                  overnight visitors in 2016, and is expected to reach 20 million tourists by 2020.
              <br></br>
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={dubai2}></img>
              </div>
              <br></br>
              <br></br>
              Dubai has been called the "shopping capital of the Middle East".
              Dubai alone has more than 70 shopping centres, including the world's largest shopping centre,
              Dubai Mall. Dubai is also known for the historical souk districts located on either side of 
              its creek. Traditionally, dhows from East Asia, China, Sri Lanka, and India would discharge
               their cargo and the goods would be bargained over in the souks adjacent to the docks. 
               Dubai Creek played a vital role in sustaining the life of the community in the city and 
               was the resource which originally drove the economic boom in Dubai.As of September 2013, 
               Dubai creek has been proposed as a UNESCO World Heritage Site.
               Many boutiques and jewellery stores are also found in the city.
                Dubai is also referred to as "the City of Gold" as the Gold Souk in Deira houses 
                nearly 250 gold retail shops.
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={dubai3}></img>
              </div>
              <br></br>
              Dubai Creek Park in Dubai Creek also plays a vital role in Dubai tourism 
              as it showcase some of the most famous tourist attractions in Dubai such as
               Dolphinarium, Cable Car, Camel Ride, Horse Carriage and Exotic Birds Shows.

              Dubai has a wide range of parks like Safa park, Mushrif park, Hamriya park, etc. 
              Each park is uniquely distinct from the other. Mushrif park showcases different
               houses around the world. A visitor can check out the architectural features of the 
               outside as well as the inside of each house.
              <br></br>
              <br></br>
              Some of the most popular beaches in Dubai are Umm Suqeim Beach, 
              Al Mamzar Beach Park, JBR Open Beach, Kite Beach, Black Palace Beach and 
              Royal Island Beach Club.

              Mastercard's Global Destination Cities Index 2019 found that tourists spend 
              more in Dubai than in any other country. In 2018, the country topped the list
               for the fourth year in a row with a total spend of $30.82 billion. 
               The average spend per day was found to be $553
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
