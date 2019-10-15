





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-6n1YJKtZY5Ca6umfKUilaXS5b6Cxywb+4eGfryi/HfvOYvzbbnahUwkAgkmpV9RExoZ8rSXE+q5o+j9V1KJQJQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-ee617bc9c481ffefa8d30b335398af1f.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-isd7kWPzwlyykVWfnxZj5sLSYcsRkpKLANxY5GFZri8eX4fhYEKn2B9N1gSQw1mUkrrRUAbOLeR8xHIXRTXkbw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-712c5bb227aeaff78a6fc633b10aee1d.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>kripken/sql.js: SQLite compiled to JavaScript through Emscripten</title>
    <meta name="description" content="SQLite compiled to JavaScript through Emscripten. Contribute to kripken/sql.js development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars1.githubusercontent.com/u/173661?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="kripken/sql.js" /><meta name="twitter:description" content="SQLite compiled to JavaScript through Emscripten. Contribute to kripken/sql.js development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/173661?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="kripken/sql.js" /><meta property="og:url" content="https://github.com/kripken/sql.js" /><meta property="og:description" content="SQLite compiled to JavaScript through Emscripten. Contribute to kripken/sql.js development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDU2NjY1OTE3OjVkYjU1MmEwMDU1NzU5ZTgwYzg1YjQ2NDA4ZDBlOWNiMjBjYmU0MTdiYjRjNDY1ZGM1YTlhMTJhMTdlNzM5OTE=--a4033bc5624e5d9734d4656c4b65d824fcf590cb">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="36DA:10991:556814D:805F5CB:5DA5CA7C" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="36DA:10991:556814D:805F5CB:5DA5CA7C" /><meta name="octolytics-dimension-region_edge" content="ams" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="5458761451721273814" /><meta name="octolytics-actor-id" content="18735885" /><meta name="octolytics-actor-login" content="d53520" /><meta name="octolytics-actor-hash" content="35013ce21dee002c592343ac2e209cfd8f123854713bf4a17e96c1d92dd02229" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="386b719f6134d46e0cc23fdb9215a138">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="d53520">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Njc0NzIzMzgwNWY2YjEyYzRmODVjYWIyM2VhNWJmODU3MGNhNmUyMzMxMDc2OGJiNTA5ODA3OTgwYjBhNDE5Znx7InJlbW90ZV9hZGRyZXNzIjoiMjEwLjE1Ny44NC4xMjMiLCJyZXF1ZXN0X2lkIjoiMzZEQToxMDk5MTo1NTY4MTREOjgwNUY1Q0I6NURBNUNBN0MiLCJ0aW1lc3RhbXAiOjE1NzExNDYzNjYsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

  <meta name="html-safe-nonce" content="5db50bc8d5972997b81a3371c49a35ac53c3d7dc">

  <meta http-equiv="x-pjax-version" content="bee6c31580b9df9a58168c7f4a794bde">
  

      <link href="https://github.com/kripken/sql.js/commits/master.atom" rel="alternate" title="Recent Commits to sql.js:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/kripken/sql.js git https://github.com/kripken/sql.js.git">

  <meta name="octolytics-dimension-user_id" content="173661" /><meta name="octolytics-dimension-user_login" content="kripken" /><meta name="octolytics-dimension-repository_id" content="3556910" /><meta name="octolytics-dimension-repository_nwo" content="kripken/sql.js" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="3556910" /><meta name="octolytics-dimension-repository_network_root_nwo" content="kripken/sql.js" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/kripken/sql.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production min-width-lg">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header" role="banner">

    <div class="Header-item">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>


    <div class="Header-item Header-item--full">
        <div class="header-search mr-3 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="3556910" data-scoped-search-url="/kripken/sql.js/search" data-unscoped-search-url="/search" action="/kripken/sql.js/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=buUT21ES1oke4G72cU4tuWtVPkQDXSGByWwRdK3yUgwyQY8es8/87e4CpP22cIHUh5Aed+v7SwfUVx9aoHPkIQ=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex" aria-label="Global">

  <a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-3">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-3" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>

</nav>

    </div>



    <div class="Header-item">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:18735885" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="kripken/sql.js">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/kripken/sql.js/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0">
      
<details class="details-overlay details-reset">
  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@d53520" class="avatar" src="https://avatars0.githubusercontent.com/u/18735885?s=40&amp;v=4" height="20" width="20">
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/d53520" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">d53520</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:173661,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:18735885,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;}}" data-hydro-click-hmac="59adb80993c9392e8faf65a1b98bdb868e9aed71ad55efe399b31cc3292e66f8">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="JuMz66ivcaY6/FKoHJeaEjKD3AwpNXzXJIiYyEwRGQ7+LOjA9AvhwCOVOvE1girC9RSU5Qn7VIMX38KRcvEs8Q==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-10-15T23:02:46+09:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-10-15T23:32:46+09:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-10-16T02:32:46+09:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-10-15T23:59:59+09:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-10-20T23:59:59+09:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/d53520" data-ga-click="Header, go to profile, text:your profile">Your profile</a>


    <a role="menuitem" class="dropdown-item" href="/d53520?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/d53520?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/d53520?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>



    <div role="none" class="dropdown-divider"></div>
    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="q4Qepy/XW89KgoXfDQDkNN4Nnc6w+3Mx+LyWViq3SFAd1IKSUJrjqssGYQvb5jLTOq9q26ABFW9UINSFSEGa2g==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      
  










  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">



    <li >
      
    <details class="dropdown details-reset details-overlay d-inline-block float-left"
      data-deferred-details-content-url="/kripken/sql.js/used_by_contents"
    >
      <summary class="btn btn-sm btn-with-count" data-menu-button>
        <svg class="octicon octicon-package v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"/></svg>
        Used by
        <div class="dropdown-caret"></div>
      </summary>
      <include-fragment>
        <div class="dropdown-menu dropdown-menu-s p-3 text-center" style="width:360px;">
          <img width="32" height="32" alt="Loading..." class="my-0" src="https://github.githubassets.com/images/spinners/octocat-spinner-64.gif" />
          <p class="pt-1 m-0 f5 text-gray-light">
            Loading dependents...
          </p>
        </div>
      </include-fragment>
    </details>
    <a class="social-count"
      href="/kripken/sql.js/network/dependents?package_id=UGFja2FnZS0xMzgwNDgwOQ%3D%3D"
      aria-label="1637 repositories depend on this package"
    >
      1.6k
    </a>

    </li>

  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="jp+10nYK3CYcOYbZPwlorMj1am7JCMyDMesW/r/b9c5qkR1jZtEScprPcMQjxszPJ2oIYV6sIhrBvBgZKZo6tw==" />      <input type="hidden" name="repository_id" value="3556910">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="d6a93b09cf5dcb5e1c15c37f3ae4f41e1afe97c9934c91ba32446cb79ba98bc1" data-ga-click="Repository, click Watch settings, action:files#disambiguate">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/kripken/sql.js/watchers"
          aria-label="218 users are watching this repository">
          218
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/kripken/sql.js/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="H15BwZdtZ1KXvDbpcspu3ax9f3r3dtX2k29TiCu9BjAnkIiu892PLFBfF4RtPnafO0vctTZQrsxGc5CbU2H92w==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar kripken/sql.js" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="26cc9473fce3c59324b8a9ba1edb044b4311d554f7711046b29897ebd1ae4265" data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/kripken/sql.js/stargazers"
           aria-label="5783 users starred this repository">
           5.8k
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/kripken/sql.js/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="iSNoA1v13gafxqPxh/eWPYqaWiZrVwR8A902bc+obtiLu8Sj8L/Nkmc28cdsY5cIrOwcsawo9RrvMhBsruK0dQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star kripken/sql.js" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="7547332c21cc566818506893bf7e6848af57f58b177581f558d56bbdd8499640" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/kripken/sql.js/stargazers"
           aria-label="5783 users starred this repository">
          5.8k
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/kripken/sql.js/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Q8e61GFn8FAPG1otZsFPQqyuBbB3BaN6N8f/nScb8jvIgBD7KvqncBzWPsM/vAGEMd/DEdvw6GoC0cX6DEQjYQ==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="c31292bd04906f9d51e9fc02b6047ad1a3bdf1b63089c57a7a5aa486502a6e09" data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork" type="submit" title="Fork your own copy of kripken/sql.js to your account" aria-label="Fork your own copy of kripken/sql.js to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</button></form>
    <a href="/kripken/sql.js/network/members" class="social-count"
       aria-label="682 users forked this repository">
      682
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=173661" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kripken">kripken</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/kripken/sql.js">sql.js</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /kripken/sql.js" href="/kripken/sql.js">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /kripken/sql.js/issues" href="/kripken/sql.js/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">73</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /kripken/sql.js/pulls" href="/kripken/sql.js/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">9</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /kripken/sql.js/actions" href="/kripken/sql.js/actions">
        <svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z"/></svg>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /kripken/sql.js/projects" href="/kripken/sql.js/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /kripken/sql.js/wiki" href="/kripken/sql.js/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /kripken/sql.js/security/advisories" href="/kripken/sql.js/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /kripken/sql.js/pulse" href="/kripken/sql.js/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  px-3">
  <div class="repository-content ">

    
    
    

      <div class="mb-3">  <div class="f4">
        <span class="text-gray-dark mr-2" itemprop="about">
          SQLite compiled to JavaScript through Emscripten
        </span>
  </div>
</div>




  <div class="overall-summary overall-summary-bottomless">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/kripken/sql.js/commits/master">
            <svg class="octicon octicon-history" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
            <span class="num text-emphasized">
              323
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/kripken/sql.js/branches">
          <svg class="octicon octicon-git-branch" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          <span class="num text-emphasized">
            5
          </span>
          branches
        </a>
      </li>


      <li>
        <a href="/kripken/sql.js/releases">
          <svg class="octicon octicon-tag" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>
          <span class="num text-emphasized">
            1
          </span>
          release
        </a>
      </li>


        <li  data-contributors-hovercards-enabled >
            <a href="/kripken/sql.js/graphs/contributors" data-hovercard-type="contributors" data-hovercard-url="/kripken/sql.js/community_contributors/hovercard">
  <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"/></svg>
    <span class="num text-emphasized">
      20
    </span>
    contributors
</a>
        </li>

        <li>
          <a href="/kripken/sql.js/blob/master/LICENSE">
            <svg class="octicon octicon-law" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"/></svg>
              View license
          </a>
        </li>
    </ul>
  </div>

    <details class="details-reset">
      <summary title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
        <div class="d-flex repository-lang-stats-graph">
            <span class="language-color" aria-label="JavaScript 51.8%" style="width:51.8%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
            <span class="language-color" aria-label="CoffeeScript 35.0%" style="width:35.0%; background-color:#244776;" itemprop="keywords">CoffeeScript</span>
            <span class="language-color" aria-label="Makefile 10.4%" style="width:10.4%; background-color:#427819;" itemprop="keywords">Makefile</span>
            <span class="language-color" aria-label="HTML 2.2%" style="width:2.2%; background-color:#e34c26;" itemprop="keywords">HTML</span>
            <span class="language-color" aria-label="Shell 0.6%" style="width:0.6%; background-color:#89e051;" itemprop="keywords">Shell</span>
        </div>
      </summary>
      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/kripken/sql.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">51.8%</span>
              </a>
          </li>
          <li>
              <a href="/kripken/sql.js/search?l=coffeescript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#244776;"></span>
                <span class="lang">CoffeeScript</span>
                <span class="percent">35.0%</span>
              </a>
          </li>
          <li>
              <a href="/kripken/sql.js/search?l=makefile"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#427819;"></span>
                <span class="lang">Makefile</span>
                <span class="percent">10.4%</span>
              </a>
          </li>
          <li>
              <a href="/kripken/sql.js/search?l=html"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#e34c26;"></span>
                <span class="lang">HTML</span>
                <span class="percent">2.2%</span>
              </a>
          </li>
          <li>
              <a href="/kripken/sql.js/search?l=shell"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#89e051;"></span>
                <span class="lang">Shell</span>
                <span class="percent">0.6%</span>
              </a>
          </li>
        </ol>
      </div>
    </details>





    <div class="mt-2">
      <include-fragment src="/kripken/sql.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>
    </div>

  <div class="file-navigation in-mid-page d-flex flex-items-start">
  
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/kripken/sql.js/ref-list/master?source_action=disambiguate&amp;source_controller=files" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>


        <a class="btn btn-sm new-pull-request-btn" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;NEW_PULL_REQUEST_BUTTON&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="55d0f8b8aead0a16e5da846fb764d7ffa8eb67d898c32486f070c58157812000" data-ga-click="Repository, new pull request, location:repo overview" data-pjax="true" href="/kripken/sql.js/pull/new/master">New pull request</a>

  <div class="breadcrumb flex-auto">
    
  </div>

  <div class="BtnGroup">
      
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="BtnGroup-parent" action="/kripken/sql.js/new/master" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="kuGcrRSe7sSUmfRvIFogTT1xAaY81mhwNIVTOZFgIdRDgj2z3ReVbcxD/DJ44IIs6QtaW6961bNAVIQT7D1ASg==" />
    <button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…">
      Create new file
    </button>
</form>

      
  <a href="/kripken/sql.js/upload/master" class="btn btn-sm BtnGroup-item">
    Upload files
  </a>



    <a class="btn btn-sm empty-icon float-right BtnGroup-item" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="6a6b247ebdff583fc113bafff11651a7cec35a085147d49df509eaa0b3624160" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/kripken/sql.js/find/master">Find file</a>
  </div>


    

    <details class="get-repo-select-menu js-get-repo-select-menu  position-relative details-overlay details-reset">
  <summary class="btn btn-sm ml-2 btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;repository_id&quot;:3556910,&quot;target&quot;:&quot;CLONE_OR_DOWNLOAD_BUTTON&quot;,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="80e8ded6675fe11d70168a7c7d86fa5fe06be95f3edd5982849a5bb04af3cfdc">
    Clone or download
    <span class="dropdown-caret"></span>
</summary>  <div class="position-relative">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container  js-get-repo-modal">

      <div class="get-repo-modal-options">
          <div class="clone-options https-clone-options">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="JjyurFwcQJ4dnCcPvtDlFA2EgvNnVkcgFeV3MPOhNqsc+y8EXAkLxCJLp+26C4oH4DQ6eXpg/lc26FIABO4+ag==" /><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_SSH&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="6cdd6fcd05133e195b6a254aac290d65c38f0905de0d1e51af0a13b61891ef97" class="btn-link btn-change-protocol js-toggler-target float-right">Use SSH</button></form>

            <h4 class="mb-1">
              Clone with HTTPS
              <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
              </a>
            </h4>
            <p class="mb-2 get-repo-decription-text">
              Use Git or checkout with SVN using the web URL.
            </p>

            <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect value="https://github.com/kripken/sql.js.git" aria-label="Clone this repository at https://github.com/kripken/sql.js.git" readonly>
  <div class="input-group-button">
    <clipboard-copy value="https://github.com/kripken/sql.js.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="70deb2d672e19d4cbf9e9b3287c91f4df09d4b4742a6ac8c291f698108ef1a12"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></clipboard-copy>
  </div>
</div>

          </div>

          <div class="clone-options ssh-clone-options">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="FHQqj8pLMBe+XA158uyoNLnfkscUc5ke/8DJBEyu6GYus6snyl57TYGLjZv2N8cnVG8qTQlFIGnczew0u+Hgpw==" /><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="1222eff05f0d4f09c6f85ec3822c58ab73e2172ceb3962ad835f15b76655afc6" class="btn-link btn-change-protocol js-toggler-target float-right">Use HTTPS</button></form>
              <h4 class="mb-1">
                Clone with SSH
                <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                  <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
                </a>
              </h4>

                <div class="flash flash-warn my-3">
                  You don't have any public SSH keys in your GitHub account.
                  You can <a href="/settings/ssh/new">add a new public key</a>, or try cloning this repository via <button class="btn-link js-toggler-target">HTTPS.</button>
                </div>

              <p class="mb-2 get-repo-decription-text">
                  Use a password protected SSH key.
              </p>

              <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect value="git@github.com:kripken/sql.js.git" aria-label="Clone this repository at git@github.com:kripken/sql.js.git" readonly>
  <div class="input-group-button">
    <clipboard-copy value="git@github.com:kripken/sql.js.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="70deb2d672e19d4cbf9e9b3287c91f4df09d4b4742a6ac8c291f698108ef1a12"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></clipboard-copy>
  </div>
</div>

          </div>
        <div class="mt-2">
            <a class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline js-get-repo" aria-label="Clone kripken/sql.js to your computer and use it in GitHub Desktop." data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;OPEN_IN_DESKTOP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="4657f08d55a39a9b5936b0c6563659f3f6032645a6e28dda78901ae36550f42c" data-open-app="windows" href="x-github-client://openRepo/https://github.com/kripken/sql.js">Open in Desktop</a>

<a class="btn btn-outline get-repo-btn  " rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:3556910,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}" data-hydro-click-hmac="a30a00444c077876ef087cde14266d06d6c86bfb6b75b6c5982d55d7bdc1a10f" data-ga-click="Repository, download zip, location:repo overview" href="/kripken/sql.js/archive/master.zip">Download ZIP</a>

        </div>
      </div>


      <div class="js-modal-download-mac py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-windows py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-xcode py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching Xcode<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://developer.apple.com/xcode/">download Xcode</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-visual-studio py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching Visual Studio<span class="animated-ellipsis-container"><span class="animated-ellipsis">...</span></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://visualstudio.github.com/">download the GitHub extension for Visual Studio</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

    </div>
  </div>
</details>

</div>


  


  <div class="commit-tease js-details-container Details d-flex rounded-top-1" data-issue-and-pr-hovercards-enabled>
    
<div class="AvatarStack flex-self-start ">
  <div class="AvatarStack-body" aria-label="lovasoa">
        <a class="avatar" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=552629" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/lovasoa">
          <img height="20" width="20" alt="@lovasoa" src="https://avatars2.githubusercontent.com/u/552629?s=60&amp;v=4" />
</a>  </div>
</div>

    <div class="flex-auto f6 mr-3">
      
      <a href="/kripken/sql.js/commits?author=lovasoa"
     class="commit-author tooltipped tooltipped-s user-mention"
     aria-label="View all commits by lovasoa">lovasoa</a>


  


        <a data-pjax="true" title="Merge pull request #285 from ShapovalovKL/master

Fix data type conversion in user-defined functions" class="message text-inherit" href="/kripken/sql.js/commit/3e73897177c408d5be17e1efd0c7aaf215b0ae2b">Merge pull request</a> <a class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="467745640" data-permission-text="Issue title is private" data-url="https://github.com/kripken/sql.js/issues/285" data-hovercard-type="pull_request" data-hovercard-url="/kripken/sql.js/pull/285/hovercard" href="https://github.com/kripken/sql.js/pull/285">#285</a> <a data-pjax="true" title="Merge pull request #285 from ShapovalovKL/master

Fix data type conversion in user-defined functions" class="message text-inherit" href="/kripken/sql.js/commit/3e73897177c408d5be17e1efd0c7aaf215b0ae2b">from ShapovalovKL/master</a>
          <span class="hidden-text-expander inline">
            <button type="button" class="ellipsis-expander js-details-target" aria-expanded="false">&hellip;</button>
          </span>

        <div class="commit-desc"><pre class="text-small">Fix data type conversion in user-defined functions</pre></div>
    </div>
    <div class="no-wrap d-flex flex-self-start flex-items-baseline">
        <span class="mr-2 flex-self-center">
          <include-fragment src="/kripken/sql.js/commit/3e73897177c408d5be17e1efd0c7aaf215b0ae2b/rollup" class="d-inline"></include-fragment>
        </span>
      <span class="mr-1">Latest commit</span>
      <a class="commit-tease-sha mr-1" href="/kripken/sql.js/commit/3e73897177c408d5be17e1efd0c7aaf215b0ae2b" data-pjax>
        3e73897
      </a>
      <span itemprop="dateModified"><relative-time datetime="2019-07-22T08:57:44Z" class="no-wrap">Jul 22, 2019</relative-time></span>
    </div>
  </div>



<div class="file-wrap">
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/kripken/sql.js/tree/3e73897177c408d5be17e1efd0c7aaf215b0ae2b">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>
    <thead>
      <tr>
        <th><span class="sr-only">Type</span></th>
        <th><span class="sr-only">Name</span></th>
        <th><span class="sr-only">Latest commit message</span></th>
        <th><span class="sr-only">Commit time</span></th>
      </tr>
    </thead>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="GUI" id="1e3042b2e2a5550b412b37edd1c36b34-8e091df6b2169f46f40c8be94115f560ba6ab644" href="/kripken/sql.js/tree/master/GUI">GUI</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Add a GUI/index.html to redirect to examples/GUI/index.html" class="link-gray" href="/kripken/sql.js/commit/6466c31c8127ff7c7ff02151947bc4d6badd9d30">Add a GUI/index.html to redirect to examples/GUI/index.html</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-26T19:45:57Z" class="no-wrap">Apr 27, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="dist" id="2a6d07eef8b10b84129b42424ed99327-2a62b601ccb82492f7dbae08db0acf3443cf1487" href="/kripken/sql.js/tree/master/dist">dist</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Upgrade to Sqlite 3.28.0

Download sqlite on demand when building.
Remove old unused static sqlite source files.
No longer use keyword &quot;nothing&quot; in examples or tests because it leads to a SQL error. (NOTHING is now a reserved word in Sqlite)" class="link-gray" href="/kripken/sql.js/commit/4e91be7da52cdcf26fabb10fcc6f922d3a823cb2">Upgrade to Sqlite 3.28.0</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-26T19:43:59Z" class="no-wrap">Apr 27, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="examples" id="bfebe34154a0dfd9fc7b447fc9ed74e9-140e3efa2afeabe19e3d269d37a0146c4ac85390" href="/kripken/sql.js/tree/master/examples">examples</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Fix file download in demo in firefox" class="link-gray" href="/kripken/sql.js/commit/bea97a08ce04a008482160b4f5d108f636602c27">Fix file download in demo in firefox</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-05-13T13:18:11Z" class="no-wrap">May 13, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="src" id="25d902c24283ab8cfbac54dfa101ad31-a2cd56899b19a1d4a790fac35ccd788cc13eccca" href="/kripken/sql.js/tree/master/src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Fix data type conversion in user-defined functions" class="link-gray" href="/kripken/sql.js/commit/6e0aec1f3c346264836c7d684689f3f30da2343c">Fix data type conversion in user-defined functions</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-07-13T17:05:16Z" class="no-wrap">Jul 14, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="test" id="098f6bcd4621d373cade4e832627b4f6-0264d954075f2a623aa261c9afe39c431004b081" href="/kripken/sql.js/tree/master/test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Fix data type conversion in user-defined functions" class="link-gray" href="/kripken/sql.js/commit/6e0aec1f3c346264836c7d684689f3f30da2343c">Fix data type conversion in user-defined functions</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-07-13T17:05:16Z" class="no-wrap">Jul 14, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".gitignore" id="a084b794bc0759e7a6b77810e01874f2-1f75eb8f939d7fb29a9d5c66b48a0d7e9315d022" href="/kripken/sql.js/blob/master/.gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Ignore /sqlite-src and /cache folders" class="link-gray" href="/kripken/sql.js/commit/9fa2052a1c63cf66a29c64f42a383edd05d86d64">Ignore /sqlite-src and /cache folders</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-26T19:45:43Z" class="no-wrap">Apr 27, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".npmignore" id="0fd4ef892d9d4990033701887c2f9bcc-928a0dc09271e53ebe8cc993457b403d3d71dc40" href="/kripken/sql.js/blob/master/.npmignore">.npmignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Add gh-pages to .npmignore

At the moment gh-pages makes up over the half of the size of the install size.
This merge request adds it to the `.npmignore` in order to save 15MB.

Closes #197" class="link-gray" href="/kripken/sql.js/commit/9cc17d1be81c43391ae1ff758eabc2ba3c6cec98">Add gh-pages to .npmignore</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2018-09-10T19:29:08Z" class="no-wrap">Sep 11, 2018</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title=".travis.yml" id="354f30a63fb0907d4ad57269548329e3-41ab0a8a5e53149f4ed884ecca7575a04d2da2e5" href="/kripken/sql.js/blob/master/.travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Test against modern and LTS node versions" class="link-gray" href="/kripken/sql.js/commit/7b8276b76b642620ae97cdf6e925222f3b990df6">Test against modern and LTS node versions</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2018-01-18T19:13:45Z" class="no-wrap">Jan 19, 2018</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="AUTHORS" id="3d350169560e75d0cf9fc8e3574a3639-ae6cbb6ba7373010fec78d78d8c678216609ce1b" href="/kripken/sql.js/blob/master/AUTHORS">AUTHORS</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Add @taytay to AUTHORS" class="link-gray" href="/kripken/sql.js/commit/dd8394bed41c0c6ef660d45696b70a0af3f97d05">Add</a> <a class="user-mention" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=1330693" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Taytay">@Taytay</a> <a data-pjax="true" title="Add @taytay to AUTHORS" class="link-gray" href="/kripken/sql.js/commit/dd8394bed41c0c6ef660d45696b70a0af3f97d05">to AUTHORS</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-01-07T15:46:00Z" class="no-wrap">Jan 8, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="LICENSE" id="9879d6db96fd29134fc802214163b95a-d5c3c98341738da8ae57423fd52e7d4b9dd9ba4c" itemprop="license" href="/kripken/sql.js/blob/master/LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Upgrade to Sqlite 3.28.0

Download sqlite on demand when building.
Remove old unused static sqlite source files.
No longer use keyword &quot;nothing&quot; in examples or tests because it leads to a SQL error. (NOTHING is now a reserved word in Sqlite)" class="link-gray" href="/kripken/sql.js/commit/4e91be7da52cdcf26fabb10fcc6f922d3a823cb2">Upgrade to Sqlite 3.28.0</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-26T19:43:59Z" class="no-wrap">Apr 27, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="Makefile" id="b67911656ef5d18c4ae36cb6741b7965-8ec470ab8b99b585076d015edae7bb85a3b1051e" href="/kripken/sql.js/blob/master/Makefile">Makefile</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Rename exported_runtime_methods and exported_functions" class="link-gray" href="/kripken/sql.js/commit/15eea7207dbd86b4e25156d7c69f539d9373266d">Rename exported_runtime_methods and exported_functions</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-26T19:53:14Z" class="no-wrap">Apr 27, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="README.md" id="04c6e90faac2675aa89e2176d2eec7d8-f6c2f9dc0c1f2ece631ac2ca598a534d428fd239" href="/kripken/sql.js/blob/master/README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="docs: fix typos" class="link-gray" href="/kripken/sql.js/commit/3b27918abfc6a39f072943f7c00e2ee8fa7cdbdb">docs: fix typos</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-05-22T14:56:35Z" class="no-wrap">May 22, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="index.html" id="eacf331f0ffc35d4b482f1d15a887d3b-fd62c6dea6f50d548dfddcbdea5e45179df19b85" href="/kripken/sql.js/blob/master/index.html">index.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="fix repl example" class="link-gray" href="/kripken/sql.js/commit/64d66692033b7b3bc639750c53596ff79be62811">fix repl example</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-04-30T16:36:54Z" class="no-wrap">May 1, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="package-lock.json" id="32607347f8126e6534ebc7ebaec4853d-c2a1a08a844f0f8a3c8e24ad1284d08399d16c61" href="/kripken/sql.js/blob/master/package-lock.json">package-lock.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Rename most folders for clarity

The old folder naming scheme was by language type (c, coffee, js, etc).
This led to some confusion for those working on the project, since output files were not readily distinguishable from src/input files.
The new folders are as follows:
dist/* : Compiled assets used by end users (currently checked into git)
out/* : Intermediate compiled assets generated while creating files in dist/* - Not checked into git
src/* : Source files (coffee, js, etc)
sqlite/* : Source files for sqlite." class="link-gray" href="/kripken/sql.js/commit/1f709a8045aac6934c203a4fcccacae236e813d6">Rename most folders for clarity</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-01-07T21:41:57Z" class="no-wrap">Jan 8, 2019</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a class="js-navigation-open" title="package.json" id="b9cfc7f2cdf78a7f4b91a753d10865a2-1037667af242194a2119db23f8989db7b7b24423" href="/kripken/sql.js/blob/master/package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a data-pjax="true" title="Rename most folders for clarity

The old folder naming scheme was by language type (c, coffee, js, etc).
This led to some confusion for those working on the project, since output files were not readily distinguishable from src/input files.
The new folders are as follows:
dist/* : Compiled assets used by end users (currently checked into git)
out/* : Intermediate compiled assets generated while creating files in dist/* - Not checked into git
src/* : Source files (coffee, js, etc)
sqlite/* : Source files for sqlite." class="link-gray" href="/kripken/sql.js/commit/1f709a8045aac6934c203a4fcccacae236e813d6">Rename most folders for clarity</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2019-01-07T21:41:57Z" class="no-wrap">Jan 8, 2019</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="Box Box--condensed instapaper_body md js-code-block-container">
    <div class="Box-header d-flex flex-items-center flex-justify-between px-2">
      <h3 class="Box-title pr-3">
        <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
        README.md
      </h3>
    </div>
        <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/kripken/sql.js/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="README.md"
     data-tagsearch-lang="Markdown"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:3556910,&quot;ref&quot;:&quot;master&quot;,&quot;client_id&quot;:&quot;1270966942.1534144982&quot;,&quot;originating_request_id&quot;:&quot;36DA:10991:556814D:805F5CB:5DA5CA7C&quot;,&quot;originating_url&quot;:&quot;https://github.com/kripken/sql.js&quot;,&quot;referrer&quot;:&quot;https://blog.csdn.net/tiandixuanwuliang/article/details/81738512&quot;,&quot;user_id&quot;:18735885}}"
     data-hydro-click-hmac="7a56bd05b770a02c26de775955680b3e6b35da78584adb30e139534e60767f95">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>

      <div class="Box-body">
        <article class="markdown-body entry-content p-5" itemprop="text"><h1><a id="user-content-sqlite-compiled-to-javascript" class="anchor" aria-hidden="true" href="#sqlite-compiled-to-javascript"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SQLite compiled to JavaScript</h1>
<p><a href="http://travis-ci.org/kripken/sql.js" rel="nofollow"><img src="https://camo.githubusercontent.com/3302ff02441b6c4fca8bd71307e67a2033b03d64/68747470733a2f2f7472617669732d63692e6f72672f6b7269706b656e2f73716c2e6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/kripken/sql.js.svg?branch=master" style="max-width:100%;"></a> <a href="https://cdnjs.com/libraries/sql.js" rel="nofollow"><img src="https://camo.githubusercontent.com/17708c54ff25c38a474be36bf05290bb74fcb75d/68747470733a2f2f696d672e736869656c64732e696f2f63646e6a732f762f73716c2e6a732e737667" alt="CDNJS version" data-canonical-src="https://img.shields.io/cdnjs/v/sql.js.svg" style="max-width:100%;"></a></p>
<p>For the impatients, try the demo here: <a href="http://kripken.github.io/sql.js/examples/GUI" rel="nofollow">http://kripken.github.io/sql.js/examples/GUI</a></p>
<p><em>sql.js</em> is a port of <a href="http://sqlite.org/about.html" rel="nofollow">SQLite</a> to Webassembly, by compiling the SQLite C code with <a href="http://kripken.github.io/emscripten-site/docs/introducing_emscripten/about_emscripten.html" rel="nofollow">Emscripten</a>. It uses a <a href="https://kripken.github.io/emscripten-site/docs/porting/files/file_systems_overview.html" rel="nofollow">virtual database file stored in memory</a>, and thus <strong>doesn't persist the changes</strong> made to the database. However, it allows you to <strong>import</strong> any existing sqlite file, and to <strong>export</strong> the created database as a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays" rel="nofollow">JavaScript typed array</a>.</p>
<p>There are no C bindings or node-gyp compilation here, sql.js is a simple JavaScript file, that can be used like any traditional JavaScript library. If you are building a native application in JavaScript (using Electron for instance), or are working in node.js, you will likely prefer to use <a href="https://www.npmjs.com/package/sqlite3" rel="nofollow">a native binding of SQLite to JavaScript</a>.</p>
<p>SQLite is public domain, sql.js is MIT licensed.</p>
<p>Sql.js predates WebAssembly, and thus started as an <a href="https://en.wikipedia.org/wiki/Asm.js" rel="nofollow">asm.js</a> project. It still supports asm.js for backwards compatibility.</p>
<h2><a id="user-content-version-of-binaries" class="anchor" aria-hidden="true" href="#version-of-binaries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version of binaries</h2>
<p>Sql.js was last built with:
Emscripten version 1.38.30 (2019-04-16) <a href="https://emscripten.org/docs/introducing_emscripten/release_notes.html" rel="nofollow">Release History</a>
SqlLite version: 3.28.0 (2019-04-16) <a href="https://www.sqlite.org/changes.html" rel="nofollow">Release History</a></p>
<h2><a id="user-content-documentation" class="anchor" aria-hidden="true" href="#documentation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>
<p>A <a href="http://kripken.github.io/sql.js/documentation/#http://kripken.github.io/sql.js/documentation/class/Database.html" rel="nofollow">full documentation</a> generated from comments inside the source code, is available.</p>
<h2><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> initSqlJs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>sql.js<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> or if you are in a browser:</span>
<span class="pl-c"><span class="pl-c">//</span> var initSqlJs = window.initSqlJs;</span>

<span class="pl-en">initSqlJs</span>().<span class="pl-c1">then</span>(<span class="pl-smi">SQL</span> <span class="pl-k">=&gt;</span> {

  <span class="pl-c"><span class="pl-c">//</span> Create a database</span>
  <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();
  <span class="pl-c"><span class="pl-c">//</span> NOTE: You can also use new SQL.Database(data) where</span>
  <span class="pl-c"><span class="pl-c">//</span> data is an Uint8Array representing an SQLite database file</span>

  <span class="pl-c"><span class="pl-c">//</span> Execute some sql</span>
  sqlstr <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>CREATE TABLE hello (a int, b char);<span class="pl-pds">"</span></span>;
  sqlstr <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>INSERT INTO hello VALUES (0, 'hello');<span class="pl-pds">"</span></span>
  sqlstr <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>INSERT INTO hello VALUES (1, 'world');<span class="pl-pds">"</span></span>
  <span class="pl-smi">db</span>.<span class="pl-en">run</span>(sqlstr); <span class="pl-c"><span class="pl-c">//</span> Run the query without returning anything</span>

  <span class="pl-k">var</span> res <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM hello<span class="pl-pds">"</span></span>);
  <span class="pl-c"><span class="pl-c">/*</span></span>
<span class="pl-c">  [</span>
<span class="pl-c">    {columns:['a','b'], values:[[0,'hello'],[1,'world']]}</span>
<span class="pl-c">  ]</span>
<span class="pl-c">  <span class="pl-c">*/</span></span>

  <span class="pl-c"><span class="pl-c">//</span> Prepare an sql statement</span>
  <span class="pl-k">var</span> stmt <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-en">prepare</span>(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM hello WHERE a=:aval AND b=:bval<span class="pl-pds">"</span></span>);

  <span class="pl-c"><span class="pl-c">//</span> Bind values to the parameters and fetch the results of the query</span>
  <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-smi">stmt</span>.<span class="pl-en">getAsObject</span>({<span class="pl-s"><span class="pl-pds">'</span>:aval<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">'</span>:bval<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>world<span class="pl-pds">'</span></span>});
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(result); <span class="pl-c"><span class="pl-c">//</span> Will print {a:1, b:'world'}</span>

  <span class="pl-c"><span class="pl-c">//</span> Bind other values</span>
  <span class="pl-smi">stmt</span>.<span class="pl-en">bind</span>([<span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">'</span>hello<span class="pl-pds">'</span></span>]);
  <span class="pl-k">while</span> (<span class="pl-smi">stmt</span>.<span class="pl-en">step</span>()) <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">stmt</span>.<span class="pl-c1">get</span>()); <span class="pl-c"><span class="pl-c">//</span> Will print [0, 'hello']</span>

  <span class="pl-c"><span class="pl-c">//</span> You can also use JavaScript functions inside your SQL code</span>
  <span class="pl-c"><span class="pl-c">//</span> Create the js function you need</span>
  <span class="pl-k">function</span> <span class="pl-en">add</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {<span class="pl-k">return</span> a<span class="pl-k">+</span>b;}
  <span class="pl-c"><span class="pl-c">//</span> Specifies the SQL function's name, the number of it's arguments, and the js function to use</span>
  <span class="pl-smi">db</span>.<span class="pl-en">create_function</span>(<span class="pl-s"><span class="pl-pds">"</span>add_js<span class="pl-pds">"</span></span>, add);
  <span class="pl-c"><span class="pl-c">//</span> Run a query in which the function is used</span>
  <span class="pl-smi">db</span>.<span class="pl-en">run</span>(<span class="pl-s"><span class="pl-pds">"</span>INSERT INTO hello VALUES (add_js(7, 3), add_js('Hello ', 'world'));<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> Inserts 10 and 'Hello world'</span>

  <span class="pl-c"><span class="pl-c">//</span> free the memory used by the statement</span>
  <span class="pl-smi">stmt</span>.<span class="pl-en">free</span>();
  <span class="pl-c"><span class="pl-c">//</span> You can not use your statement anymore once it has been freed.</span>
  <span class="pl-c"><span class="pl-c">//</span> But not freeing your statements causes memory leaks. You don't want that.</span>

  <span class="pl-c"><span class="pl-c">//</span> Export the database to an Uint8Array containing the SQLite database file</span>
  <span class="pl-k">var</span> binaryArray <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-en">export</span>();
});
</pre></div>
<h2><a id="user-content-demo" class="anchor" aria-hidden="true" href="#demo"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>
<p>There are a few examples <a href="https://kripken.github.io/sql.js/index.html" rel="nofollow">available here</a>. The most full-featured is the <a href="https://kripken.github.io/sql.js/examples/GUI/index.html" rel="nofollow">Sqlite Interpreter</a>.</p>
<h2><a id="user-content-examples" class="anchor" aria-hidden="true" href="#examples"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>
<p>The test files provide up to date example of the use of the api.</p>
<h3><a id="user-content-inside-the-browser" class="anchor" aria-hidden="true" href="#inside-the-browser"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inside the browser</h3>
<h4><a id="user-content-example-html-file" class="anchor" aria-hidden="true" href="#example-html-file"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example <strong>HTML</strong> file:</h4>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">meta</span> <span class="pl-e">charset</span>=<span class="pl-s"><span class="pl-pds">"</span>utf8<span class="pl-pds">"</span></span> /&gt;
&lt;<span class="pl-ent">html</span>&gt;
  &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">'</span>/dist/sql-wasm.js<span class="pl-pds">'</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
  &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">    config <span class="pl-k">=</span> {</span>
<span class="pl-s1">      <span class="pl-en">locateFile</span><span class="pl-k">:</span> <span class="pl-smi">filename</span> <span class="pl-k">=&gt;</span> <span class="pl-s"><span class="pl-pds">`</span>/dist/<span class="pl-s1"><span class="pl-pse">${</span>filename<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span> </span>
<span class="pl-s1">    }</span>
<span class="pl-s1">    <span class="pl-c"><span class="pl-c">//</span> The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.</span></span>
<span class="pl-s1">    <span class="pl-c"><span class="pl-c">//</span> We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.</span></span>
<span class="pl-s1">    <span class="pl-en">initSqlJs</span>(config).<span class="pl-c1">then</span>(<span class="pl-k">function</span>(<span class="pl-c1">SQL</span>){</span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span>Create the database</span></span>
<span class="pl-s1">      <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();</span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Run a query without reading the results</span></span>
<span class="pl-s1">      <span class="pl-smi">db</span>.<span class="pl-en">run</span>(<span class="pl-s"><span class="pl-pds">"</span>CREATE TABLE test (col1, col2);<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Insert two rows: (1,111) and (2,222)</span></span>
<span class="pl-s1">      <span class="pl-smi">db</span>.<span class="pl-en">run</span>(<span class="pl-s"><span class="pl-pds">"</span>INSERT INTO test VALUES (?,?), (?,?)<span class="pl-pds">"</span></span>, [<span class="pl-c1">1</span>,<span class="pl-c1">111</span>,<span class="pl-c1">2</span>,<span class="pl-c1">222</span>]);</span>
<span class="pl-s1">  </span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Prepare a statement</span></span>
<span class="pl-s1">      <span class="pl-k">var</span> stmt <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-en">prepare</span>(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM test WHERE col1 BETWEEN $start AND $end<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">      <span class="pl-smi">stmt</span>.<span class="pl-en">getAsObject</span>({$start<span class="pl-k">:</span><span class="pl-c1">1</span>, $end<span class="pl-k">:</span><span class="pl-c1">1</span>}); <span class="pl-c"><span class="pl-c">//</span> {col1:1, col2:111}</span></span>
<span class="pl-s1">  </span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Bind new values</span></span>
<span class="pl-s1">      <span class="pl-smi">stmt</span>.<span class="pl-en">bind</span>({$start<span class="pl-k">:</span><span class="pl-c1">1</span>, $end<span class="pl-k">:</span><span class="pl-c1">2</span>});</span>
<span class="pl-s1">      <span class="pl-k">while</span>(<span class="pl-smi">stmt</span>.<span class="pl-en">step</span>()) { <span class="pl-c"><span class="pl-c">//</span></span></span>
<span class="pl-s1">        <span class="pl-k">var</span> row <span class="pl-k">=</span> <span class="pl-smi">stmt</span>.<span class="pl-en">getAsObject</span>();</span>
<span class="pl-s1">        <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Here is a row: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>(row));</span>
<span class="pl-s1">      }</span>
<span class="pl-s1">    });</span>
<span class="pl-s1">  </span>&lt;/<span class="pl-ent">script</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;
    Output is in Javascript console
  &lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>
<h4><a id="user-content-creating-a-database-from-a-file-chosen-by-the-user" class="anchor" aria-hidden="true" href="#creating-a-database-from-a-file-chosen-by-the-user"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a database from a file chosen by the user</h4>
<p><code>SQL.Database</code> constructor takes an array of integer representing a database file as an optional parameter.
The following code uses an HTML input as the source for loading a database:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">dbFileElm</span>.<span class="pl-en">onchange</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {
  <span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-smi">dbFileElm</span>.<span class="pl-smi">files</span>[<span class="pl-c1">0</span>];
  <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">FileReader</span>();
  <span class="pl-smi">r</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {
    <span class="pl-k">var</span> Uints <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-smi">r</span>.<span class="pl-smi">result</span>);
    db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>(Uints);
  }
  <span class="pl-smi">r</span>.<span class="pl-en">readAsArrayBuffer</span>(f);
}</pre></div>
<p>See : <a href="http://kripken.github.io/sql.js/examples/GUI/gui.js" rel="nofollow">http://kripken.github.io/sql.js/examples/GUI/gui.js</a></p>
<h4><a id="user-content-loading-a-database-from-a-server" class="anchor" aria-hidden="true" href="#loading-a-database-from-a-server"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading a database from a server</h4>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();
<span class="pl-c"><span class="pl-c">//</span> For example: https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite</span>
<span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">'</span>GET<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>/path/to/database.sqlite<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);
<span class="pl-smi">xhr</span>.<span class="pl-smi">responseType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>arraybuffer<span class="pl-pds">'</span></span>;

<span class="pl-smi">xhr</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-smi">e</span> <span class="pl-k">=&gt;</span> {
  <span class="pl-k">var</span> uInt8Array <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">this</span>.<span class="pl-smi">response</span>);
  <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>(uInt8Array);
  <span class="pl-k">var</span> contents <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM my_table<span class="pl-pds">"</span></span>);
  <span class="pl-c"><span class="pl-c">//</span> contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]</span>
};
<span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>();</pre></div>
<p>See: <a href="https://github.com/kripken/sql.js/wiki/Load-a-database-from-the-server">https://github.com/kripken/sql.js/wiki/Load-a-database-from-the-server</a></p>
<h3><a id="user-content-use-from-nodejs" class="anchor" aria-hidden="true" href="#use-from-nodejs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use from node.js</h3>
<p><code>sql.js</code> is <a href="https://www.npmjs.org/package/sql.js" rel="nofollow">hosted on npm</a>. To install it, you can simply run <code>npm install sql.js</code>.
Alternatively, you can simply download <code>sql-wasm.js</code> and <code>sql-wasm.wasm</code>, from the download link below.</p>
<h4><a id="user-content-read-a-database-from-the-disk" class="anchor" aria-hidden="true" href="#read-a-database-from-the-disk"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>read a database from the disk:</h4>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> fs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>fs<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> initSqlJs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>sql-wasm.js<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> filebuffer <span class="pl-k">=</span> <span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(<span class="pl-s"><span class="pl-pds">'</span>test.sqlite<span class="pl-pds">'</span></span>);
 
<span class="pl-en">initSqlJs</span>().<span class="pl-c1">then</span>(<span class="pl-k">function</span>(<span class="pl-c1">SQL</span>){
  <span class="pl-c"><span class="pl-c">//</span> Load the db</span>
  <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>(filebuffer);
});
</pre></div>
<h4><a id="user-content-write-a-database-to-the-disk" class="anchor" aria-hidden="true" href="#write-a-database-to-the-disk"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>write a database to the disk</h4>
<p>You need to convert the result of <code>db.export</code> to a buffer</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> fs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>fs<span class="pl-pds">"</span></span>);
<span class="pl-c"><span class="pl-c">//</span> [...] (create the database)</span>
<span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">db</span>.<span class="pl-en">export</span>();
<span class="pl-k">var</span> buffer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Buffer</span>(data);
<span class="pl-smi">fs</span>.<span class="pl-en">writeFileSync</span>(<span class="pl-s"><span class="pl-pds">"</span>filename.sqlite<span class="pl-pds">"</span></span>, buffer);</pre></div>
<p>See : <a href="https://github.com/kripken/sql.js/blob/master/test/test_node_file.js">https://github.com/kripken/sql.js/blob/master/test/test_node_file.js</a></p>
<h3><a id="user-content-use-as-web-worker" class="anchor" aria-hidden="true" href="#use-as-web-worker"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use as web worker</h3>
<p>If you don't want to run CPU-intensive SQL queries in your main application thread,
you can use the <em>more limited</em> WebWorker API.</p>
<p>You will need to download <a href="/kripken/sql.js/blob/master/dist/worker.sql-wasm.js">dist/worker.sql-wasm.js</a> <a href="/kripken/sql.js/blob/master/dist/worker.sql-wasm.wasm">dist/worker.sql-wasm.wasm</a>.</p>
<p>Example:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">  <span class="pl-k">var</span> worker <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Worker</span>(<span class="pl-s"><span class="pl-pds">"</span>/dist/worker.sql-wasm.js<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">  <span class="pl-smi">worker</span>.<span class="pl-en">onmessage</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {</span>
<span class="pl-s1">    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>Database opened<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">    <span class="pl-smi">worker</span>.<span class="pl-en">onmessage</span> <span class="pl-k">=</span> <span class="pl-smi">event</span> <span class="pl-k">=&gt;</span> {</span>
<span class="pl-s1">      <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>); <span class="pl-c"><span class="pl-c">//</span> The result of the query</span></span>
<span class="pl-s1">    };</span>
<span class="pl-s1">	</span>
<span class="pl-s1">    <span class="pl-smi">worker</span>.<span class="pl-c1">postMessage</span>({</span>
<span class="pl-s1">      id<span class="pl-k">:</span> <span class="pl-c1">2</span>,</span>
<span class="pl-s1">      action<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>exec<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">      sql<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>SELECT * FROM test<span class="pl-pds">'</span></span></span>
<span class="pl-s1">    });</span>
<span class="pl-s1">  };</span>
<span class="pl-s1"></span>
<span class="pl-s1">  <span class="pl-smi">worker</span>.<span class="pl-en">onerror</span> <span class="pl-k">=</span> <span class="pl-smi">e</span> <span class="pl-k">=&gt;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>Worker error: <span class="pl-pds">"</span></span>, e);</span>
<span class="pl-s1">  <span class="pl-smi">worker</span>.<span class="pl-c1">postMessage</span>({</span>
<span class="pl-s1">    id<span class="pl-k">:</span><span class="pl-c1">1</span>,</span>
<span class="pl-s1">    action<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>open<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">    buffer<span class="pl-k">:</span>buf, <span class="pl-c"><span class="pl-c">/*</span>Optional. An ArrayBuffer representing an SQLite Database file<span class="pl-c">*/</span></span></span>
<span class="pl-s1">  });</span>
<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<p>See <a href="/kripken/sql.js/blob/master/examples/GUI/gui.js">examples/GUI/gui.js</a> for a full working example.</p>
<h2><a id="user-content-flavorsversions-targetsdownloads" class="anchor" aria-hidden="true" href="#flavorsversions-targetsdownloads"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flavors/versions Targets/Downloads</h2>
<p>This library includes both WebAssembly and asm.js versions of Sqlite. (WebAssembly is the newer, preferred way to compile to JavaScript, and has superceded asm.js. It produces smaller, faster code.) Asm.js versions are included for compatibility.</p>
<h2><a id="user-content-upgrading-from-0x-to-1x" class="anchor" aria-hidden="true" href="#upgrading-from-0x-to-1x"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Upgrading from 0.x to 1.x</h2>
<p>Version 1.0 of sql.js must be loaded asynchronously, whereas asm.js was able to be loaded synchronously.</p>
<p>So in the past, you would:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">'</span>js/sql.js<span class="pl-pds">'</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">  <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();</span>
<span class="pl-s1">  <span class="pl-c"><span class="pl-c">//</span>...</span></span>
<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<p>or:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> <span class="pl-c1">SQL</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>sql.js<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();
<span class="pl-c"><span class="pl-c">//</span>...</span></pre></div>
<p>Version 1.x:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">'</span>dist/sql-wasm.js<span class="pl-pds">'</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">  <span class="pl-en">initSqlJs</span>({ <span class="pl-en">locateFile</span><span class="pl-k">:</span> <span class="pl-smi">filename</span> <span class="pl-k">=&gt;</span> <span class="pl-s"><span class="pl-pds">`</span>/dist/<span class="pl-s1"><span class="pl-pse">${</span>filename<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span> }).<span class="pl-c1">then</span>(<span class="pl-k">function</span>(<span class="pl-c1">SQL</span>){</span>
<span class="pl-s1">    <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();</span>
<span class="pl-s1">    <span class="pl-c"><span class="pl-c">//</span>...</span></span>
<span class="pl-s1">  });</span>
<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<p>or:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> initSqlJs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>sql-wasm.js<span class="pl-pds">'</span></span>);
<span class="pl-en">initSqlJs</span>().<span class="pl-c1">then</span>(<span class="pl-k">function</span>(<span class="pl-c1">SQL</span>){
  <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();
  <span class="pl-c"><span class="pl-c">//</span>...</span>
});</pre></div>
<p><code>NOTHING</code> is now a reserved word in SQLite, whereas previously it was not. This could cause errors like <code>Error: near "nothing": syntax error</code></p>
<h3><a id="user-content-downloadingusing" class="anchor" aria-hidden="true" href="#downloadingusing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Downloading/Using:</h3>
<p>Although asm.js files were distributed as a single Javascript file, WebAssembly libraries are most efficiently distributed as a pair of files, the <code>.js</code>  loader and the <code>.wasm</code> file, like <a href="/kripken/sql.js/blob/master/%5Bdist/sql-wasm.js%5D">dist/sql-wasm.js</a> and <a href="/kripken/sql.js/blob/master/%5Bdist/sql-wasm.wasm%5D">dist/sql-wasm.wasm</a>. The <code>.js</code> file is responsible for wrapping/loading the <code>.wasm</code> file.</p>
<h2><a id="user-content-versions-of-sqljs-included-in-dist" class="anchor" aria-hidden="true" href="#versions-of-sqljs-included-in-dist"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Versions of sql.js included in <code>dist/</code></h2>
<ul>
<li><code>sql-wasm.js</code> : The Web Assembly version of Sql.js. Minified and suitable for production. Use this. If you use this, you will need to include/ship <code>sql-wasm.wasm</code> as well.</li>
<li><code>sql-wasm-debug.js</code> : The Web Assembly, Debug version of Sql.js. Larger, with assertions turned on. Useful for local development. You will need to include/ship <code>sql-wasm-debug.wasm</code> if you use this.</li>
<li><code>sql-asm.js</code> : The older asm.js version of Sql.js. Slower and larger. Provided for compatibility reasons.</li>
<li><code>sql-asm-memory-growth.js</code> : Asm.js doesn't allow for memory to grow by default, because it is slower and de-optimizes. If you are using sql-asm.js and you see this error (<code>Cannot enlarge memory arrays</code>), use this file.</li>
<li><code>sql-asm-debug.js</code> : The <em>Debug</em> asm.js version of Sql.js. Use this for local development.</li>
<li><code>worker.*</code> - Web Worker versions of the above libraries. More limited API. See <a href="/kripken/sql.js/blob/master/examples/GUI/gui.js">examples/GUI/gui.js</a> for a good example of this.</li>
</ul>
<h2><a id="user-content-compiling" class="anchor" aria-hidden="true" href="#compiling"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compiling</h2>
<ul>
<li>Install the EMSDK, <a href="https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html" rel="nofollow">as described here</a></li>
<li>Run <code>npm run rebuild</code></li>
</ul>
</article>
      </div>
  </div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="1.32622s from unicorn-6fd6fb966c-7zxl8">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-F9kx3H+J2h5Df4xV5Mr/J8i59t+dCvRTbraAu/XLaNGNTifUfo9L2g1HLzieqCI4BmD9++c8m+CwqaLGCGuoqw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-baa8b2ec.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-tyXJ4oRzLvTXAwhi9DcMRqtZJbyjKdYp/bKeJJHxv1UdVAd1ocXhtAm+v9rgkMN9zaU0j/RFDY3lWp0RGqAH+A==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-15695b90.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

