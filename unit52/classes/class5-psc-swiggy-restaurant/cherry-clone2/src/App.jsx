import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';

import userInfo from './data/userInfo.json'
import offers from './data/offers.json';
import restaurants from './data/restaurants.json'
import { useState } from 'react';

// const filters= {                          //2--6--8 ---> explain filter by taking filter array
   
  
//  1: "Cost High to Low",

//  2: "Cost Low to High",


//  3: "Ratings",


//  4: "Delivery Time",


//  5: "Relevance",

// }

const filters= [                       //2--6--8 ---> explain filter by taking filter array
   "Cost High to Low" ,"Cost Low to High",
 "Ratings",
 "Delivery Time",
 "Relevance",
 
]

function App() {
  const [filterBy, setFilterBy] = useState("")
  const [data, setData] = useState(restaurants)

  const updateFilter= (newFilter) => {
    //TODO
    console.log(newFilter);
    switch (newFilter) {
     
      //  case "1": {
      //   setFilterBy(1);
      //   data.sort( (a,b) => b.costForTwo - a.costForTwo )

      //   console.log(data.map( (d) => d.costForTwo ));
      //   setData([...data])
      //    break;
      //  }
      //  case "2": {
      //   setFilterBy(2);
      //   data.sort( (a,b) => a.costForTwo - b.costForTwo )
      //   console.log(data.map( (d) => d.costForTwo ));
      //   setData([...data])

      //    break;
      //  }

      // ******************************************************************************

      case "Cost High to Low": {
        setFilterBy("Cost High to Low");
        data.sort( (a,b) => b.costForTwo - a.costForTwo )

        console.log(data.map( (d) => d.costForTwo ));
        setData([...data])
         break;
       }
       case "Cost Low to High": {
        setFilterBy("Cost Low to High");
        data.sort( (a,b) => a.costForTwo - b.costForTwo )
        console.log(data.map( (d) => d.costForTwo ));
        setData([...data])

         break;
       }


       default: {
         setData(restaurants)
         break;
       }
    }

  };

  return (
    <div >
      <Navbar {...userInfo.location} />
      <Offers offers= {offers} />


      <section className="near-you">
        <Filters filters= {filters} currentFilteredBy= {filterBy} updateFilter= {updateFilter} />
        {/* <Restaurants restaurants= {restaurants} /> */}

        <Restaurants restaurants= {data} />
      </section>

    </div>
  );
}

export default App;
