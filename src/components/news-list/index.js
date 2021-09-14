const NewsList = ({
  news = []
}) => {
  return (<div>
    {
      news.map(item => {
        return <div key={item.uniquekey}>{item.title }</div>
      })
    }
  </div>);
};

export default NewsList;
