import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.scss";

import Grid from "./Grid";

const useInterval = (callback, delay, duration) => {
  const durationRef = useRef(duration);
  const durationIntervalRef = useRef();

  const handler = () => {
    callback(durationRef);
  };

  useEffect(
    () => {
      const durationInterval = setInterval(handler, delay);
      durationIntervalRef.current = durationInterval;
      return () => {
        clearInterval(durationInterval);
      };
    },
    [delay]
  );

  return durationIntervalRef;
};

function App() {
  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [duration, setDuration] = useState(0);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);

  const checkItems = (firstIndex, secondIndex) => {
    if (
      firstIndex !== secondIndex &&
      list[firstIndex].url === list[secondIndex].url
    ) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);
    }
  };

  useEffect(
    () => {
      axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=c0c103ae0af5122685dec516d4275b6471e81c388d2ce0791c61bb8f47285d5d&query=flower&per_page=6"
      )
      .then(res => {
        const newList = res.data.results.map(item => {
          return {
            id: item.id,
            url: item.urls.thumb,
            description: item.alt_description
          };
        });
        setList(
          newList
          .concat(
            newList.map(item => {
              return {
                ...item,
                id: item.id + "1"
              };
            })
          )
          .sort(() => {
            return 0.5 - Math.random();
          })
        );
      });
    },
    [newGame]
  );

  const durationIntervalRef = useInterval(
    durationRef => {
      durationRef.current++;
      setDuration(durationRef.current);
    },
    1000,
    duration
  );

  useEffect(
    () => {
      if (finishedItems.length > 0 && finishedItems.length === list.length) {
        setWinner(true);
        clearInterval(durationIntervalRef.current);
      }
    },
    [finishedItems]
  );

  return (
    <div className="text-center p-4 d-flex flex-column">
      <button
        onClick={() => {
          setNewGame(!newGame);
          setVisibleItems([]);
          setFinishedItems([]);
          setWinner(false);
        }}
        className="btn btn-warning mb-4"
      >
        New Game
      </button>
      {list.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <Grid
            list={list}
            visibleItems={visibleItems}
            setVisibleItems={setVisibleItems}
            finishedItems={finishedItems}
            checkItems={checkItems}
          />
          {winner && (
            <div>
              You Win !
              <br />
              Finished in {duration} seconds
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





// import React, { useState } from "react";
//
// import Card from "./Card";
//
// const Grid = props => {
//   const {
//     list,
//     visibleItems,
//     setVisibleItems,
//     finishedItems,
//     checkItems
//   } = props;
//
//   return (
//     <div className="container">
//       <div className="row no-gutters">
//         {list.map((item, index) => (
//           <Card
//             key={item.id}
//             className={`col-3 card ${
//               visibleItems.includes(index) ? "grid-card-show" : ""
//             } ${
//               finishedItems.includes(index)
//                 ? "grid-card-show grid-card-finished"
//                 : ""
//             }`}
//             onClick={() => {
//               if (!finishedItems.includes(index)) {
//                 switch (visibleItems.length) {
//                   case 0:
//                     setVisibleItems([index]);
//                     break;
//                   case 1:
//                     if (visibleItems[0] !== index) {
//                       setVisibleItems(visibleItems.concat(index));
//                       checkItems(visibleItems[0], index);
//                     }
//                     break;
//                   case 2:
//                     setVisibleItems([index]);
//                     break;
//                   default:
//                     setVisibleItems([]);
//                 }
//               }
//             }}
//             imgSource={item.url}
//             imgDesc={item.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
//
// Grid.defaultProps = {
//   list: []
// };
//
export default Grid;







// class PlayGround extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//         frameworks: ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'],
//         duplicatedFrameworks: [],
//         randomizedFrameworks: [],
//         finalizedFrameworks: [],
//         openedFrameworks: []
//       }
//       this.start()
//     }
//     handleClick(name,index){
//       if(this.state.openedFrameworks.length == 2){
//         setTimeout(() => {
//           this.check()
//         },750)
//       }else {
//         let framework = {
//           name,
//           index
//         }
//         let finalizedFrameworks = this.state.finalizedFrameworks
//         let frameworks = this.state.openedFrameworks
//         finalizedFrameworks[index].close = false
//         frameworks.push(framework)
//         this.setState({
//           openedFrameworks: frameworks,
//           finalizedFrameworks: finalizedFrameworks
//         })
//         if(this.state.openedFrameworks.length == 2){
//           setTimeout(() => {
//             this.check()
//           },750)
//         }
//       }
//     }
//     check(){
//       let finalizedFrameworks = this.state.finalizedFrameworks
//       if((this.state.openedFrameworks[0].name == this.state.openedFrameworks[1].name) && (this.state.openedFrameworks[0].index != this.state.openedFrameworks[1].index)){
//         finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true
//         finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true
//       }else {
//         finalizedFrameworks[this.state.openedFrameworks[0].index].close = true
//         finalizedFrameworks[this.state.openedFrameworks[1].index].close = true
//       }
//       this.setState({
//         finalizedFrameworks,
//         openedFrameworks: []
//       })
//     }
//     start(){
//       let finalizedFrameworks = [];
//       this.state.duplicatedFrameworks = this.state.frameworks.concat(this.state.frameworks)
//       this.state.randomizedFrameworks = this.shuffle(this.state.duplicatedFrameworks)
//       this.state.randomizedFrameworks.map((name,index) => {
//         finalizedFrameworks.push({
//           name,
//           close: true,
//           complete: false,
//           fail: false
//         })
//       })
//       this.state.finalizedFrameworks = finalizedFrameworks
//     }
//     shuffle(array){
//       let currentIndex = array.length, temporaryValue, randomIndex;
//       while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//       }
//       return array
//     }
//     render(){
//
//       return (
//         <div className="playground">
//             {
//               this.state.finalizedFrameworks.map((framework, index) => {
//                 return <Card framework={framework.name} click={() => {this.handleClick(framework.name,index)}} close={framework.close} complete={framework.complete}/>
//               })
//             }
//         </div>
//       )
//     }
// }
//
// class Card extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//
//       }
//     }
//   clicked(framework){
//     this.props.click(framework)
//   }
//   render(){
//     return (
//       <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.framework)}>
//         <div className="front">
//           ?
//         </div>
//         <div className="back">
//           <img src={"https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" + this.props.framework + ".png"}/>
//         </div>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render( <PlayGround/>, document.getElementById('app'))
