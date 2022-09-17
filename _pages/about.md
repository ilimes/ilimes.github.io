---
title: Hi all! I'm LIME 👋
layout: single
permalink: /about/
author_profile: true
---

{% assign author = page.author | default: page.authors[0] | default: site.author %}
{% assign author = site.data.authors[author] | default: author %}

<div itemscope itemtype="https://schema.org/Person" class="h-card">

<span>🔨 Tech Stack</span>

 <div style="margin: 10px 0 20px 0;">
     <div style="margin: 5px 0 5px 0;">
         <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
         <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
         <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
         <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white">
         <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white">
         <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
     </div>
     <div style="margin: 5px 0 5px 0;">
         <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
         <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"/>
         <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
         <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>
         <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
     </div>
     <div style="margin: 5px 0 5px 0;">
         <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white">
         <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white">
         <img src="https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white">
         <img src="https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white">
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
