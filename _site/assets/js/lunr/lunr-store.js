var store = [{
        "title": "github.io 블로그 첫 포스팅입니다",
        "excerpt":"마크다운 문법으로 글을 작성할 수 있습니다.  마크다운 설명 글 보기   🔔포스팅 공지  개인 공부 기록용 블로그 입니다.  잘못된 부분이 있을 시 메일이나 댓글로 지적해주시면 감사드리겠습니다 :)  ","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/blog/post/",
        "teaser": null
      },{
        "title": "마크다운(Markdown) 문법",
        "excerpt":"마크다운(Markdown) 이란? 텍스트 기반의 마크업 언어로 GitHub에서 README 파일을 편집할 때 많이 쓰인다. 가독성이 좋고 간단해서 배우기 쉽다. 제목 # 제목 1단계 ## 제목 2단계 ### 제목 3단계 #### 제목 4단계 ##### 제목 5단계 ###### 제목 6단계 제목 1단계 제목 2단계 제목 3단계 제목 4단계 제목 5단계 제목 6단계 강조...","categories": ["Blog"],
        "tags": ["Blog","Markdown","Jekyll"],
        "url": "/blog/post2/",
        "teaser": null
      },{
        "title": "리액트 Hooks : useState()",
        "excerpt":"상태(state)란 무엇인가? 리액트 컴포넌트에서 동적인 값을 상태(state) 라고 한다. 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 상태를 관리할 수 없었지만 16.8 버전 이후 Hooks 라는 기능이 도입되어 함수형 컴포넌트에서도 상태 관리가 가능하게 되었다. useState() 함수 사용법 Counter.js import React, { useState } from \"react\"; function Counter() { const [number, setNumber] =...","categories": ["React"],
        "tags": ["useState","Hooks","react","setState"],
        "url": "/react/post3/",
        "teaser": null
      },{
        "title": "리액트에서 UI 라이브러리 앤트 디자인(Ant Design) 사용하기",
        "excerpt":"Ant Design이란? Ant Design은 알리바바 그룹에서 개발한 UI 라이브러리로 리액트와 타입스크립트(Typescript)를 기반으로 제작되었으며 Layout, Button, Grid, Card 등 다양한 컴포넌트를 지원합니다. Ant Design을 사용하게 된 계기 스프링으로 웹 개발을 하면서 인기 높은 CSS 프레임워크인 부트스트랩을 사용했던 적이 있습니다. 개인적으로 부트스트랩을 사용해보니 커스터마이징도 쉽고 개발 속도도 빨라져서 굉장히 편리하다고 느꼈는데요. 최근...","categories": ["Web"],
        "tags": ["react","ui","web","antdesign","design"],
        "url": "/web/post4/",
        "teaser": null
      },{
        "title": "자바스크립트 프로토타입(prototype) 이해하기",
        "excerpt":"prototype이란? prototype(프로토타입)은 한국어로 원형이라는 뜻인데 자바스크립트에서는 프로토타입으로 상속 개념을 제공하고 있습니다. (자바스크립트에서는 객체간의 관계가 복사가 아니라 연결이 맺어진 것이기 때문에 상속보다는 위임이 좀 더 적절한 표현) 자바스크립트는 모든 객체들이 부모객체가 가진 메소드와 속성을 상속받는 것이 가능한데 사실 자바스크립트는 Java나 Python 등과 달리 클래스 개념이 없기 때문에 상속 기능이 없지만 프로토...","categories": ["JavaScript"],
        "tags": ["js","javaScript","자바스크립트","프로토타입","prototype"],
        "url": "/javascript/post5/",
        "teaser": null
      },{
        "title": "자바스크립트 Promise 이해하기",
        "excerpt":"Promise란? Promise는 자바스크립트 비동기 처리에 사용되는 객체입니다. 자바스크립트의 세계에서는 대부분의 작업들이 비동기로 이루어지기 때문에 프론트엔드 개발을 하든 백엔드 개발을 하든 자바스크립트를 활용하여 웹 개발을 한다면 비동기 프로그래밍에 대한 이해가 꼭 필요합니다. 자바스크립트에서 비동기 처리란? 자바스크립트에서 비동기 처리란 “특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성”을...","categories": ["JavaScript"],
        "tags": ["js","javaScript","자바스크립트","Promise","비동기"],
        "url": "/javascript/post6/",
        "teaser": null
      },{
        "title": "리액트 이벤트 핸들링",
        "excerpt":"이벤트(Event)란? 이벤트는 사용자가 웹 브라우저에서 DOM요소들과 상호작용하는 것을 말합니다. (input 요소에 타이핑을 하거나, 버튼을 클릭하는 등..) 문서 객체 모델(DOM, Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스입니다. 이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공합니다. -&gt; 문서 객체란 원본 html 문서의 &lt;html&gt;, &lt;body&gt;,...","categories": ["React"],
        "tags": ["리액트","react","이벤트","이벤트핸들링","event"],
        "url": "/react/post7/",
        "teaser": null
      },{
        "title": "리액트에서 styled-components로 스타일링 하기",
        "excerpt":"styled-components란? styled-component는 리액트에서 사용하는 대표적인 CSS-in-JS 라이브러리 입니다. 스타일을 자바스크립트 파일에 내장시켜 사용할 수 있으며 CSS 커스텀 컴포넌트를 만들어서 쉽게 재사용할 수 있습니다. styled-components 설치 방법 먼저 터미널에 아래 명령어를 입력하여 styled-components를 설치합니다. npm install styled-components 그리고 적용하려는 components 파일 상단에 아래 한 줄을 import 합니다. import styled from \"styled-components\";...","categories": ["React"],
        "tags": ["리액트","react","style","css","styled","component"],
        "url": "/react/post8/",
        "teaser": null
      }]
