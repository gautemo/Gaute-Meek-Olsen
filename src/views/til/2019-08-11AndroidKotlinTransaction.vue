<template>
  <article>
    <h1>Fragment Transactions with Kotlin</h1>
    <p>First add a helper method on the FragmentManager</p>
    <span class="code block">
      inline fun FragmentManager.inTransaction(func: FragmentTransaction.() -> FragmentTransaction) {
      <br />&nbsp;&nbsp;beginTransaction().addToBackStack(null).func().commit()
      <br />}
    </span>
    <p>Then we can call it, like this:</p>
    <span class="code block">
      supportFragmentManager.inTransaction {
      <br />&nbsp;&nbsp;add(android.R.id.content, GalleryFragment())
      <br />}
    </span>
  </article>
</template>
