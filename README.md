# 프뉴비(201930216 배다슬, 201840231 최기룡 , 201540218 선정인)
+ 팀명 : 프뉴비
+ 이름 : 배다슬(팀장: 디자인, 개발), 최기룡(팀원: 개발), 선정인(팀원: 디자인,)
+ 졸업작품 소개 사이트 : https://das0166.github.io/frontnewbie/
+ 졸업작품 주제 : 일정 관리 웹 사이트
+ 작품 소개
    - 작품명 : 나의 하루를 책임질 '투데이'
    - 개발환경 : <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
    - 작품 소개 : 오늘 해야할 일을 확인할 수 있는 투두 기능 및 캘린더 기능이 있는 사이트
    - 작품의 특징 : 캘린더 기능에 일정 추가까지 가능하여 제목, 시간, 장소 등을 작성할 수 있음
---
##  [ 2022년 09월 21일 ]
+ 회의 내용
    - 푸터 보류
    - 로그인 페이지
        - 소셜로그인(카카오, 네이버), 일반 로그인
    - 회원가입 페이지에 들어갈 내용
        - 이름, 이메일(중복 확인), 생년월일

+ 25일까지 할 일
    - 배다슬
        - 헤더 완성
        - 전반적인 React 학습
        - 메인 페이지 틀 잡기
        - 로그인 페이지 완성(기능 제외)

    - 최기룡
        - 캘린더 라이브러리 적용 시도
        - 전반적인 React 학습
        - 회원가입 페이지 완성(기능 제외)

##  [ 2022년 09월 14일 ]
+ 로고 완성  
    ![홈화면1](./img/%ED%88%AC%EB%8D%B0%EC%9D%B4_%EB%A1%9C%EA%B3%A0.png)

+ Router Dom 사용하여 페이지 이동
+ 팀원과 Git repository 연동
+ 작품 기술서 최종 제출 완료


##  [ 2022년 09월 07일 ]
+ 팀규칙
    - 참여 : 팀 회의는 100% 참석하기, 결정된 참석 일정 일방적으로 불참하지 않기
    - 회의 : 일주일에 최소 1번 진행
    - 의견 : 자신의 의견은 자유롭게 얘기하기
    - 팀장 : 공평하게 진행될 수 있게 자유로운 분위기 조성
+ 작품기획(브레인스토밍)
    - 현재 상황
        - 일정 관리 및 Todo 웹 사이트를 만들고자 함
        - 프론트엔드로만 구성되어 있어 서버 및 DB 숙련도 부족
        - HTML, CSS에 특화된 팀원들로 구성되어 있기 때문에 기초적인 틀 개발은 문제 없음
        - React 및 JavaScript 숙련도 부족
        - 다른 사례들(캘린더, Toggl, Todoist)과 차별점을 두어야 함
    - 예상되는 결과물
        - 문제해결을 위한 실행 방법 : 공부를 병행하며 프로젝트 진행 예정, 벤치마킹을 진행하며 차별점을 구상할 예정 
        - 필요한 지식 및 기술 : HTML, CSS, React, JavaScript, DB
        - 예상되는 결과물 : Todo, 캘린더, 일정 관리
        - 회로도  
        ![회로도](./img/%ED%88%AC%EB%8D%B0%EC%9D%B4_%ED%9A%8C%EB%A1%9C%EB%8F%84.png)
+ 예상 결과물
    - 홈화면
    ![홈화면1](./img/%ED%88%AC%EB%8D%B0%EC%9D%B4_%ED%99%88%ED%99%94%EB%A9%B4.png)
    ![홈화면2](./img/%ED%88%AC%EB%8D%B0%EC%9D%B4_%ED%99%88%ED%99%94%EB%A9%B42.png)
    - 캘린더
    ![캘린더](./img/%ED%88%AC%EB%8D%B0%EC%9D%B4_%EC%BA%98%EB%A6%B0%EB%8D%94.png)
    - 로그인
    ![로그인](./img/%ED%88%AC%EB%8D%B0%EC%9D%B4_%EB%A1%9C%EA%B7%B8%EC%9D%B8.png)

+ 기능
    + 홈화면<br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**왼쪽 메모지**
        + 오늘 할 일이 보여짐(Todo)
        + today 왼쪽에 있는 edit 버튼을 누르면 메모지, 글 색상 등을 변경할 수 있으며 할 일을 추가할 수 있음
        + 화살표를 누르면 다음 날에 할 일을 확인할 수 있음<br> **오른쪽 메모지**
        + 포스트잇에는 오늘 날짜에 추가한 일정들이 나옴
    + 캘린더
        + 연도, 월, 주 단위로 캘린더를 볼 수 있음
        + 해당 날짜에 등록한 일정이 표시 됨
        + 생일이나 공휴일 등 주요 기념일 표시 됨
        + 오늘이 아닌 다른 날짜의 일정을 추가 할 수 있음
    + 로그인
        + 소셜 로그인도 가능


##  [ 2022년 08월 31일 ]
+ 팀명 : 프뉴비
+ 이름 : 배다슬(팀장: 디자인, 개발), 최기룡(팀원: 개발)
+ 졸업작품 소개 사이트 : https://das0166.github.io/frontnewbe/
+ 졸업작품 주제 : 일정 관리 웹 사이트
+ 작품 소개
    - 작품명 : 나의 하루를 책임질 '투데이'
    - 개발환경 : <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
    - 작품 소개 : 오늘 해야할 일을 확인할 수 있는 투두 기능 및 캘린더 기능이 있는 사이트
    - 작품의 특징 : 캘린더 기능에 일정 추가까지 가능하여 제목, 시간, 장소 등을 작성할 수 있음
