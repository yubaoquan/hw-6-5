import './style.less';

const NewsList = ({
  news = []
}) => {
  return (<div>
    {
      news.map(item => {
        return <div key={item.uniquekey} className="news-item">
          <img src={item.thumbnail_pic_s} alt="" />
          <div>
            <div className="title">{item.title}</div>
            <div className="date">
              <span>{item.date}</span>
              <span>{item.author}</span>
            </div>
          </div>
        </div>
      })
    }
  </div>);
};

export default NewsList;
