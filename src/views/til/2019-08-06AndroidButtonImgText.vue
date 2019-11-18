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
      <pre class="code block">
        &lt;Button
        android:text="Start"
        android:drawableTop="@drawable/start_wrap"
        android:drawableTint="@android:color/white"
        android:drawablePadding="10dp"
        android:background="@android:color/transparent"
        android:textColor="@android:color/white"/&gt;
      </pre>
    </p>
    <p>You can also place the image under, to the left or right.</p>
    <p>
      The reason I have wrapped my drawable in another drawable is to control the size just for this button. Like this:
      <pre class="code block">
        &lt;?xml version="1.0" encoding="utf-8"?&gt;
        &lt;layer-list xmlns:android="http://schemas.android.com/apk/res/android" &gt;
        &nbsp;&nbsp;&lt;item
        &nbsp;&nbsp;android:drawable="@drawable/baseline_camera_enhance_24"
        &nbsp;&nbsp;android:width="40dp"
        &nbsp;&nbsp;android:height="40dp"
        &nbsp;&nbsp;/&gt;
        &lt;/layer-list &gt;
      </pre>
    </p>
  </article>
</template>
