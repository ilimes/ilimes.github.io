---
title: Hello, I'm Daegyu Lee! 👋
layout: single
permalink: /about/
author_profile: true
---

{% assign author = page.author | default: page.authors[0] | default: site.author %}
{% assign author = site.data.authors[author] | default: author %}

<div itemscope itemtype="https://schema.org/Person" class="h-card">
  <div style="margin-bottom: 20px;">
    <div style="margin-bottom: 10px; font-weight: bold;">✨ Tech Stack</div>
    <div>
        <a><img src="https://img.shields.io/badge/Javascript-000000?style=flat-square&logo=javascript&logoColor=#F7DF1E"/></a>
        <a><img src="https://img.shields.io/badge/TypeScript-000000?style=flat-square&logo=Typescript&logoColor=#3178C6"/></a>
        <a><img src="https://img.shields.io/badge/React-000000?style=flat-square&logo=React&logoColor=#61DAFB"/></a>
        <a><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=#8ED500"/></a>
        <a><img src="https://img.shields.io/badge/ReactQuery-000000?style=flat-square&logo=ReactQuery&logoColor=#3178C6"/></a>
        <a><img src="https://img.shields.io/badge/NoesJS-000000?style=flat-square&logo=Node.JS&logoColor=#61DAFB"/></a>
        <a><img src="https://img.shields.io/badge/Spring-000000?style=flat-square&logo=Spring&logoColor=#61DAFB"/></a>
        <a><img src="https://img.shields.io/badge/HTML5-000000?style=flat-square&logo=HTML5&logoColor=#61DAFB"/></a>
        <a><img src="https://img.shields.io/badge/CSS3-000000?style=flat-square&logo=CSS3&logoColor=#1572B6"/></a>
    </div>
    <div style="margin: 10px 0; font-weight: bold;">🔨 Tools</div>
    <div>
        <a><img alt="Git" src="https://img.shields.io/badge/Git-000000?logo=Git&logoColor=white" /></a>
        <a><img alt="GitHub" src="https://img.shields.io/badge/Github-000000?logo=GitHub&logoColor=white" /></a>
        <a><img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-000000?logo=visual-studio-code&logoColor=0078d7" /></a>
        <a><img alt="Photoshop" src="https://img.shields.io/badge/Photoshop-000000?logo=Adobe-Photoshop&logoColor=0078d7"/></a>
        <a><img alt="Figma" src="https://img.shields.io/badge/Figma-000000?logo=Figma&logoColor=pink" /></a>
        <a><img alt="Notion" src="https://img.shields.io/badge/Notion-000000?logo=Notion&logoColor=white" /></a>
    </div>
  </div>

  <div class="author__urls-wrapper">
    <ul class="author__urls social-icons">
      {% if author.location %}
        <li itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
          <i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> <span itemprop="name" class="p-locality">Ulsan, Korea</span>
        </li>
      {% endif %}

      {% if author.email %}
        <li>
          <a href="mailto:{{ author.email }}" rel="me" class="u-email">
            <meta itemprop="email" content="{{ author.email }}" />
            <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">ilimes1307@gmail.com</span>
          </a>
        </li>
      {% endif %}

      {% if author.github %}
        <li>
          <a href="https://github.com/{{ author.github }}" itemprop="sameAs" rel="nofollow noopener noreferrer me">
            <i class="fab fa-fw fa-github" aria-hidden="true"></i><span class="label">https://github.com/ilimes</span>
          </a>
        </li>
      {% endif %}

      {% include author-profile-custom-links.html %}
    </ul>

  </div>
</div>
