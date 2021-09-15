import { useEffect, useState } from 'react';
import { get3d } from '../../api/weather';
import './style.less';

const HomePage = () => {
  const [weathers, setWeathers] = useState([]);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      function onSuccess(position) {
        const { longitude, latitude } = position.coords;
        // 调用天气预报接口
        get3d(longitude.toFixed(2) + ',' + latitude.toFixed(2))
          .then(res => {
            let daily = []
            if (res.data.code === '200') {
              daily = res.data.daily;
            }
            console.info(daily)
            setWeathers(daily);
          })
          .catch(console.error)
      },
      function onError(error) {
        alert('Code: ' + error.code + '\n Message: ' + error.message)
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000, // 毫秒为单位
      },
    )
  }

  useEffect(() => {
    getPosition()
  }, [])

  return (<div>
    <div className="page-title">天气</div>
    <div>
      {
        weathers.map(item => {
          const {
            fxDate,
            textDay,
            textNight,
            windDirDay,
            windDirNight,
            windScaleDay,
            windScaleNight,
            tempMin,
            tempMax,
            iconDay,
          } = item;
          const windDay = `白天 ${windDirDay} ${windScaleDay}级`;
          const windNight = `夜间 ${windDirNight} ${windScaleNight}级`;
          const temp = `气温 ${tempMin}°C - ${tempMax}°C`

          return (
            <div className="weather-item" key={fxDate}>
              <img src={require(`../../assets/bw-64/${iconDay}.png`).default} alt="" />
              <div>
                <div>{ fxDate } { textDay } / { textNight }</div>
                <div>{ temp }</div>
                <div>{ windDay }</div>
                <div>{ windNight }</div>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>);
};

export default HomePage;
