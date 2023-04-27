import { createHeader } from '/src/default_layout/header.js';
import { createFooter } from '/src/default_layout/footer.js';
import { slideSetting } from '/src/modules/list_sliderModules/listSlider.js';
import { sliderEvent } from '/src/modules/list_sliderModules/mainEventSlider.js';

document.addEventListener('DOMContentLoaded', () => {
  // 헤더 푸터 세팅
  createHeader();
  createFooter();
  // 슬라이더 세팅
  slideSetting();
  sliderEvent();
});
