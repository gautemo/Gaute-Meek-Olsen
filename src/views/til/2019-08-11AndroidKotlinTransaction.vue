<template>
  <article>
    <h1>Fragment Transactions with Kotlin</h1>
    <p>First add a helper method on the FragmentManager</p>
    <pre class="code block">
      inline fun FragmentManager.inTransaction(func: FragmentTransaction.() -> FragmentTransaction) {
      &nbsp;&nbsp;beginTransaction().addToBackStack(null).func().commit()
      }
    </pre>
    <p>Then we can call it, like this:</p>
    <pre class="code block">
      supportFragmentManager.inTransaction {
      &nbsp;&nbsp;add(android.R.id.content, GalleryFragment())
      }
    </pre>
  </article>
</template>
