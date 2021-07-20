import { useSelector } from 'react-redux'

import SearchForm from './components/searchForm'
import Header from './components/header'
import { selectSearch } from './store/searchSlice'

import { useGetGiphySearchResultsQuery } from './services/giphy'

import './app.css';

function App() {

  // Using a query hook automatically fetches data and returns query values
  const searchData = useSelector(selectSearch)
  const { data, isLoading } = useGetGiphySearchResultsQuery(searchData)

  return (
    <div className="container">
      <Header />
        <SearchForm />
        <div className="gif-container">
          <div className="gif-card-fluid d-flex flex-wrap justify-content-around align-items-around">
            {isLoading ? <h2>Loading..</h2> : data?.data.map((record, id) => <img key={record.images.original.url+"-"+ id} alt="" src={record.images.fixed_height.url}/>)}
          </div>
        </div>
    </div>
  );
}

export default App;
