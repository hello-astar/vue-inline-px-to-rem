<template>
  <div style="width: 100px;height: 200px">{{test}}</div>
</template>
<script>
export default {
  data () {
    return {
      test: '120px'
    }
  },
  mounted () {
    let container = document.querySelector('.frame');
    const RADIUS = '80px';
    let test = 120 + 'px';

    document.addEventListener('mousemove', function (event) {
      let x = event.clientX;
      let y = event.clientY;
      
      let circle = `circle(${RADIUS} at ${x}px ${y}px)`;
      container.style['-webkit-clip-path'] = circle;
      container.style['clip-path'] = circle;
    });
  }
}
</script>