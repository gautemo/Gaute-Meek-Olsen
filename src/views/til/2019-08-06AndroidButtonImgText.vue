<template>
  <article>
    <h1>Button with image and text</h1>
    <p>
      You can easily create a button with both an drawable and text with the view Button.
      No need to create an ImageButton and a TextView, align them together and adding a click listener twice.
    </p>
    <img
      src="https://66.media.tumblr.com/d49e4aa874b4733c5b6489d4068ce291/tumblr_pvvevbBffL1xfbgtko1_1280.png"
      alt="Android buttons with image and text"
    />
    <figcaption>The wanted outcome</figcaption>
    <p>
      <span class="code block">
        &lt;Button
        <br />android:text="Start"
        <br />android:drawableTop="@drawable/start_wrap"
        <br />android:drawableTint="@android:color/white"
        <br />android:drawablePadding="10dp"
        <br />android:background="@android:color/transparent"
        <br />android:textColor="@android:color/white"/&gt;
      </span>
    </p>
    <p>You can also place the image under, to the left or right.</p>
    <p>
      The reason I have wrapped my drawable in another drawable is to control the size just for this button. Like this:
      <span
        class="code block"
      >
        &lt;?xml version="1.0" encoding="utf-8"?&gt;
        <br />&lt;layer-list xmlns:android="http://schemas.android.com/apk/res/android" &gt;
        <br />&nbsp;&nbsp;&lt;item
        <br />&nbsp;&nbsp;android:drawable="@drawable/baseline_camera_enhance_24"
        <br />&nbsp;&nbsp;android:width="40dp"
        <br />&nbsp;&nbsp;android:height="40dp"
        <br />&nbsp;&nbsp;/&gt;
        <br />&lt;/layer-list &gt;
        <br />
      </span>
    </p>
  </article>
</template>
