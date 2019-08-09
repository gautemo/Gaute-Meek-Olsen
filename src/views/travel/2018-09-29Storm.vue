<template>
  <article>
    <h1>Into the Storm</h1>
    <p class="date">29.09.2018</p>
    <img src="https://pbs.twimg.com/media/Dn9IXA_XkAID1hs.jpg">
    <figcaption>Actual photo taken of me from a satellite</figcaption>
    <section>
      After Beijing, it was time to get to Japan. Japan! First I flew to Hong Kong, arriving 01:00 at night. And the next flight to Ishigaki
      is at seven hours from now on. I read that you can check-in 24 hours in advance. So I was like 'Yeah, I'll check in and get to airside, find a nice bench
      and get some sleep.' But sending your bag is not the same as check-in. So I couldn't do that before 04:50 at night.
      So I had to stay at landside, for the night. But I found a bed, the floor. Actually, I managed to sleep. Waking up was like, 'oh, can't I just sleep some more'.
    </section>
    <ImageSlider :images="airport"/>
    <section>
      When I sat down at the plain to Ishigaki, the captain started speaking as he/she normally do. He said that he might not be able to land on Ishigaki,
      because of the typhoon. I was like 'Wait what.. Where are we going?'. But he would fly all the way over there and see if the airplane would manage the wind,
      if not we were going back to Hong Kong. But we landed, and I was walking out the plane it wasn't really that windy. Maybe I have a misconception about what a
      typhoon really is. So I checked it out. But a typhoon is exactly the same as a cyclone or a hurricane, it only depends on where on earth you are.
    </section>
    <section>
      The weather on Ishigaki was really hot and nice, as I walked to the hostel for 45 minutes, I managed to get sunburned on my shoulders.
      As I was wearing a singlet and didn't put on any sunscreen, because getting from the airport to the hostel is not normally a sunscreen situation.
      When I got to the hostel, the owner again started talking about the typhoon. Typhoon Trami. It was going to hit Ishigaki in the next two days.
    </section>
    <img
      src="https://66.media.tumblr.com/556856f04334d3b1ac96c1d929a9c31c/tumblr_pfssiatSxB1xfbgtko1_1280.jpg"
    >
    <figcaption>Morning after the worst part is done in Ishigaki.</figcaption>
    <section>
      Luckily the center of the typhoon will not hit the island, but we get a lot of wind and rain from being close to the center. Typhoon Trami is a category 5 typhoon;
      'Violent Typhoon' which is the strongest category. On Ishigaki, it hasn't been that bad, as the typhoon now has almost passed.
      Airplanes have been canceled the past days, so some people on the hostel can't leave and new ones can't arrive. Next, the typhoon will head straight for Japan.
      By the time I am flying to Osaka, the typhoon will have passed main Japan.
      Hopefully the airport will be up and running and open for my flight.
    </section>
    <img
      src="https://66.media.tumblr.com/d825dd1cb999c16d463b5adc61aab8ec/tumblr_pfso1w0LM01w9240l_1280.jpg"
    >
    <section>
      When the typhoon started to wear off, Hiro took us out for a day trip to some hidden beaches and a lighthouse.
      Some branches had been broken off and laid in the road. But he got a huge car that could just drive over them.
      The wind was still strong. Really strong actually! When I took some pictures, it felt like the phone would just be blown out of my hand.
      Samuel decided to hold me still while I clicked away, it wasn't really necessary though. A Norwegian, Argentinian and a German
      decided to go out swimming. The ocean was really warm.
    </section>
    <ImageSlider :images="trip"/>
    <section>
      Luckily the typhoon did not get dangerous on Ishigaki.
      Though a timing with no typhoon would be better.
      But as a Japanese man told me,
      'First time to Japan, you are lucky, it's a nice experience'.
      Beaches, ferryes, busses, stores, airplanes and other things closed down. So there wasn't much we could do for two days.
    </section>
    <blockquote class="twitter-tweet" data-lang="no">
      <p lang="en" dir="ltr">
        As if somebody pulled the planet&#39;s gigantic plug. Staring down the eye of yet another fierce storm. Category 5 Super Typhoon Trami is unstoppable and heading for Japan and Taiwan. Be safe down there!
        <a
          href="https://twitter.com/hashtag/TyphoonTrami?src=hash&amp;ref_src=twsrc%5Etfw"
          rel="noopener"
        >#TyphoonTrami</a>
        <a href="https://t.co/4VmY2hhj2c" rel="noopener">pic.twitter.com/4VmY2hhj2c</a>
      </p>&mdash; Alexander Gerst (@Astro_Alex)
      <a
        href="https://twitter.com/Astro_Alex/status/1044633209454174213?ref_src=twsrc%5Etfw"
        rel="noopener"
      >25. september 2018</a>
    </blockquote>
    <script
      type="application/javascript"
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    <section>
      <b>Update:</b>
      Typhoon Trami killed three people in Japan, injured nearly 200 and left over one million people without power across Japan.
      I'm now in Osaka, but do not notice anything from when Trami hit here 2 days ago.
    </section>
  </article>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue'

export default {
  name: 'Travel20180921',
  data () {
    return {
      airport: [
        {
          src:
            'https://66.media.tumblr.com/79082687d15e1cd5e65b930913728dc8/tumblr_pfso1jKqiq1w9240l_1280.jpg',
          cap: 'The bed'
        },
        {
          src:
            'https://66.media.tumblr.com/1f7766c1147bdc89aec1cd1c2f2960dc/tumblr_pfso1mAQVj1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/a9061e0e04fb91d1a441c448d8f1654b/tumblr_pfso1r29mZ1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/c42a7cbeeb8dbb691b38992f0ac1bde7/tumblr_pfso16NBji1w9240l_1280.jpg'
        }
      ],
      trip: [
        {
          src:
            'https://66.media.tumblr.com/026550df6eecf30bf6b8b3f8b237ae3b/tumblr_pfyy0dt38y1w9240l_1280.jpg',
          cap: 'Pictures from our trip'
        },
        {
          src:
            'https://66.media.tumblr.com/425727d6c26310d29774e5e04253c7f1/tumblr_pfyxzweN5Q1w9240l_1280.jpg',
          cap: 'Amy: \'I like this picture the best "swimming in the typhoon"'
        },
        {
          src:
            'https://66.media.tumblr.com/b0ad0e0fa00754d5edd66c977b66a9e5/tumblr_pfyy03qNAe1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/d4e2aabe9e82d4b30be48c56c8af7313/tumblr_pfyxzs2oW61w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/1459b1d61ebb0a8f007bfdf647f5ae9c/tumblr_pfyy0ljH0S1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/d942ad5ff680e731d979df75314ba19a/tumblr_pfyxzowR3G1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/761a135c8eefcd0fc7fbe16c4c692547/tumblr_pfyy064nH01w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/097b2514d0c2dd5ccc3cb827bf6f8a37/tumblr_pfyy0aQO5D1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/cf504b16da8daa502953afb81d8a1a0d/tumblr_pfyyf7l56T1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/cf1f29cf640ccf0c86ffac8abf12033c/tumblr_pfyyfb1wYy1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/153b4d8baf799ef879287f7a8d8ef9b7/tumblr_pfyyffsbYF1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/55aa9071fd20357def9dcd0a4946eaf4/tumblr_pfyyf1E0tl1w9240l_1280.jpg'
        },
        {
          src:
            'https://66.media.tumblr.com/e642083fe44d93199f5e80937b1d78eb/tumblr_pfyyf41mRa1w9240l_1280.jpg'
        }
      ]
    }
  },
  components: {
    ImageSlider
  }
}
</script>

<style scoped>
</style>
