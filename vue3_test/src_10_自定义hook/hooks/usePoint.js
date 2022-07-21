import { onBeforeUnmount, onMounted, reactive } from 'vue';

export default function () {
  // 数据
  const point = reactive({
    x: 0,
    y: 0,
  });

  //方法
  function getPoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
  }

  // 生命周期函数
  onMounted(() => {
    window.addEventListener('click', getPoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', getPoint);
  });

  return point;
}
