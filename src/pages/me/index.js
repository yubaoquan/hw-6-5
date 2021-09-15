import { Drawer } from 'antd';
import { useState } from 'react';
import './style.less'

const MePage = () => {
  const [showDrawer, toggleDrawer] = useState(false);

  const handleHeadTriggerClick = () => {
    toggleDrawer(true)
  }

  const handleCancelClick = () => {
    toggleDrawer(false)
  }

  const handleOpenCameraClick = () => {
    console.info(`拍照`)
    toggleDrawer(false)
  }

  const handleOpenGalleryClick = () => {
    console.info(`相册`)
    toggleDrawer(false)
  }

  return (
    <div>
      <div className="trigger" onClick={handleHeadTriggerClick}>头像</div>
      <Drawer
          title="操作"
          placement='bottom'
          closable={true}
          visible={showDrawer}
          onClose={handleCancelClick}
        >
          <p className="drawer-btn" onClick={handleOpenCameraClick}>拍照</p>
          <p className="drawer-btn" onClick={handleOpenGalleryClick}>从相册选取</p>
          <p className="drawer-btn" onClick={handleCancelClick}>取消</p>
        </Drawer>
    </div>
  );
};

export default MePage;
