<template>
  <article>
    <h1>Dropdown with Searchable Text</h1>
    <p>It is really easy to create an input field with a searchable dropdown with just HTML</p>
    <pre class="code block">
      &lt;label for="myHouse"&gt;Choose your magical house:&lt;/label&gt;
      &lt;input list="magicHouses" id="myHouse" name="myHouse" placeholder="type here..." /&gt;
      &lt;datalist id="magicHouses"&gt;
      &nbsp;&nbsp;&lt;option value="Gryfindor"&gt;
      &nbsp;&nbsp;&lt;option value="Hufflepuff"&gt;
      &nbsp;&nbsp;&lt;option value="Slytherin"&gt;
      &nbsp;&nbsp;&lt;option value="Ravenclaw"&gt;
      &nbsp;&nbsp;&lt;option value="Horned Serpent"&gt;
      &nbsp;&nbsp;&lt;option value="Thunderbird"&gt;
      &nbsp;&nbsp;&lt;option value="Pukwudgie"&gt;
      &nbsp;&nbsp;&lt;option value="Wampus"&gt;
      &lt;/datalist&gt;
    </pre>
    <p>You can also add more options with JavaScript like this.</p>
    <pre class="code block">
      const option = document.createElement('option');
      option.value = 'Fortress of Solitude';
      document.querySelector('#magicHouses').appendChild(option);
    </pre>
    <p>The result</p>
    <label for="myHouse">Choose your magical house:</label>
    <input list="magicHouses" id="myHouse" name="myHouse" placeholder="type here..." />
    <datalist id="magicHouses">
      <option value="Gryfindor"></option>
      <option value="Hufflepuff"></option>
      <option value="Slytherin"></option>
      <option value="Ravenclaw"></option>
      <option value="Horned Serpent"></option>
      <option value="Thunderbird"></option>
      <option value="Pukwudgie"></option>
      <option value="Wampus"></option>
      <option value="Fortress of Solitude"></option>
    </datalist>
    <p>
      Pretty neat and simple! All I would do now is to style the input field with just a little CSS, then it would be done.
      No need to bring in a extra library or spend hours programming the wheel.
    </p>
    <p>
      Street cred goes to
      <a
        href="https://twitter.com/_ananyaneogi"
        target="_blank"
        rel="noopener"
      >Ananya Neogi</a> for her
      <a
        href="https://dev.to/ananyaneogi/html-can-do-that-c0n"
        target="_blank"
        rel="noopener"
      >article on dev.to</a>
    </p>
  </article>
</template>
