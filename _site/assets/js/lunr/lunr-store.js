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
      },{
        "title": "Node.js 프로세스 관리도구 pm2",
        "excerpt":"pm2란? pm2란 Node.js 운영을 효율적이게 할 수 있게 하는 프로세스 관리도구인데요. 기본적으로 싱글스레드 기반이라 멀티스레딩이 불가능한 Node.js에서 멀티스레딩과 비슷하게 내부적으로 서버를 Fork해서 사용할 수 있도록 클러스터라는 기능을 제공하기도 하고 프로세스가 죽었을 때의 처리 등 직접 하나씩 하게 된다면 귀찮은 온갖 일들을 몽땅 관리해주는 강력한 도구입니다. pm2 설치 방법 아래 명령어를...","categories": ["NodeJs"],
        "tags": ["pm2","Node.js"],
        "url": "/nodejs/post9/",
        "teaser": null
      },{
        "title": "Git 기본 CLI 명령어 정리",
        "excerpt":"Git 이란? Git이란 형상 관리 도구중 하나로 버전 관리, 백업, 협업 등을 할 수 있는 강력한 도구입니다. Git은 중앙 서버에서 소스코드와 히스토리를 저장하던 SVN과는 달리 소스코드를 여러 개발 PC에 분산 저장하여 관리하는 시스템이라 SVN보다 속도가 더욱 빠르기도 하여 SVN을 사용하던 기존 개발 조직에서도 계속 Git으로 갈아타고 있는 추세입니다. CLI란? CLI란...","categories": ["Git"],
        "tags": ["cli","git","github"],
        "url": "/git/post10/",
        "teaser": null
      },{
        "title": "Node.js-Express",
        "excerpt":"Express란? Express란 Node.js 기반 웹 프레임워크로, 간단하게 서버 쪽 웹 어플리케이션을 쉽게 구현할 수 있도록 도와주는 프레임워크라고 할 수 있습니다. Express 설치하기 npm install express Express를 설치하기 위해서는 위와 같이 npm 명령어를 사용하면 간단하게 설치할 수 있습니다. npm 명령어를 사용하기 이전에 Node.js와 npm init 실행이 반드시 선행되어야 합니다. Express 5가지...","categories": ["NodeJs"],
        "tags": ["express","NodeJs","Node.js"],
        "url": "/nodejs/post11/",
        "teaser": null
      },{
        "title": "Mac에서 MariaDB 및 GUI 툴 설치하기",
        "excerpt":"회사에 사용하는 데이터베이스가 MariaDB라서 집에서도 DB공부를 진행해보고자 개인 PC에 MariaDB를 설치해보았습니다. Mac에서 MariaDB 설치하기 https://mariadb.org/download/?t=mariadb&amp;p=mariadb&amp;r=10.4.25 위 링크는 MariaDB 서버를 설치파일로 다운로드 받을 수 있는 페이지로 이동하는 링크입니다. 들어가서 확인해보시면 아시겠지만 MariaDB는 Mac전용 설치파일을 지원하지 않습니다. 그래서 저는 homebrew 를 이용하여 MariaDB를 설치 하였습니다. brew install mariadb homebrew가 설치되어 있지 않다면...","categories": ["Web"],
        "tags": ["MariaDB","SequelPro","db"],
        "url": "/web/post12/",
        "teaser": null
      },{
        "title": "Axios 알아보기(특징, 설치방법 문법 등)",
        "excerpt":"Axios란? 공식 문서에도 적혀있듯이 Axios는 Node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 입니다. JavaScript에서 클라이언트와 서버 간 데이터를 주고받기 위해서 사용하는 비동기 HTTP 통신 방법 중에서는 Axios 뿐만 아니라 Ajax, Fetch 등이 있는데요. 제가 앞서 사용해보았던 Ajax는 보통 jQuery를 사용하여 보다 쉽게 요청을 처리 할 수 있지만 Promise 기반의 통신...","categories": ["NodeJs"],
        "tags": ["axios","Node.js","NodeJS","AJAX","Promise","비동기"],
        "url": "/nodejs/post13/",
        "teaser": null
      },{
        "title": "리액트 Hooks : useMemo()",
        "excerpt":"Memoization 이란? Memoization은 프로그래밍 기법 중 하나로 기존에 수행한 연산의 결과값을 메모리에 저장해놓고 필요할 때 재사용하여 계산의 반복수행을 하지 않는 것입니다. 이런 기법을 사용하게 되면 중복 연산을 피할 수 있기 때문에 프로그램 실행 속도가 빨라지게 됩니다. useMemo() 란? 리액트에서 함수형 컴포넌트는 렌더링 -&gt; Component 함수 호출 -&gt; 모든 내부 변수...","categories": ["React"],
        "tags": ["useMemo","react","Hooks","리액트","Memoization"],
        "url": "/react/post14/",
        "teaser": null
      },{
        "title": "POSTMAN이란?",
        "excerpt":"POSTMAN이란? POSTMAN은 API 개발을 보다 빠르고 쉽게 구현할 수 있도록 도와주며, 개발된 API를 테스트하여 문서화 또는 공유할 수 있게 해줍니다. POSTMAN을 사용하는 이유 POSTMAN을 사용하는 이유는 프론트엔드를 배제하고, 서버 프로그램이 들어온 API 요청에 대해서 제대로 동작하는지 확인하기 위함입니다. RESTful API 를 구현하다보면 특정 url에 파라미터나 헤더 등을 담아서 request를 보내는...","categories": ["Web"],
        "tags": ["API","postman","포스트맨","개발","restapi"],
        "url": "/web/post15/",
        "teaser": null
      },{
        "title": "MongoDB란?",
        "excerpt":"MongoDB란? MongoDB란 데이터를 저장하는 데이터베이스 시스템의 한 종류로, 전통적인 테이블-관계 기반의 RDBMS가 아닌 도큐먼트 지향 NoSQL 데이터베이스 시스템입니다. MongoDB의 특징 동적 스키마 MongoDB는 테이블 구조가 고정되어 있는 형태(정적 스키마)가 아니라 JSON 형태의 동적 스키마형 문서를 사용합니다. 몽고디비에서는 그것을 Binary JSON(JavaScript Object Notaion)이라고 부르며, 줄여서 BSON 이라고 부르기도 합니다. 키-값의 집합...","categories": ["MongoDB"],
        "tags": ["backend","mongoDB","몽고디비","디비","noSQL"],
        "url": "/mongodb/post16/",
        "teaser": null
      },{
        "title": "작업 효율을 높여주는 피그마(figma) 단축키 모음",
        "excerpt":"피그마로 작업 할 때 조금이라도 작업 효율을 높이고 싶다면 단축키를 활용하는 것이 좋습니다. 요즘 피그마 작업을 하면서 단축키를 활용하려고 하는데 자주 사용하지 않으면 자꾸만 까먹게 되더라고요. 이번 포스팅은 제가 다시 보기 위해서 작성하게 된 피그마 단축키 모음입니다 😊 전체 피그마 단축키 보는 법 Ctrl + Shift + ? 그리드 레이아웃...","categories": ["Figma"],
        "tags": ["피그마","figma","디자인","피그마단축키","design"],
        "url": "/figma/post17/",
        "teaser": null
      }]
