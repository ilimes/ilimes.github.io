var store = [{
        "title": "github.io 블로그 첫 포스팅입니다",
        "excerpt":"마크다운 문법으로 글을 작성할 수 있습니다.  마크다운 설명 글 보기   🔔포스팅 공지  개인 공부 기록용 블로그 입니다.  잘못된 부분이 있을 시 메일이나 댓글로 지적해주시면 감사드리겠습니다 :)  ","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/blog/post/",
        "teaser": null
      },{
        "title": "마크다운(Markdown) 문법",
        "excerpt":"마크다운(Markdown) 이란? 텍스트 기반의 마크업 언어로 GitHub에서 README 파일을 편집할 때 많이 쓰인다. 가독성이 좋고 간단해서 배우기 쉽다. 제목 1 2 3 4 5 6 7 8 9 10 11 # 제목 1단계 ## 제목 2단계 ### 제목 3단계 #### 제목 4단계 ##### 제목 5단계 ###### 제목 6단계 제목 1단계...","categories": ["Blog"],
        "tags": ["Blog","Markdown","Jekyll"],
        "url": "/blog/post2/",
        "teaser": null
      },{
        "title": "리액트 Hooks : useState()",
        "excerpt":"상태(state)란 무엇인가? 리액트 컴포넌트에서 동적인 값을 상태(state) 라고 한다. 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 상태를 관리할 수 없었지만 16.8 버전 이후 Hooks 라는 기능이 도입되어 함수형 컴포넌트에서도 상태 관리가 가능하게 되었다. useState() 함수 사용법 Counter.js 1 2 3 4 5 6 7 8 9 10 11 12 13 14...","categories": ["React"],
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
        "excerpt":"styled-components란? styled-component는 리액트에서 사용하는 대표적인 CSS-in-JS 라이브러리 입니다. 스타일을 자바스크립트 파일에 내장시켜 사용할 수 있으며 CSS 커스텀 컴포넌트를 만들어서 쉽게 재사용할 수 있습니다. styled-components 설치 방법 먼저 터미널에 아래 명령어를 입력하여 styled-components를 설치합니다. 1 npm install styled-components 그리고 적용하려는 components 파일 상단에 아래 한 줄을 import 합니다. 1 import styled...","categories": ["React"],
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
        "excerpt":"Express란? Express란 Node.js 기반 웹 프레임워크로, 간단하게 서버 쪽 웹 어플리케이션을 쉽게 구현할 수 있도록 도와주는 프레임워크라고 할 수 있습니다. Express 설치하기 1 npm install express Express를 설치하기 위해서는 위와 같이 npm 명령어를 사용하면 간단하게 설치할 수 있습니다. npm 명령어를 사용하기 이전에 Node.js와 npm init 실행이 반드시 선행되어야 합니다. Express...","categories": ["NodeJs"],
        "tags": ["express","NodeJs","Node.js"],
        "url": "/nodejs/post11/",
        "teaser": null
      },{
        "title": "Mac에서 MariaDB 및 GUI 툴 설치하기",
        "excerpt":"회사에 사용하는 데이터베이스가 MariaDB라서 집에서도 DB공부를 진행해보고자 개인 PC에 MariaDB를 설치해보았습니다. Mac에서 MariaDB 설치하기 https://mariadb.org/download/?t=mariadb&amp;p=mariadb&amp;r=10.4.25 위 링크는 MariaDB 서버를 설치파일로 다운로드 받을 수 있는 페이지로 이동하는 링크입니다. 들어가서 확인해보시면 아시겠지만 MariaDB는 Mac전용 설치파일을 지원하지 않습니다. 그래서 저는 homebrew 를 이용하여 MariaDB를 설치 하였습니다. 1 brew install mariadb homebrew가 설치되어 있지...","categories": ["Web"],
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
      },{
        "title": "MacOS에서 MongoDB, compass 설치하기",
        "excerpt":"몽고디비(MongoDB)란? https://ilimes.github.io/mongodb/post16/ 위 링크를 참고해주세요 :) MongoDB 설치하기 설치환경 : MacOS(M1), Homebrew를 통해 설치(만약 Homebrew 설치가 되어있지 않은 경우에는 먼저 Homebrew부터 설치해주세요.) 1) 먼저 터미널에 아래의 명령어를 입력해주세요. 1 brew tap mongodb/brew 1 brew install mongodb-community (arm맥에서 설치하시는 경우 brew install 앞에 arch -arm64를 붙이면 됩니다.) 2) MongoDB 실행 및...","categories": ["MongoDB"],
        "tags": ["몽고디비","mongoDB","MongoDB","데이터베이스","mac"],
        "url": "/mongodb/post18/",
        "teaser": null
      },{
        "title": "Sequelize - 데이터타입",
        "excerpt":"Sequelize DataTypes 시퀄라이즈 데이터타입을 정리해보았습니다. 추가로 업데이트 된 목록을 확인하고 싶으시다면 여기를 클릭해서 DataTypes를 참고해주시기 바랍니다. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34...","categories": ["Sequelize"],
        "tags": ["시퀄라이즈","Sequelize","백엔드","backend"],
        "url": "/sequelize/post19/",
        "teaser": null
      },{
        "title": "[Mac] 사용중인 포트 kill 하는법",
        "excerpt":"사용중 포트 찾기 1 lsof -i :[포트번호] ex) 1 2 3 lime@laim-ui-MacBookAir ~ % lsof -i :3000 COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME node 13736 lime 31u IPv4 0x35b417c98f796509 0t0 TCP localhost:hbci-&gt;localhost:62414 (ESTABLISHED) kill 하기 1 kill -9 ex) 1 kill -9 13736 위와 같이 해당 포트번호...","categories": ["Issue"],
        "tags": ["port","lsof","kill","mac"],
        "url": "/issue/post20/",
        "teaser": null
      },{
        "title": "[Mac] 맥북에게 5000번 포트를 뺏겼을 때 해결방법",
        "excerpt":"문제 5000번 포트를 사용하려는데 계속 403에러가 발생합니다. 5000번을 쓰고싶어서 kill -9로 죽이려고 했는데 계속 살아납니다. 1 2 3 4 lime@laim-ui-MacBookAir ~ % lsof -i :5000 COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME ControlCe 10422 lime 29u IPv4 0x35b417c98db2da79 0t0 TCP *:commplex-main (LISTEN) ControlCe 10422 lime 30u IPv6 0x35b417d328e92061...","categories": ["Issue"],
        "tags": ["port","AirPlay","5000"],
        "url": "/issue/post21/",
        "teaser": null
      },{
        "title": "Antd Table 컴포넌트 column render",
        "excerpt":"AntD Table column render AntD를 사용하면서 multi line으로 데이터를 표시하거나, 조건에 맞게 데이터를 표시하는 경우 등 렌더링이 필요한 경우에 render 옵션을 활용하면 쉽게 원하는대로 표현할 수 있습니다. render 옵션 1 2 3 4 5 // render 옵션은 Array.map()처럼 작동합니다. render: (text, row, index) =&gt; {}; // text: name의 data [String]...","categories": ["Web"],
        "tags": ["웹개발","antd","ant design"],
        "url": "/web/post22/",
        "teaser": null
      },{
        "title": "Git 커밋 되돌리기 (Reset, Revert)",
        "excerpt":"Git을 사용하여 작업하다 보면 이미 커밋한 내용을 되돌리고 싶은 경우가 종종 생기곤 합니다. Git에서 이력을 되돌리기 위해서 사용하는 것 중에서 대표적인 것 2개가 바로 Reset과 Revert인데요. 둘 다 과거로 되돌린다는 의미라 언뜻 보기엔 비슷해 보이는데 과연 차이점은 무엇일까요? Reset과 Revert의 차이점 Reset: 과거 커밋으로 되돌린다. (이력 남기지 않음) Revert :...","categories": ["Git"],
        "tags": ["reset","revert","git"],
        "url": "/git/post23/",
        "teaser": null
      },{
        "title": "jekyll serve 할 때 install missing gem executables with 'bundle install' 오류 해결 방법",
        "excerpt":"오늘은 jekyll 블로그를 serve할 때 install missing gem executables with ‘bundle install’ 오류가 나는 경우 해결하는 방법에 대한 포스팅입니다 :) 문제 상황 1 2 3 4 bundle exec jekyll serve bundler: command not found: jekyll Install missing gem executables with `bundle install` 해결 방법 1 2 3 4 $ rm...","categories": ["Blog"],
        "tags": ["지킬","jekyll","blog"],
        "url": "/blog/post24/",
        "teaser": null
      },{
        "title": "jekyll 실행 시 'require': cannot load such file -- webrick (LoadError) 오류 해결 방법",
        "excerpt":"문제 상황 1 2 3 4 ------------------------------------------------ Jekyll 4.2.0 Please append `--trace` to the `serve` command for any additional information or backtrace. ------------------------------------------------ bundle exec jekyll serve 명령어를 사용하여 로컬에서 지킬 서버를 구동하려고 할 때 위와 같은 오류가 발생하는 경우가 있습니다. 해결 방법 1 $ bundle add webrick 이런 경우에는...","categories": ["Blog"],
        "tags": ["지킬","jekyll","blog"],
        "url": "/blog/post25/",
        "teaser": null
      },{
        "title": "리액트 Hooks : useRef()",
        "excerpt":"✔️ useRef, 언제 사용할까? useRef는 크게 DOM 요소에 접근하는 경우, 렌더링을 일으키지 않고 값을 변경시키는 두 가지 경우에 사용합니다. Vanilla JavaScript로 특정 DOM 요소에 접근하고자 하는 경우에는 getElementById 혹은 querySelector 같은 함수를 사용하였는데요. 리액트에서는 useRef라는 Hook를 사용하거나, 콜백 함수 혹은 React.createRef(클래스형 컴포넌트) 라는 함수를 사용합니다. ✔️ useRef 사용법 1 import...","categories": ["React"],
        "tags": ["useRef","Hooks","리액트"],
        "url": "/react/post26/",
        "teaser": null
      },{
        "title": "PureComponent와 React.memo",
        "excerpt":"유저들은 반응이 빠른 UI를 선호합니다. 최근 리액트로 개발을 하다보니 자식 컴포넌트가 필요 이상으로 계속해서 렌더링이 되는 경우가 생겼고, 이는 곧 성능 저하로 이어지기 때문에 개선이 필요하다는 생각이 들었습니다. 우선 React의 특성으로, React 앱은 state가 변화하거나 관련된 props가 변경되는 경우 전체적으로 렌더링이 됩니다. React는 먼저 컴포넌트를 렌더링 한 뒤, 이전 렌더링...","categories": ["React"],
        "tags": ["React.memo","memo","PureComponent"],
        "url": "/react/post27/",
        "teaser": null
      },{
        "title": "MySQL/MariaDB 원격 접속 허용하기 (Host 'IP' is not allowed to connect to this MySQL server)",
        "excerpt":"MySQL(MariaDB)는 기본적으로 로컬에서만 접속할 수 있도록 설정되어 있습니다. 그래서 외부에서 DB에 접속하고자 하는 경우에는 반드시 접근 허용을 해주어야 합니다. ✔️ 접근 권한 확인 해당 오류가 났다는 것은 접근 권한이 없다는 것을 의미하는 것이라, 사실 권한 확인은 생략하고 넘어가도 되지만 그래도 한번 확인해보도록 하겠습니다. 1 select Host,User,plugin,authentication_string FROM mysql.user; DB 접속...","categories": ["MariaDB"],
        "tags": ["데이터베이스","DB","MariaDB"],
        "url": "/mariadb/post28/",
        "teaser": null
      },{
        "title": "JSDoc으로 타입 힌트 제공하면서 주석 예쁘게 달기",
        "excerpt":"✔️ JSDoc 이란? JSDoc은 자바스크립트 API 문서 생성기인데요. VSCode나 Webstorm 같은 편집기에서 기본으로 제공하고 있는 기능입니다. 이 기능을 사용하면 주석을 예쁘게 만들 수 있을 뿐만 아니라 함수 정보, 타입 힌트 등을 제공할 수 있어서 유용합니다. ✔️ JSDoc 사용법 사용법은 간단합니다. 아래와 같이 입력하면 됩니다. 1 /** ... */ 기본 형태가...","categories": ["JavaScript"],
        "tags": ["JSDoc","javaScript","자바스크립트","주석"],
        "url": "/javascript/post29/",
        "teaser": null
      },{
        "title": "리액트 Hooks : useCallback()",
        "excerpt":"useMemo() 에 대한 내용은 관련 포스팅 을 참고해주세요 :) ✔️ useCallback() useCallback() 함수는 앞서 공부했던 useMemo() 함수와 더불어 리액트 성능 최적화에 사용되는 React Hooks 입니다. 간단히 말해 useMemo() 는 어떤 결과값을 재사용할 때 사용하였고, useCallback()은 함수를 새로 만들지 않고 재사용하고 싶을 때 사용하는 것입니다. 언뜻 보면 비슷해보이지만 확실히 다른 기능을...","categories": ["React"],
        "tags": ["useCallback","useMemo","리액트","Hooks"],
        "url": "/react/post30/",
        "teaser": null
      },{
        "title": "MongoDB 기본 쿼리문 정리",
        "excerpt":"✔️ MongoDB MongoDB는 NoSQL이라 고정된 스키마나 JOIN이 존재하지 않고 동적 스키마형 문서를 사용합니다. 몽고디비에서는 그러한 동적 스키마형 문서를 Binary JSON(JavaScript Object Notaion) 라고 부릅니다. JSON 형태기 때문에 직관적이라 개발이 편리하고, 읽기 및 쓰기 성능이 뛰어나서 속도가 매우 빠릅니다. ✔️ RDB와 MongoDB 용어 비교 RDB와 MongoDB 용어를 비교하는 경우 아래와 같습니다....","categories": ["MongoDB"],
        "tags": ["몽고디비","mongoDB","쿼리문","DB"],
        "url": "/mongodb/post31/",
        "teaser": null
      },{
        "title": "간단하고 빠른 오픈소스 웹소켓 서버(soketi)",
        "excerpt":"✔️ Soketi? C로 작성되어 Node.js로 포팅. 빠르고 스케일러블 → 1 CPU당 20만 커넥션 가능, 1k 사용자에게 메시지 전송하는데 6ms 연결/메시지/채널 등 제한 없음 Pusher Protocol v7을 사용하므로 기존 코드 그대로 이용 HTTP Webhook지원 - 채널 점유시 트리거 (Lambda와 연결) Prometheus 모니터링 지원 Pusher처럼 app 관리 지원 ✔️ 바로가기 Docs :...","categories": ["New"],
        "tags": ["socket","soketi","웹소켓"],
        "url": "/new/post32/",
        "teaser": null
      },{
        "title": "UI/UX 디자인 공유 (1)",
        "excerpt":"Ecommerce Dashboard  by. Bartosz Maryniaczyk      ✔️ 링크   https://dribbble.com/shots/13846221-Ecommerce-Dashboard   🔔포스팅 공지  개인 공부 기록용 블로그 입니다.  잘못된 부분이 있을 시 메일이나 댓글로 지적해주시면 감사드리겠습니다 :)  ","categories": ["Uiux"],
        "tags": ["UI","UX","디자인","웹디자인","Dashboard","대시보드"],
        "url": "/uiux/post33/",
        "teaser": null
      },{
        "title": "UI/UX 디자인 공유 (2)",
        "excerpt":"Dashboard_UI  by. DStudio®      ✔️ 링크   https://dribbble.com/shots/13940752-Dashboard-UI   🔔포스팅 공지  개인 공부 기록용 블로그 입니다.  잘못된 부분이 있을 시 메일이나 댓글로 지적해주시면 감사드리겠습니다 :)  ","categories": ["Uiux"],
        "tags": ["UI","UX","디자인","웹디자인","Dashboard","대시보드"],
        "url": "/uiux/post34/",
        "teaser": null
      },{
        "title": "파이어베이스(Firebase)란?",
        "excerpt":"✔️ 파이어베이스란? 파이어베이스는 2011년 파이어베이스라는 회사가 개발하고 2014년 이후 구글에서 인수하여 서비스를 이어나가고 있는 모바일 플랫폼인데요. 일종의 개발을 편리하게 해주는 유용한 플랫폼이라고 할 수 있습니다. 파이어베이스는 앱을 개발하고, 개선하고, 키워나갈 수 있는 도구 모음(toolset) 인데 만약 이러한 도구가 없다면 개발자는 서비스의 상당 부분을 직접 만들어내야만 합니다. 개발자는 보통 사용자 경험(UX)에...","categories": ["Web"],
        "tags": ["Firebase","google","파이어베이스"],
        "url": "/web/post35/",
        "teaser": null
      },{
        "title": "Node.js 몽고디비 (MongoDB) Driver API",
        "excerpt":"✔️ Node.js MongoDB Driver API 최근 몽고디비와 Node.js를 연동해서 사용하다 보니 문법적으로 맞지 않아 당황스러운 경우가 종종 생기곤 했습니다. 예를 들어 아래와 같이 find 쿼리를 실행시키는 도중에 데이터 양을 제한하기 위해서 projection document를 포함하여 반환할 필드를 지정한 적이 있었는데 그 때 적용되지 않고 자꾸만 전체 필드값을 리턴하는 문제가 발생했습니다. 1...","categories": ["MongoDB"],
        "tags": ["몽고디비","MongoDB","api"],
        "url": "/mongodb/post36/",
        "teaser": null
      },{
        "title": "파이어베이스(firebase)와 리액트로 간단하게 구글 로그인 구현하기",
        "excerpt":"✔️ 파이어베이스 구글 로그인 요즘 웹서비스에서 대부분 소셜 로그인을 지원하고 있고, 개발을 하다보면 소셜로그인이 필요한 경우가 생깁니다. 파이어베이스를 접하기 전에는 OAuth로 소셜 로그인을 구현할 수 있었지만, 파이어베이스를 사용하면 훨씬 간단하게 구현할 수 있습니다 :) https://ilimes.github.io/web/post35/ [파이어베이스가 무엇인지 궁금하시다면 위 링크를 클릭해보세요.] ✔️ 사용 방법 https://firebase.google.com/ 가장 먼저 파이어베이스를 사용하기 위해서는...","categories": ["Web"],
        "tags": ["파이어베이스","firebase","구글로그인"],
        "url": "/web/post37/",
        "teaser": null
      },{
        "title": "Git - Rebase 알아보기",
        "excerpt":"✔️ Rebase란? rebase는 git에서 브랜치를 합치는 명령어로 실행결과만 놓고보면 merge와 유사하다고 할 수 있는데요. 두 명렁어의 차이는 커밋 히스토리가 달라진다는 것 입니다. rebase를 사용하면 커밋 순서도 변경할 수 있고 중복 커밋도 하나로 합칠 수 있어 이력 관리를 깔끔하게 할 수 있습니다. rebase는 말 그대로 기준(base)을 새롭게 설정한다는 뜻으로 이해하면 좋습니다....","categories": ["Git"],
        "tags": ["깃","rebase","git"],
        "url": "/git/post38/",
        "teaser": null
      },{
        "title": "Visual Studio Code(VSCODE) 초기화 및 재설치 하기",
        "excerpt":"✔️ 문제 최근 한글 이름으로 되어있는 사용자 이름을 영어로 바꾸고나서 VSCODE를 사용할 때 내용이 업데이트 되면 이따금씩 오류가 발생하게 되었습니다. 그래서 해결방법을 찾아보던 와중에 가장 쉬운 해결방법은 프로그램을 재설치 하는 것이라고 하여 모든 내용을 초기화 한 뒤에 VSCODE를 재설치하였습니다. (관련 링크 : https://github.com/microsoft/vscode/issues/102039) ✔️ 삭제 및 재설치 1. 플러그인 삭제...","categories": ["Issue"],
        "tags": ["vscode","재설치","vscode재설치"],
        "url": "/issue/post39/",
        "teaser": null
      },{
        "title": "npm과 yarn의 차이는 무엇일까?",
        "excerpt":"✔️ npm? yarn? npm과 yarn은 모두 Node.js 패키지 관리자로, 결론부터 말하면 yarn이 npm에서 부족했던 기능들을 보충해서 출시한 것이라고 할 수 있는데요. 현재는 npm도 계속 개선된 버전이 나와서 사실상 둘의 사용은 취향 차이라고 봐도 무방합니다. npm 전 세계적으로 가장 많은 이들이 사용하고 있는 패키지 관리자 입니다. Node.js로 만들어진 모듈을 쉽게 설치...","categories": ["Web"],
        "tags": ["npm","yarn","개발상식"],
        "url": "/web/post40/",
        "teaser": null
      },{
        "title": "UI/UX 디자인 공유 (3)",
        "excerpt":"Dashboard  by. Sajon      ✔️ 링크   https://dribbble.com/shots/15025300-Dashboard   🔔포스팅 공지  개인 공부 기록용 블로그 입니다.  잘못된 부분이 있을 시 메일이나 댓글로 지적해주시면 감사드리겠습니다 :)  ","categories": ["Uiux"],
        "tags": ["UI","UX","디자인","웹디자인","Dashboard","대시보드"],
        "url": "/uiux/post41/",
        "teaser": null
      },{
        "title": "Mac, 맥북 업데이트 후 xcrun: error: invalid active developer path 에러 나는 경우 해결방법",
        "excerpt":"✔️ 오류발생 최근 macOS를 Ventura로 업그레이드 했는데 개발 관련 도구(이를테면 git)가 missing xcrun 에러를 내뿜게 되었습니다. 알고보니 아주 간단하게 해결할 수 있는 문제더라고요. 그래서 오늘은 맥북 사용자 분들께서 해당 오류가 나는 경우에 간단하게 해결할 수 있는 방법을 공유해드리고자 합니다. ✔️ 오류원인 이러한 오류가 발생하는 것은 업데이트 과정을 거친 뒤에 CommandLineTools을...","categories": ["Issue"],
        "tags": ["mac","맥북","xcrun","xcode","error","에러"],
        "url": "/issue/post42/",
        "teaser": null
      },{
        "title": "리액트 Redux 기초 개념 정리",
        "excerpt":"✔️ Redux란? 리덕스는 리액트에서 많이 사용되는 상태 관리 라이브러리 중 하나입니다. 리덕스를 사용하게 되면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜 효율적인 관리가 가능하게 됩니다. ✔️ Redux 설치 1 npm i redux react-redux ✔️ Redux 기본개념 리덕스는 크게 3가지의 기본 개념이 있습니다. 동일한 데이터는 항상 같은 곳에서 가지고 온다....","categories": ["React"],
        "tags": ["리액트","리덕스","redux","react","리덕스기초"],
        "url": "/react/post43/",
        "teaser": null
      }]
