<template>
  <div id="content">
    <div id="overlay">
      <header>
        <div id="profile-img">
          <img
            v-if="!showAvatar"
            src="https://66.media.tumblr.com/9823ec18bebb207226f06fe1b7f0278b/tumblr_pvx41i3UCx1xfbgtko1_r2_250.png"
            alt="image of Gaute Meek Olsen"
          />
          <img v-else :src="avatar" alt="avatar of Gaute Meek Olsen" />
        </div>
        <div class="text">
          <p>
            Hi, I'm
            <span class="gaute">Gaute</span>Gaute Meek Olsen
          </p>
        </div>
      </header>
      <section>
        <p>Sometimes I do frontend, sometimes I do backend, sometimes I do mobile development. But I always do what is fun!</p>
        <div id="follow">
          <Twitter class="twitter" />
          <LinkedIn class="linkedin" />
          <Github class="github" />
          <Instagram class="instagram" />
          <Snapchat class="snapchat" />
          <GooglePlay class="googleplay" />
          <Medium class="medium"/>
          <Devto class="devto"/>
        </div>
        <p>
          Use the menu to see my own projects, talks I've given, developer blog and travel blog.
          Always feel free to follow and contact me anyway you want.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

const background = [
  'https://66.media.tumblr.com/06655912c488015222373ae8ad18930e/tumblr_phmfvgJI3u1xfbgtko1_1280.jpg',
  'https://66.media.tumblr.com/ed67d55052803c7c5e251c16a07814f8/tumblr_phmfvgJI3u1xfbgtko2_1280.jpg',
  'https://66.media.tumblr.com/9ef53aa823f31ea65e980d67faeb5500/tumblr_phmfvgJI3u1xfbgtko3_1280.jpg',
  'https://66.media.tumblr.com/c7d46fc076111cbb05887d86e84477a6/tumblr_phmfvgJI3u1xfbgtko4_1280.jpg',
  'https://66.media.tumblr.com/96b0a74aeaabd9e262a74e1a4fdc8441/tumblr_phmfvgJI3u1xfbgtko5_1280.jpg',
  'https://66.media.tumblr.com/f87284eae48ae06f63f4a3bb0b64a6ca/tumblr_phmfsizKXC1xfbgtko1_1280.jpg',
  'https://66.media.tumblr.com/c75e0d7ba0323f95a77e854e82793a54/tumblr_phmfsizKXC1xfbgtko2_1280.jpg',
  'https://66.media.tumblr.com/79b495e3169718ddfe52f344f59196a8/tumblr_phmfsizKXC1xfbgtko3_1280.jpg',
  'https://66.media.tumblr.com/c58df87525fadd415897efcc380d3276/tumblr_phmfsizKXC1xfbgtko4_1280.jpg',
  'https://66.media.tumblr.com/09e59a2153da2dedce98b731a701294c/tumblr_phmfsizKXC1xfbgtko5_1280.jpg',
  'https://66.media.tumblr.com/4c22820e0a40fdaefb4d9beacf3a9ff2/tumblr_phmfsizKXC1xfbgtko6_1280.jpg',
  'https://66.media.tumblr.com/5b9d58d493a385a8c70366fdc8be3902/tumblr_phmfsizKXC1xfbgtko7_1280.jpg',
  'https://66.media.tumblr.com/80901fb59121c3d81e662549cfc7fcd1/tumblr_phmfsizKXC1xfbgtko8_1280.jpg',
  'https://66.media.tumblr.com/898f400c0c77745989cf28bc11844526/tumblr_phmfsizKXC1xfbgtko9_1280.jpg',
  'https://66.media.tumblr.com/34300c2458471cf43bc70558b5bf2578/tumblr_phmfsizKXC1xfbgtko10_1280.jpg'
]

const avatars = [
  'https://66.media.tumblr.com/5f0c6ff33886956afe320fc4a0b3237c/tumblr_phmfqsRSzC1xfbgtko1_400.png',
  'https://66.media.tumblr.com/d27ab20d76451c0c50ef05367e2699fb/tumblr_phmfqsRSzC1xfbgtko2_400.png',
  'https://66.media.tumblr.com/57febc684648c8f1d340627a3fb4a993/tumblr_phmfpwCi7v1xfbgtko1_400.png',
  'https://66.media.tumblr.com/92ebad375108e2c2717d1e79762c033f/tumblr_phmfpwCi7v1xfbgtko2_400.png',
  'https://66.media.tumblr.com/cab05fd5167d8144ecfff35ada841a02/tumblr_phmfpwCi7v1xfbgtko3_400.png',
  'https://66.media.tumblr.com/f1e28479ac1e6e157defb91d9fb23968/tumblr_phmfpwCi7v1xfbgtko5_400.png',
  'https://66.media.tumblr.com/c3ec6f3e0ee9926e817200a71d4c3821/tumblr_phmfpwCi7v1xfbgtko6_400.png',
  'https://66.media.tumblr.com/6379f43fc62aa177aadd6d04fcf1b08e/tumblr_phmfpwCi7v1xfbgtko7_400.png',
  'https://66.media.tumblr.com/e3ee78f9f8e15f020d4e9494553baa60/tumblr_phmfpwCi7v1xfbgtko8_400.png',
  'https://66.media.tumblr.com/ec3587b141f196e8247a52796a7b05b6/tumblr_phmfpwCi7v1xfbgtko9_400.png',
  'https://66.media.tumblr.com/55a0fccf3579e860120e45b5d7ffce69/tumblr_phmfpwCi7v1xfbgtko10_400.png'
]

export default {
  name: 'home',
  mounted: function () {
    document
      .querySelector('#content')
      .style.setProperty(
        '--background-img',
        `url(${background[getRandomInt(background.length)]}`
      )
    const pimg = document.querySelector('#profile-img')
    pimg.addEventListener('mouseover', () => {
      if (!this.showAvatar) {
        this.avatar = avatars[getRandomInt(avatars.length)]
        this.showAvatar = true
      }
    })
    pimg.addEventListener('mouseleave', () => (this.showAvatar = false))
    pimg.addEventListener('click', () => {
      this.avatar = avatars[getRandomInt(avatars.length)]
      this.showAvatar = true
    })
  },
  data () {
    return {
      showAvatar: false,
      avatar:
        'https://66.media.tumblr.com/cab05fd5167d8144ecfff35ada841a02/tumblr_phmfpwCi7v1xfbgtko3_400.png'
    }
  },
  components: {
    Twitter: () => import(`@/components/follow/Twitter`),
    Instagram: () => import(`@/components/follow/Instagram`),
    Github: () => import(`@/components/follow/Github`),
    GooglePlay: () => import(`@/components/follow/GooglePlay`),
    Snapchat: () => import(`@/components/follow/Snapchat`),
    LinkedIn: () => import(`@/components/follow/LinkedIn`),
    Medium: () => import(`@/components/follow/Medium`),
    Devto: () => import(`@/components/follow/Devto`),
  }
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
</script>

<style scoped>
#content {
  --background-img: url(https://66media.tumblr.com/80901fb59121c3d81e662549cfc7fcd1/tumblr_phmfsizKXC1xfbgtko8_1280.jpg);
  --gaute-translate: translate(5px, 10px);
  height: 100%;
  width: 100%;
  background: var(--background-img);
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
}

#overlay {
  background-image: linear-gradient(
    to top,
    #3f50b1d8 0%,
    #5a55aed8 13%,
    #7b5facd8 25%,
    #8f6aaed8 38%,
    #a86aa4d8 50%,
    #cc6b8ed8 62%,
    #f18271d8 75%,
    #f3a469d8 87%,
    #f7c978d8 100%
  );
  height: 100%;
  width: 100%;
  overflow: auto;
}

header {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 5vw;
  padding: 5vw;
}

header .text {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

header p {
  font-family: "Wendy One", sans-serif;
  font-size: 3vw;
  font-weight: bold;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.08em;
  animation: typing 5.5s;
}

#profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

#profile-img img {
  width: 95%;
  border-radius: 50%;
  background-color: #0dbee6;
  padding: 0.4vw;
}

.gaute {
  position: absolute;
  font-size: 1.1em;
  animation: gauteanim 9s forwards;
  color: #0dbee6;
  /*background: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;*/
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes gauteanim {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  90% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    transform: var(--gaute-translate);
  }
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 0 50px 50px 50px;
}
section p {
  width: 65%;
  font-size: 1.75em;
}

#follow {
  width: 70%;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-items: center;
  align-items: center;
  position: relative;
}

.twitter::before {
  content: "Twitter";
  position: absolute;
  transform: translate(-5px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.linkedin::before {
  content: "LinkedIn";
  position: absolute;
  transform: translate(-10px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.github::before {
  content: "Github";
  position: absolute;
  transform: translate(-4px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.instagram::before {
  content: "Instagram";
  position: absolute;
  transform: translate(-12px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.snapchat::before {
  content: "Snapchat";
  position: absolute;
  transform: translate(-12px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.googleplay::before {
  content: "Google Play";
  position: absolute;
  transform: translate(-20px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.tumblr::before {
  content: "Tumblr";
  position: absolute;
  transform: translate(-5px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.medium::before {
  content: "Medium";
  position: absolute;
  transform: translate(-5px, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}
.devto::before {
  content: "Dev.to";
  position: absolute;
  transform: translate(0, -30px);
  font-size: 1.2em;
  font-weight: bold;
  color: var(--white);
}

@media only screen and (max-width: 768px) {
  #content {
    --gaute-translate: translate(2px, 5px);
  }

  header {
    grid-template-columns: 1fr 4fr;
  }

  header p {
    font-size: 4.5vw;
  }

  section {
    margin: 10px;
  }
  section p {
    width: 85%;
    font-size: 1em;
  }

  #follow {
    width: 90%;
  }

  .twitter::before {
    font-size: 1em;
    transform: translate(-2px, -20px);
  }
  .linkedin::before {
    font-size: 1em;
    transform: translate(-7px, -20px);
  }
  .github::before {
    font-size: 1em;
    transform: translate(-2px, -20px);
  }
  .instagram::before {
    font-size: 1em;
    transform: translate(-8px, -20px);
  }
  .snapchat::before {
    font-size: 1em;
    transform: translate(-7px, -20px);
  }
  .googleplay::before {
    font-size: 1em;
    transform: translate(-15px, -20px);
  }
  .tumblr::before {
    font-size: 1em;
    transform: translate(-2px, -20px);
  }
  .medium::before {
    font-size: 1em;
    transform: translate(-2px, -20px);
  }
  .devto::before {
    font-size: 1em;
    transform: translate(1px, -20px);
  }
}
</style>
