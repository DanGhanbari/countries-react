import data from "./countriesAll.json";


const App = () => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div>
      {data.map((x)=><ul key={x.index}><li>{x.name} </li><li>{numberWithCommas(x.population)}</li></ul>)}
    </div>
  );
}

export default App;
