<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">{{  title }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'Headers',
    props: {
        title: String
    }
  }
  </script>