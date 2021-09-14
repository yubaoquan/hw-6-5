import { Tabs } from 'antd';
import { useState, useEffect } from 'react';
import { fetchNews as apiFetchNews } from '../../api/news';
import NewsList from '../../components/news-list';

const { TabPane } = Tabs;

const newsCategories = [
  { title: '推荐', id: 'top' },
  { title: '国内', id: 'guonei' },
  { title: '国际', id: 'guoji' },
  { title: '娱乐', id: 'yule' },
  { title: '体育', id: 'tiyu' },
  { title: '军事', id: 'junshi' },
  { title: '科技', id: 'keji' },
  { title: '财经', id: 'caijing' },
  { title: '时尚', id: 'shishang' },
  { title: '游戏', id: 'youxi' },
  { title: '汽车', id: 'qiche' },
  { title: '健康', id: 'jiankang' },
];

const initNewsCollection = newsCategories.reduce((all, category) => {
  all[category.id] = {
    list: [],
    page: 0,
  };

  return all;
}, {})

const NewsPage = () => {
  console.info(123);

  const [newsCollection, setNewCollection] = useState(initNewsCollection)

  const fetchNews = async (type) => {
    const page = newsCollection[type].page + 1;
    const news = await apiFetchNews({page, type})
    console.info(news)

    setNewCollection({
      ...newsCollection,
      [type]: {
        page,
        list: news,
      }
    })
  }


  useEffect(() => {
    fetchNews('top');
  }, []);

  const handleTabChange = (tab) => {
    console.info(tab)
    if (!newsCollection[tab].list.length) {
      fetchNews(tab);
    }
  }

  return (<div>
    <div>
      <Tabs defaultActiveKey="top" onChange={handleTabChange}>
        {
          newsCategories.map(category => {
            return <TabPane tab={category.title} key={category.id}>
              <NewsList news={newsCollection[category.id].list} />
            </TabPane>
          })
        }
      </Tabs>
    </div>
  </div>);
};

export default NewsPage;
