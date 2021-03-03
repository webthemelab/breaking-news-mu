import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import Header from './components/Header/Header'
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() =>{
    const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=9317483517b043d38ed61b68149f8c13'
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  useEffect( () => {
    const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=9317483517b043d38ed61b68149f8c13'
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div>
        <Header></Header>
        <h2>Article:{articles.length}</h2>
        {
          articles.map(article => <News article = {article} ></News>)
        }
         
    </div>
  );
}

export default App;
