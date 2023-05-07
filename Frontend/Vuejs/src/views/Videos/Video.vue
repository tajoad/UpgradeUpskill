<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer.vue";

export default {
  name: "Video",
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "https://vod-progressive.akamaized.net/exp=1682786450~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1858%2F29%2F734294953%2F3397702790.mp4~hmac=6b00a4d919063ed900c8ea7bab8e51afe761066653c7d02b906e0c25328ac18c/vimeo-prod-skyfire-std-us/01/1858/29/734294953/3397702790.mp4?filename=file.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
