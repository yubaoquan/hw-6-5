import axios from 'axios';

export const fetchNews = async ({page, type}) => {
  try {
    const res = await axios.get('/toutiao/index', {
      params: {
        key: 'dfb93ade00c180409254236a492998bc',
        type,
        page,
        page_size: 10,
        is_filter: 1,
      },
    });
    return res.data.result?.data;
  } catch (e) {
    console.error(e);
  }
};
